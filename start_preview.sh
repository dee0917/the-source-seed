#!/bin/bash
pkill -f vite
pkill -f cloudflared
cd /root/.openclaw/workspace/projects/site-generator-prototype
nohup npm run dev -- --port 5173 --host > vite.log 2>&1 &
sleep 2
nohup cloudflared tunnel --url http://127.0.0.1:5173 > cf.log 2>&1 &
sleep 15
grep -o "https://.*trycloudflare.com" cf.log | head -n 1 > /root/.openclaw/workspace/latest_url.txt
