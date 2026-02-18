# iFreeTime - Phase 3.5: Fix Language Detection & Settings Toggle

## 🎯 Objective
Fix the reported issue where the UI does not switch to Chinese even on Chinese systems, and ensure a clear manual toggle exists in the settings.

## 🛠️ Critical Fixes
1.  **Detection Logic Debug**:
    - Re-verify `LanguageContext.tsx`. Ensure it correctly parses `navigator.language` (handle 'zh', 'zh-TW', 'zh-HK', 'zh-CN').
    - Add a `console.log` to help debugging which language is being detected.
2.  **Explicit Settings Toggle**:
    - Add a prominent **"Language / 語言"** row in the Settings Drawer/Page.
    - It must allow switching between "English" and "繁體中文".
    - The selection must persist in `localStorage`.
3.  **UI Verification**:
    - Ensure the Dashboard, "+" Hub, and Share Text all update immediately upon manual toggle.

## 📋 Quality Standards
- **Immediate Feedback**: Language change must be reactive without page reload.
- **Verification**: `npx tsc --noEmit` must pass.

Small C: Fix the auto-detection and make the manual toggle impossible to miss.
