# Expense Tracker Assignment

A simple Expense Tracker application built twice — using two contrasting software development approaches — to demonstrate the difference between **Vibe Coding** and **Spec Driven Development (SDD)**.

---

## Branches

### `vibe_coded_submission`
Built using **Vibe Coding** — an AI-assisted, intuition-first approach where the app was developed through prompting and iteration with no upfront planning or specification.

Files: `index.html`, `script.js`, `style.css`, `README.md`

### `sdd_submission`
Built using **Spec Driven Development** with **OpenSpec** and **Antigravity IDE** — a specification-first approach where the data model, operations, and validation rules were formally defined in `openapi.yaml` before any code was written.

Files: `index.html`, `script.js`, `style.css`, `openapi.yaml`, `SPEC.md`, `README.md`, `openspec/`

---

## The App

Both branches implement the same **Expense Tracker** with the following features:

- Add an expense with a title, amount, and category
- Categories: Food, Travel, Shopping, Health, Other
- View all expenses in a list
- See a running total of all expenses
- Delete individual expenses

---

## Key Comparison

| Aspect | Vibe Coding | Spec Driven Development |
|---|---|---|
| Starting point | Blank file + AI prompting | `openapi.yaml` spec |
| Data model | Emerged during coding | Defined upfront in spec |
| Validation rules | Added by feel | Locked in spec before coding |
| Field names | Chosen casually | Defined in schema |
| File structure | Decided mid-build | Planned in spec first |
| Process | Prompt → iterate → ship | Specify → plan → implement |
| Best for | Prototypes, solo projects | Teams, APIs, production systems |

---

## Author

**Archisman Mitra**
