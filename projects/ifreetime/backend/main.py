from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import datetime
import os
from engine import FreeTimeEngine, FreeSlot

app = FastAPI(title="iFreeTime API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = FreeTimeEngine()

# Mock storage for tokens in Phase 2
mock_db = {
    "users": {
        "user_123": {
            "google_token": "mock_token"
        }
    }
}

class FreeSlotResponse(BaseModel):
    start: str
    end: str
    duration_minutes: int

class ShareResponse(BaseModel):
    text: str
    slots: List[FreeSlotResponse]

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}

@app.get("/api/free-time", response_model=ShareResponse)
async def get_free_time(user_id: str = "user_123"):
    # In a real app, we'd fetch from Google Calendar API here
    # For MVP verification, we use mock events that look like Google API response
    now = datetime.datetime.now()
    mock_events = [
        {
            "summary": "Meeting",
            "start": {"dateTime": (now + datetime.timedelta(hours=2)).isoformat()},
            "end": {"dateTime": (now + datetime.timedelta(hours=3)).isoformat()}
        },
        {
            "summary": "Focus Time",
            "start": {"dateTime": (now + datetime.timedelta(days=1, hours=1)).isoformat()},
            "end": {"dateTime": (now + datetime.timedelta(days=1, hours=4)).isoformat()}
        }
    ]
    
    slots = engine.find_free_slots(mock_events)
    share_text = engine.format_shareable_text(slots)
    
    return {
        "text": share_text,
        "slots": [
            {
                "start": s.start.isoformat(),
                "end": s.end.isoformat(),
                "duration_minutes": s.duration_minutes
            } for s in slots
        ]
    }

@app.post("/api/connect/google")
async def connect_google(user_id: str):
    # Placeholder for OAuth flow
    return {"auth_url": "https://accounts.google.com/o/oauth2/auth?..." }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
