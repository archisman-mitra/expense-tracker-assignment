# Vibe Coded Submission — Expense Tracker

## What is Vibe Coding?

Vibe coding is a development style where you build software **by feel** — using AI tools and intuition rather than upfront planning or formal specifications. You describe what you want, see what comes out, tweak it until it "feels right", and ship.

There is no design document. No API contract. No agreed field names. You just… vibe.

## How This Was Built

1. Opened a blank `index.html`
2. Prompted: _"Build me a simple expense tracker in plain HTML, CSS, and JS"_
3. Looked at the output — adjusted colours, layout, and features on the fly
4. Added the category dropdown because it felt like it was missing
5. Added the total display because it looked empty without one
6. Kept going until it felt done

No schema was written. No contract was defined. Field names like `name`, `amount`, `category` were picked casually in the moment.

## Files

- `index.html` — the entire app, single file, no dependencies

## How to Run

Just open `index.html` in any browser. No build step, no server needed.

## Observations (Honest Reflection)

- Fast to get started — something was on screen within minutes
- Easy to change things — no spec to "break"
- But: if a teammate were building a backend for this, they'd have no contract to work from
- Field names and structure are implicit — you have to read the code to understand the data model
- Not scalable to a team or a larger system

This is the **vibe coding** branch. See `sdd_submission` for the spec-first alternative.
