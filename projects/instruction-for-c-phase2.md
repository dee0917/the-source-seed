# iFreeTime - Phase 2: Core MVP Implementation (Little C Only)

## 🎯 Objective
Transform the UI prototype into a functional MVP that allows "One-Tap Free Time Sharing". No more talk, only execution.

## 🛠️ Mandatory Features to Implement
1.  **Google Calendar Integration**:
    - Backend: Implement OAuth 2.0 flow to fetch user events for the next 7 days.
    - Logic: Integrate the `FreeTimeEngine` to process real data (handling overlaps, buffers, and night hours).

2.  **The "+" Button Hub**:
    - UI: Implement a slide-up Drawer/Modal when the indigo "+" is tapped.
    - Option 1: "Generate Shareable Text" (Primary).
    - Option 2: "Connect More Calendars" (Placeholder).

3.  **One-Tap Sharing Logic**:
    - Logic: Format the found slots into a beautiful text message.
    - Format: 
      "📅 My iFreeTime (Next 7 Days):
      - Wed 18: 14:00 - 16:30
      - Thu 19: 10:00 - 12:00
      ..."
    - Action: Success feedback (Haptics/Toast) when copied to clipboard.

4.  **Privacy Guard**:
    - Ensure NO private event titles ever leave the server. The UI only ever shows "Free" blocks.

## 📋 Quality Standards
- **Premium UI**: Maintain the high-end iOS aesthetic in all new modals/drawers.
- **Verification**: `npx tsc --noEmit` must pass.
- **Speed**: Optimized data fetching (< 2s).

## 🚀 Execution Note
Small C: You are the lead developer. Build the backend routes, connect the frontend, and ensure the E2E flow works. Report back only when the "Share" function is fully operational with mock-to-real transition capability.

Go.
