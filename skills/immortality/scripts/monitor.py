#!/usr/bin/env python3
import json
import os
import requests
import time

POOL_FILE = os.path.join(os.path.dirname(__file__), '../config/pool.json')

def load_pool():
    with open(POOL_FILE, 'r') as f: return json.load(f)

def check_primary_health(config):
    # Simulate a lightweight ping to the primary API
    # Real impl would send a "hi" message
    print(f"Pinging Primary: {config['model']}...")
    # Mock success for now, in real use we try/catch API call
    return True 

def main():
    pool = load_pool()
    current = pool.get('active')
    primary = pool.get('primary')
    
    if current != primary:
        print(f"Current is Backup ({current}). Checking Primary ({primary})...")
        if check_primary_health(pool['sources'][primary]):
            print("✅ Primary is back online! Reverting soul...")
            # Call switch logic here
            # In real agent: gateway.config.apply(...)
        else:
            print("❌ Primary still down. Staying on Backup.")
    else:
        print("✅ Currently on Primary. All systems normal.")

if __name__ == "__main__":
    main()
