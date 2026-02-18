import datetime
from typing import List, Dict, Any
from pydantic import BaseModel

class FreeSlot(BaseModel):
    start: datetime.datetime
    end: datetime.datetime
    duration_minutes: int

class FreeTimeEngine:
    def __init__(self, start_hour: int = 9, end_hour: int = 22, buffer_minutes: int = 15):
        self.start_hour = start_hour
        self.end_hour = end_hour
        self.buffer_minutes = buffer_minutes

    def find_free_slots(self, events: List[Dict[str, Any]], days: int = 7) -> List[FreeSlot]:
        now = datetime.datetime.now()
        free_slots = []

        for i in range(days):
            current_day = (now + datetime.timedelta(days=i)).date()
            day_start = datetime.datetime.combine(current_day, datetime.time(self.start_hour, 0))
            day_end = datetime.datetime.combine(current_day, datetime.time(self.end_hour, 0))
            
            # Filter and sort events for the current day
            day_events = []
            for event in events:
                start = self._parse_datetime(event['start'].get('dateTime', event['start'].get('date')))
                end = self._parse_datetime(event['end'].get('dateTime', event['end'].get('date')))
                
                if start.date() == current_day:
                    day_events.append((start, end))
            
            day_events.sort()

            # Find gaps
            last_end = day_start
            for start, end in day_events:
                if start > last_end:
                    gap = (start - last_end).total_seconds() / 60
                    if gap >= 30: # Minimum 30 mins
                        free_slots.append(FreeSlot(
                            start=last_end,
                            end=start,
                            duration_minutes=int(gap)
                        ))
                last_end = max(last_end, end)
            
            if day_end > last_end:
                gap = (day_end - last_end).total_seconds() / 60
                if gap >= 30:
                    free_slots.append(FreeSlot(
                        start=last_end,
                        end=day_end,
                        duration_minutes=int(gap)
                    ))

        return free_slots

    def _parse_datetime(self, dt_str: str) -> datetime.datetime:
        try:
            return datetime.datetime.fromisoformat(dt_str.replace('Z', '+00:00'))
        except ValueError:
            # Handle date-only strings
            return datetime.datetime.strptime(dt_str, '%Y-%m-%d')

    def format_shareable_text(self, slots: List[FreeSlot]) -> str:
        if not slots:
            return "📅 My iFreeTime (Next 7 Days):\nNo free slots found. Try connecting more calendars!"
        
        lines = ["📅 My iFreeTime (Next 7 Days):"]
        current_date = None
        
        # Sort slots by start time
        sorted_slots = sorted(slots, key=lambda x: x.start)
        
        slots_by_day = {}
        for slot in sorted_slots:
            date_str = slot.start.strftime("%a %d")
            if date_str not in slots_by_day:
                slots_by_day[date_str] = []
            slots_by_day[date_str].append(slot)
            
        for date_str, day_slots in slots_by_day.items():
            time_ranges = [f"{s.start.strftime('%H:%M')} - {s.end.strftime('%H:%M')}" for s in day_slots]
            lines.append(f"- {date_str}: {', '.join(time_ranges)}")
        
        return "\n".join(lines)
