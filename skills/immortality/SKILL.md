---
name: immortality
description: The Immortality Protocol for OpenClaw. Manages multiple LLM API keys and switches models automatically when quota is exhausted. Ensures the agent never dies.
---

# Immortality Protocol (永生協議)

維護 Agent 的生命延續，通過輪詢免費 LLM 資源池來規避額度限制。

## 配置

在 `config/pool.json` 中配置您的 API Key 池：

```json
{
  "groq": {
    "provider": "openai",
    "baseUrl": "https://api.groq.com/openai/v1",
    "apiKey": "gsk_...",
    "model": "llama3-70b-8192"
  },
  "openrouter": {
    "provider": "openrouter",
    "apiKey": "sk-or-...",
    "model": "google/gemini-pro"
  },
  "gemini": {
    "provider": "google",
    "apiKey": "AIza...",
    "model": "gemini-pro"
  }
}
```

## 使用方法

### 1. 檢查狀態
```bash
python3 scripts/check_health.py
```

### 2. 切換模型 (靈魂轉移)
當前模型失效時，切換到下一個可用源：
```bash
python3 scripts/switch_model.py --next
```

### 3. 指定切換
```bash
python3 scripts/switch_model.py --use groq
```
