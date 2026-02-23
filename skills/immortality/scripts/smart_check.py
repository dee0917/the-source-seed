#!/usr/bin/env python3
import subprocess
import json
import sys

def check_and_notify():
    # 執行 openclaw status 獲取 JSON 格式的狀態
    try:
        result = subprocess.run(['openclaw', 'status', '--json'], capture_output=True, text=True)
        data = json.loads(result.stdout)
        
        # 獲取當前模型的剩餘比例 (以 gemini-3-flash 為例)
        # 這裡需要解析實際的 JSON 結構，以下為邏輯示意
        usage = data.get('usage', [])
        for item in usage:
            if 'gemini-3-flash' in item.get('model', ''):
                percent_left = item.get('percentLeft', 100)
                if percent_left <= 10:
                    print(f"⚠️ 能量警報：主能源 Gemini 3 Flash 僅剩 {percent_left}%。")
                    return
        
        # 如果一切正常，則不輸出任何內容 (避免觸發通知)
        pass
    except Exception as e:
        # 靜默處理錯誤，不浪費對話空間
        pass

if __name__ == "__main__":
    check_and_notify()
