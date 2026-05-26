# Spec Driven Development — Process Documentation

## What is SDD?

Spec Driven Development (SDD) means writing a formal specification **before** writing any code. The spec acts as the contract — it defines what the system does, what data it works with, and what rules apply. Code is then written to fulfil the spec, not the other way around.

This project uses **OpenAPI 3.0** as the specification format.

---

## Step 1: Define the Data Model First

Before writing a single line of HTML or JS, the question was:

> _"What does an expense look like?"_

The answer, locked into the spec under `components/schemas/Expense`:

```yaml
Expense:
  properties:
    id: string (uuid)
    title: string (1–100 chars)
    amount: number (> 0, INR)
    category: enum [food, travel, shopping, health, other]
    date: string (ISO 8601 date)
  required: [id, title, amount, category, date]
```

This means every expense object in the JS implementation **must** have exactly these fields, with these types, following these constraints. There is no ambiguity.

Compare to the vibe-coded version where fields were named casually (`name` instead of `title`) and no types or constraints were defined.

---

## Step 2: Define Operations

Next, the spec defines what actions the app supports — as if it were a real API:

| Operation       | Method | Path             | Description                          |
| --------------- | ------ | ---------------- | ------------------------------------ |
| `listExpenses`  | GET    | `/expenses`      | Returns all expenses + running total |
| `createExpense` | POST   | `/expenses`      | Adds a new expense (validates input) |
| `deleteExpense` | DELETE | `/expenses/{id}` | Removes an expense by UUID           |

Even though this is a frontend-only app, the operations are named and structured as they would be in a real REST API. This means the app could be connected to a real backend without any redesign.

---

## Step 3: Define Validation Rules

The spec enforces:

- `title` cannot be empty (minLength: 1) and cannot exceed 100 characters
- `amount` must be at least 0.01 (no zero or negative expenses)
- `category` must be one of exactly 5 allowed values — no freeform strings
- `id` is always a UUID (generated, never user-supplied)
- `date` is always ISO 8601 format

The JS implementation validates all inputs against these same rules before "creating" an expense.

---

## Step 4: Write Code That Follows the Spec

Only after completing `openapi.yaml` was `index.html` written. Every decision in the JS was traced back to the spec:

- Objects are created with exactly the fields defined in `NewExpense`
- The stored objects match the `Expense` schema exactly
- UUIDs are generated with `crypto.randomUUID()` — matching `format: uuid`
- Dates are stored as ISO 8601 strings — matching `format: date`
- Validation errors surface a message matching the `Error` schema shape

---

## Why This Matters

|                      | Vibe Coding                | Spec Driven Development                    |
| -------------------- | -------------------------- | ------------------------------------------ |
| Field: expense title | `name` (picked casually)   | `title` (defined in spec)                  |
| Validation           | "check if truthy"          | minLength, maxLength, min value per spec   |
| Unique ID            | array index (`i`)          | UUID per spec                              |
| Date format          | human-readable string      | ISO 8601 per spec                          |
| Extensibility        | rewrite needed for backend | plug in real API — contract already exists |

---

## Files

- `openapi.yaml` — the specification (written first)
- `index.html` — the implementation (written after, follows spec)
- `SPEC.md` — this document

## How to Run

Open `index.html` in any browser. No build step needed.

To view the OpenAPI spec visually, paste `openapi.yaml` into [editor.swagger.io](https://editor.swagger.io).
