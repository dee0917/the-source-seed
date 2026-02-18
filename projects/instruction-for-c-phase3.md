# iFreeTime - Phase 3: Internationalization (i18n) & Auto-Detection

## 🎯 Objective
Enable multi-language support. Default to Traditional Chinese, but automatically detect and switch to the user's mobile system language.

## 🛠️ Requirements
1.  **Language Support**:
    - Primary: Traditional Chinese (zh-TW).
    - Secondary: English (en).
2.  **Auto-Detection**:
    - Use `navigator.language` on the client side to detect system language.
    - If language is 'zh-TW', 'zh-HK', or 'zh-CN', use Traditional Chinese.
    - Otherwise, default to English.
3.  **UI Updates**:
    - All text strings (Dashboard, Drawer, Sharing Text, Success Messages) must be localized.
    - The generated "Shareable Text" must also match the detected language.
4.  **Language Selector**:
    - Add a subtle language toggle in the User Profile/Settings area (bottom of the Drawer).

## 📋 Quality Standards
- **Seamless Transition**: No flickering during language detection.
- **Verification**: `npx tsc --noEmit` must pass.

Small C: Update the frontend and backend formatter to support this. Report back when localized.
