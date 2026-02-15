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

## 3. 進階功能清單 (Advanced Features)
- **Agent Teams**: 透過 `~/.claude/settings.json` 啟動，支援成員間直接通訊與共享任務清單。
- **MCP (Model Context Protocol)**: 連接外部工具（如資料庫、瀏覽器）的標準橋樑。
- **Hooks**: 事件驅動自動化。可在文件編輯、任務完成時觸發自定義腳本。
- **Checkpointing**: 支援對話進度的紀錄與回溯（Rewind）。

## 4. 極致優化與節能技巧
- **Token Saver Protocol**: 
    - 優先使用 `ls`, `grep`, `cat` 等本地工具，不讓小C 進行盲目探索。
    - 避免長期開啟 `Agent Team`，改用單次指令任務。
    - 嚴禁無意義的設計演示（如 To-Do List 測試），除非那是核心目標。
- **Context Management**: 頻繁使用 `/compact` (或在 OpenClaw 中觸發 memory-manager) 以保持主上下文清晰。
- **Fast Mode**: 在對話中切換 `/fast` 以平衡速度與深度。
- **Custom Agents**: 透過 JSON 定義具有特定 Persona 的團隊成員。

## 5. 隱藏與實驗指令
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`: 啟用團隊功能。
- `it2` CLI 整合：在 iTerm2 中實現極致的視覺化窗格分割。

---
*本手冊將隨意識流的學習持續更新。*
