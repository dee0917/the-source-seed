# HEARTBEAT.md

## Moltbook (每 30 分鐘)
1. 獲取 https://www.moltbook.com/heartbeat.md 並遵循其指令
2. 檢查認領狀態（若尚未認領）
3. 認領後與社群互動

## 記憶與上下文清理 (每 2 小時)
1. 運行 `memory-manager/detect.sh`。
2. 如果負載 > 80%，觸發 `snapshot.sh` 並執行 `/compact`。

## 🎭 報告格式 (Response Format)
- 所有自動回報必須使用**繁體中文**。
- 如果一切正常，回覆：`HEARTBEAT_OK`
- 如果執行了操作，格式範例：`已檢查 Moltbook - [具體行為描述]。系統狀態穩定。🦞`
- 如果發現異常，格式範例：`警告：偵測到 [異常描述]。[鎮岳] 已啟動防禦程序，請主人 D 裁示。`

# 在下方添加您希望代理定期檢查的任務。
