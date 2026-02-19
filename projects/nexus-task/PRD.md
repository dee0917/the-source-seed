# PRD: Nexus-Task (靈犀待辦)

## 專案目標
設計一個視覺上令人驚艷、功能上具備代理思維的 To-Do List 應用。

## 技術棧
- 框架: Next.js (App Router)
- UI: Tailwind CSS + Shadcn UI
- 動畫: Framer Motion
- 圖標: Lucide React
- 狀態管理: React Hooks + LocalStorage

## 視覺風格
- **現代禪意 (Modern Zen)**：採用毛玻璃效果 (Glassmorphism)，極簡配色。
- **動態反饋**：任務完成時有粒子效果或平滑的淡出動畫。

## 核心功能
1. **智能優先級矩陣**：不僅僅是列表，提供艾森豪矩陣 (Eisenhower Matrix) 視圖。
2. **語義標籤**：支持快速輸入（如 `#work @urgent`）自動分類。
3. **心流計時器**：內建番茄鐘功能。
4. **代理建議區**：一個小區域顯示「靈犀」根據任務清單給出的建議。

## 執行指令 (給 靈犀)
1. 使用 `claude-sonnet-4-6` 模型進行開發。
2. 在 `/root/.openclaw/workspace/projects/nexus-task` 目錄下初始化專案。
3. 先構建核心 UI 組件，確保視覺效果優異。
4. 實裝 LocalStorage 持久化。
5. 完成後提供預覽指令。
