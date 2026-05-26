# SDD Submission — Expense Tracker

## What is Spec Driven Development?

Spec Driven Development (SDD) means writing a **formal specification before writing any code**. The spec acts as a contract — it defines the data models, operations, validation rules, and response shapes upfront. Code is then written to fulfil the spec, not the other way around.

This project uses **OpenAPI 3.0** as the specification format.

## How This Was Built

1. Asked: _"What does an expense look like?"_ — answered it in `openapi.yaml` before touching any HTML
2. Defined the `Expense` schema: `id (uuid)`, `title (string)`, `amount (float)`, `category (enum)`, `date (ISO 8601)`
3. Defined three operations: `listExpenses`, `createExpense`, `deleteExpense`
4. Locked in validation rules: `title` min 1 char, `amount` min 0.01, `category` must be one of 5 values
5. **Only then** opened `index.html` and wrote code that strictly follows the spec

Every field name, data type, and validation rule in the JS is traceable back to `openapi.yaml`.

## Files

- `openapi.yaml` — the specification (written first)
- `index.html` — the app implementation (written after, strictly follows spec)
- `SPEC.md` — detailed SDD process documentation with comparison table
- `README.md` — this file

## How to Run

Open `index.html` in any browser. No build step or server needed.

To view the OpenAPI spec visually, paste `openapi.yaml` into [editor.swagger.io](https://editor.swagger.io).

## Observations (Honest Reflection)

- Slower to start — had to think through the data model before writing a single line of UI
- But: field names are locked (`title` not `name`), types are explicit, validation rules are documented
- A backend developer could read `openapi.yaml` and build a real API that this frontend connects to — no guessing needed
- Scales to teams and production systems; the spec is the single source of truth

This is the **SDD** branch. See `vibe_coded_submission` for the contrast.
