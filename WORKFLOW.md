# WORKFLOW.md — Vague vs. Precise AI Prompting Analysis

This document details the comparative workflow assessment of building a profile settings form using two distinct prompting approaches.

---

## 📊 Overview of Divergence

| Metric | Round 1 (Vague) | Round 2 (Precise) |
|--------|----------------|------------------|
| **Prompt Style** | Lazy, one-sentence, context-free | Spec-driven, constraint-based, test-first |
| **Files Modified** | `settings.html`, `settings.js` | `settings.html`, `settings.css`, `settings.js`, `settings.test.js` |
| **Code Footprint** | 43 lines | 388 lines |
| **Development Loops** | 1 (accepted first generation) | 2 (write & run automated tests) |

---

## 🔍 Core Diff Analysis

### 1. Correctness & Input Validation
* **Round 1 (`feature/round-one-vague`)**: The validation was entirely non-existent. A generic `alert()` fired on submit regardless of empty, invalid, or malicious inputs.
* **Round 2 (`feature/round-two-precise`)**: Implemented strict, decoupled, unit-testable validation functions in `settings.js`. It validates character length boundaries (e.g., 3-20 for username, 0-160 for bio), conforms to specific character classes (alphanumeric for username), and runs real-time `blur` events to give prompt feedback.

### 2. Accessibility (a11y)
* **Round 1**: Failed basic a11y criteria. Text labels were unlinked to input fields. Inputs relied on generic `placeholder` values, which vanish on focus, violating WCAG Guidelines.
* **Round 2**: Features explicit `<label for="[id]">` linking. Active inputs use `aria-describedby` pointing to dedicated validation feedback `<span>` nodes that declare `aria-live="polite"`, ensuring screen readers announce dynamic errors.

### 3. Styling & Integration
* **Round 1**: Hardcoded inline CSS styles using raw, generic colors (e.g., `background: blue`).
* **Round 2**: Split styling into a clean, decoupled `settings.css` sheet. It utilizes design tokens defined in the root stylesheet `style.css` (such as `var(--color-surface)` and `var(--radius-lg)`), maintaining visual consistency with the rest of the application.

---

## 🛡️ AI Mistake Caught

In Round 1, the AI code generator outputted the script element as `<script src="settings.js"></script>` but ignored configuring the JavaScript module as an ES module (`type="module"`). In a strict browser runtime, importing/exporting logic (which is standard for ES2022+ primitives) would fail silently without modular script declarations.

Furthermore, the vague prompt resulted in the generation of inline CSS styles directly nested inside `settings.html`, presenting a codebase maintenance liability and violating the visual design guide constraints.

---

## 💡 Key Learnings & Workflow Insights

While writing the vague prompt and pushing the code took less than 2 minutes, reviewing, correcting, writing missing validation logic, styling, and checking accessibility manually would have taken an additional 30 minutes of human developer intervention. 

In contrast, the precise prompting loop (specifying structural rules, design tokens, error containers, and an automated test file) took 5 minutes to draft but yielded a completely finished, production-ready, test-verified feature requiring zero manual correction. High-fidelity inputs to the AI yield self-verifying, robust code outputs.
