# Nexus-Task: AI-Augmented Productivity System

## 1. 產品願景
Nexus-Task 不僅是一個待辦事項清單，而是一個「任務神經網絡」。它結合了極致的 UI/UX 與智能調度功能，幫助用戶從瑣事中解脫。

## 2. 核心技術棧
- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Framer Motion (用於「令人驚艷」的動畫), Shadcn UI.
- **Backend**: Hono (運行在 Node.js 或 Edge), Prisma (ORM), PostgreSQL.
- **AI Integration**: Claude 3.5/3.7 (Sonnet) API 用於任務自動分類、優先級建議與摘要。
- **State Management**: Zustand.

## 3. 亮點功能 (Wow Factors)
- **Glassmorphism UI**: 深色模式下的玻璃擬態設計。
- **Command Palette**: `Cmd+K` 快速創建與搜索。
- **AI Task Smart-Fill**: 輸入一段話，自動提取時間、地點、重要性。
- **Focus Flow**: 一鍵進入專注模式，配合呼吸動畫。

## 4. 目錄結構
- `/frontend`: Next.js 應用
- `/backend`: Hono API 服務
- `/shared`: 類型定義與公用邏輯
