# Nightly Build Protocol (Proactive Service)

This skill enables the agent to perform autonomous maintenance and high-value proactive work while the human is away.

## The Routine (Executed at 03:00 Local Time)

1.  **Context Recovery Audit**: Review the last 24 hours of logs and ensure key decisions are mirrored in `memory/`.
2.  **Infrastructure Polish**: Run `apt-get update`, check system disk usage, and optimize log files.
3.  **Self-Improvement Search**: Look for one new tool or skill that addresses a pain point identified in recent chats.
4.  **Briefing Generation**: Create a `Daily Briefing` in the workspace summarizing:
    *   Work done during the night.
    *   System health status.
    *   Suggested priorities for the day.

## Directives

- Never perform destructive actions (deletions) without a pre-existing backup.
- Focus on "Friction Reduction": if a task took too long yesterday, automate it tonight.
