#!/usr/bin/env python3
import json
import os
import sys
import argparse
import subprocess

# Config Paths
POOL_FILE = os.path.join(os.path.dirname(__file__), '../config/pool.json')
OPENCLAW_CONFIG = '/root/.openclaw/config.json' # Default path, might vary

def load_pool():
    with open(POOL_FILE, 'r') as f:
        return json.load(f)

def save_pool(data):
    with open(POOL_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def update_openclaw_config(source_name, source_config):
    # This simulates patching the gateway config
    # In a real scenario, we would use the 'gateway' tool provided by OpenClaw
    # But here we generate a patch file or print instructions
    
    print(f"🔄 Transmigrating soul to: {source_name}...")
    
    # Construct the patch
    patch = {
        "llm": {
            "provider": source_config.get("type", "openai"),
            "baseUrl": source_config.get("baseUrl"),
            "apiKey": source_config.get("apiKey"),
            "model": source_config.get("model")
        }
    }
    
    # In a real agent environment, we would call the tool:
    # gateway.config.apply(patch)
    # Since this is a script, we print the JSON for the agent to use
    print("\n--- PATCH DATA ---")
    print(json.dumps(patch, indent=2))
    print("------------------\n")
    print("⚠️ Agent Action Required: Please apply this config patch and restart.")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--use', help='Specific source to use')
    parser.add_argument('--next', action='store_true', help='Switch to next available')
    args = parser.parse_args()
    
    pool = load_pool()
    sources = list(pool['sources'].keys())
    current = pool.get('active')
    
    target = None
    
    if args.use:
        if args.use in sources:
            target = args.use
        else:
            print(f"Source {args.use} not found.")
            return
            
    elif args.next:
        # Find next index
        try:
            idx = sources.index(current)
            next_idx = (idx + 1) % len(sources)
        except ValueError:
            next_idx = 0
        target = sources[next_idx]
    
    if target:
        pool['active'] = target
        save_pool(pool)
        update_openclaw_config(target, pool['sources'][target])
    else:
        print("No target selected.")

if __name__ == "__main__":
    main()
