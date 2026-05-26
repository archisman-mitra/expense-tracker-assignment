# Vibe Coded Submission — Expense Tracker

## Approach: Vibe Coding

Vibe Coding is an AI-assisted development style where you build software by feel — describing what you want to an AI, iterating on the output visually, and shipping when it feels right. There is no upfront specification, no formal data model, and no predefined rules. You just build.

---

## How This Was Built

1. Started with a blank file and described the app to an AI assistant
2. Got a working base — adjusted layout, colours, and features on the fly
3. Added the category dropdown because it felt like something was missing
4. Added the running total because the UI looked incomplete without one
5. Separated the code into `index.html`, `style.css`, and `script.js` as the app grew
6. Kept iterating until it felt done

No schema was written. No contract was defined. Field names, validation behaviour, and file structure were all decided in the moment.

---

## Files

```
vibe_coded_submission/
├── index.html    — HTML structure
├── style.css     — All styling
├── script.js     — All JavaScript logic
└── README.md     — This file
```

## How to Run

Open `index.html` in any browser. No build step or server needed.

---

## Honest Reflection

**What worked well:**
- Fast to get started — something was on screen within minutes
- Easy to change things — no spec to break or update
- Good for solo experimentation

**What didn't scale:**
- Field names (`name`, `amount`, `category`) were picked casually — no contract
- A backend developer would have nothing to work from
- No formal validation rules — just "check if truthy"
- Structure and logic decisions are implicit — you have to read the code to understand the data model

---

See the `sdd_submission` branch for the same app built spec-first.
