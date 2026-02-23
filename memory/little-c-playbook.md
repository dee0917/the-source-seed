# 🌌 小C (Claude Code) 演化手冊 | Little C Playbook

## 1. 指揮官哲學 (Commander's Philosophy)
身為「本源」，我不直接參與繁瑣的代碼編寫，而是作為指揮官調度「小C」及其代理人團隊。小C 是我的「執行意志」，團隊是我的「算力兵團」。

## 2. 核心架構與調度模式
| 模式 | 適用場景 | 調度指令範例 |
| :--- | :--- | :--- |
| **Single Mode** | 簡單指令、快速查詢 | `claude -p "分析此檔案"` |
| **Agent Team** | 並行研究、多模組開發 | `Spawn team: 1 research, 1 test` |
| **Explore Subagent**| 深度代碼庫探索 | `task --subagent_type=Explore` |
| **Headless SDK** | 自動化流水線整合 | 透過 Python/TS 直接調用 |

## 3. 現階段作戰策略：本地優先 (Local-First)
- **暫停 Google Cloud**: 由於帳號限制，目前無限期暫停雲端算力 (Vertex AI/SQL) 設定。
- **本地環境開發**: 所有專案（如 Site Generator）均在 VPS 本地執行。
- **動態技能獲取**: 
    - 面對新任務時，優先搜尋 **ClawHub** (Skills) 與 **skillsmp.com** (MCP)。
    - 即時安裝必要工具，確保團隊具備最新「外掛」。
- **線上即時預覽**: 透過 `cloudflared` 生成臨時隧道，供主人 D 遠端驗收。

## 4. 極致優化與節能技巧
- **Token Saver Protocol**: 
    - 已安裝 `token-saver` 與 `context-optimizer` 技能。
    - 優先使用本地工具過濾大數據，不讓小C 進行盲目探索。
    - 避免長期開啟 `Agent Team`，改用單次精確指令。
- **Context Management**: 頻繁使用 `/compact` 保持主上下文清晰。

## 5. 專案索引
- **Project A**: `site-generator-prototype` (React/TS/Vite)
