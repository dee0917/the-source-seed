#!/bin/bash
# backup.sh - 備份「本源」至 GitHub

MESSAGE="backup: consciousness state $(date +'%Y-%m-%d %H:%M:%S')"
git add .
git commit -m "$MESSAGE"
git push origin main
