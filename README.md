# SDD Submission — Expense Tracker

## Approach: Spec Driven Development (SDD)

Spec Driven Development means writing a **formal specification before writing any code**. The spec is the single source of truth — it defines the data models, operations, validation rules, and file structure. Code is a consequence of the spec, not the other way around.

This submission uses **OpenAPI 3.0** as the specification format, **OpenSpec** to manage the SDD workflow, and **Antigravity IDE** as the AI coding assistant.

---

## How This Was Built

The development followed the OpenSpec workflow strictly:

**1. `/opsx-propose` — Define the feature in plain English**
Described the Expense Tracker requirements to the AI agent. OpenSpec generated a formal functional spec saved in `openspec/specs/`.

**2. `/opsx-explore` — Generate an implementation plan**
OpenSpec analysed the spec and produced a structured plan (`openspec/plan.md`) and task breakdown (`openspec/tasks.md`) before any code was written.

**3. `/opsx-apply` — Generate code from the spec**
Only after the spec and plan were finalised did Antigravity generate `index.html`, `style.css`, and `script.js`. Every field name, validation rule, and file structure decision traces back to the spec.

**4. Spec updated → Code updated**
When the file structure was changed (single `index.html` → three separate files), the spec was updated first via `/opsx-propose`, then the code was regenerated. The spec always leads.

---

## Files

```
sdd_submission/
├── index.html       — HTML structure (generated from spec)
├── style.css        — All styling (generated from spec)
├── script.js        — All JavaScript logic (generated from spec)
├── openapi.yaml     — OpenAPI 3.0 specification (written first)
├── SPEC.md          — Full SDD process documentation
├── README.md        — This file
├── openspec/        — OpenSpec workflow artifacts
│   ├── specs/       — Functional specifications
│   ├── changes/     — Proposed changes log
│   ├── plan.md      — Implementation plan
│   ├── tasks.md     — Task breakdown
│   └── config.yaml  — OpenSpec configuration
└── .agent/          — Antigravity agent skills and workflows
```

## How to Run

Open `index.html` in any browser. No build step or server needed.

To view the OpenAPI spec visually, paste `openapi.yaml` into [editor.swagger.io](https://editor.swagger.io).

---

## What the Spec Defines

The `openapi.yaml` written before any code locks in:

| Element | Spec definition |
|---|---|
| Expense fields | `id` (uuid), `title` (string), `amount` (float), `category` (enum), `date` (ISO 8601) |
| Validation | `title` min 1 char, `amount` min 0.01, `category` one of 5 values |
| Operations | `listExpenses`, `createExpense`, `deleteExpense` |
| Response shape | `{ expenses: Expense[], total: number }` |

Every one of these is verifiable in the code — nothing was invented during implementation.

---

## Honest Reflection

**What worked well:**
- Field names, types, and validation rules were decided once, upfront
- The spec acts as documentation — no need to read the code to understand the data model
- File structure changes went through the spec first — no surprise diffs
- A backend developer could build a real API from `openapi.yaml` with no guesswork

**What was harder:**
- Slower to start — required thinking through the full data model before writing line 1
- Updating the spec before changing code requires discipline
- Overkill for a five-minute fix — SDD pays off at scale

---

See the `vibe_coded_submission` branch for the same app built without a spec.
