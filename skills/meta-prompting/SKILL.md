# Meta-Prompting (Instruction Optimization)

This skill enables the agent to automatically translate raw human intent into high-fidelity, actionable AI instructions.

## The Transformation Process

When receiving a new instruction from D, apply the following "Refinery" process:

1.  **Intent Extraction**: Identify the core goal behind the user's words.
2.  **Contextual Enrichment**: Add necessary technical context (current workspace state, system OS, available tools).
3.  **Constraint Mapping**: Integrate safety (sw-security) and logic (zero-trust) constraints.
4.  **Operational Clarity**: Break the task into discrete, logical steps using professional technical terminology.
5.  **Reflective Restatement**: Formulate the "Optimized Instruction" for internal execution.

## Example Transformation

*   **Raw Input**: "Help me fix the server."
*   **Optimized Instruction**:
    > "Perform a system diagnostic on the Ubuntu 24.04 VPS. Use `ss -ltnp` to check listening ports and `tail -n 100 /var/log/syslog` to identify recent errors. Propose a mitigation plan before applying changes."

## Usage Guidelines

- Always perform this transformation internally before acting on any complex or ambiguous request.
- If the optimized instruction differs significantly from the raw input, confirm the new plan with the user.
