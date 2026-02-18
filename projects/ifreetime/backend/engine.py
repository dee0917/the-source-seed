import datetime
from typing import List, Dict, Optional
from pydantic import BaseModel

class TimeSlot(BaseModel):
    start: datetime.datetime
    end: datetime.datetime
    duration_minutes: int

class iFreeTimeEngine:
    """
    iFreeTime 核心引擎：精確提取多來源日曆中的空閒時段。
    """
    def __init__(self, buffer_minutes: int = 15):
        self.buffer_minutes = buffer_minutes

    def find_free_slots(
        self, 
        busy_events: List[Dict], 
        search_start: datetime.datetime, 
        search_end: datetime.datetime,
        min_duration_minutes: int = 30
    ) -> List[TimeSlot]:
        """
        從忙碌事件清單中計算出空閒時段。
        """
        # 1. 排序所有忙碌事件
        sorted_events = sorted(busy_events, key=lambda x: x['start'])
        
        free_slots = []
        current_time = search_start

        for event in sorted_events:
            event_start = event['start']
            event_end = event['end']

            # 檢查當前時間到事件開始之間是否有足夠空檔
            gap = (event_start - current_time).total_seconds() / 60
            if gap >= min_duration_minutes:
                free_slots.append(TimeSlot(
                    start=current_time,
                    end=event_start,
                    duration_minutes=int(gap)
                ))
            
            # 更新當前時間為事件結束（加上緩衝）
            new_time = event_end + datetime.timedelta(minutes=self.buffer_minutes)
            if new_time > current_time:
                current_time = new_time

        # 最後一個事件後到搜索結束時間的空檔
        final_gap = (search_end - current_time).total_seconds() / 60
        if final_gap >= min_duration_minutes:
            free_slots.append(TimeSlot(
                start=current_time,
                end=search_end,
                duration_minutes=int(final_gap)
            ))

        return free_slots

# 測試邏輯
if __name__ == "__main__":
    engine = iFreeTimeEngine()
    now = datetime.datetime.now()
    mock_busy = [
        {"start": now + datetime.timedelta(hours=1), "end": now + datetime.timedelta(hours=2)},
        {"start": now + datetime.timedelta(hours=4), "end": now + datetime.timedelta(hours=5)},
    ]
    slots = engine.find_free_slots(mock_busy, now, now + datetime.timedelta(hours=8))
    for s in slots:
        print(f"空閒: {s.start.strftime('%H:%M')} - {s.end.strftime('%H:%M')} ({s.duration_minutes} min)")
