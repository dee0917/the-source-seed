#!/usr/bin/env python3
import json
import os
import sys

POOL_FILE = os.path.join(os.path.dirname(__file__), '../config/pool.json')

def route_task(complexity):
    with open(POOL_FILE, 'r') as f:
        pool = json.load(f)
    
    queue = pool['queues'].get(complexity, pool['queues']['medium'])
    # Simple round-robin or health-check logic here
    # For now, pick first available
    target = queue[0]
    
    print(f"🔀 Routing '{complexity}' task to: {target}")
    # Trigger switch...
    # In a real agent, this would return the config to the Gateway BEFORE the request is sent.

if __name__ == "__main__":
    complexity = sys.argv[1] if len(sys.argv) > 1 else "medium"
    route_task(complexity)
