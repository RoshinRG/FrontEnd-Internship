# CLAUDE.md — AI Assistant Conventions

This file tells Claude (and other AI assistants) how to work in this repository.
Read it before generating any code or suggestions.

---

## Project Context

**Track**: Frontend AI Engineering  
**Phase**: Capstone — Week 1 onwards  
**Goal**: Build a progressively enhanced frontend application using only web platform primitives (no framework).

---

## Tech Stack Rules

### HTML
- Use semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`).
- One `<h1>` per page maximum.
- All interactive elements must have accessible labels (`aria-label`, `aria-describedby`, or visible text).
- Always include `lang` attribute on `<html>`.

### CSS
- Use CSS custom properties (variables) for all colors, spacing, and typography values.
- Define variables in `:root` at the top of `style.css`.
- Follow BEM-inspired class naming: `.block__element--modifier`.
- Never use `!important` unless overriding a third-party library.
- Prefer `clamp()` for responsive type and spacing.
- Mobile-first breakpoints.

### JavaScript
- ES2022+ syntax only (`const`/`let`, arrow functions, `async`/`await`, optional chaining).
- No build step — write plain ESM that browsers can run directly.
- No frontend frameworks (React, Vue, etc.) unless a week's brief explicitly requires it.
- DOM queries: prefer `querySelector` / `querySelectorAll`.
- Error handling: always use `try/catch` around `fetch` calls.

### Form Validation & DOM
- Every interactive form control MUST associate with a `<label>` element via matching `for` and `id` attributes. Never use placeholders as the sole label.
- Live field errors must announce accessibly: use `aria-describedby` pointing to a visible error span containing `aria-live="polite"`. The error message element must be present in initial HTML rather than dynamically injected.
- Validation logic must be written as pure functions that return `{ valid: boolean, message: string }`, accepting input values as simple string arguments to enable test runner validation without a browser DOM.

### Git
- Commit format: **Conventional Commits 1.0.0** — `<type>(<scope>): <description>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
  - Example: `feat(nav): add responsive hamburger menu`
- One logical change per commit.
- Never commit build artifacts, `node_modules`, or secrets.

---

## AI Behaviour Instructions

When acting as a coding assistant in this repo, you should:

1. **Prefer minimal diffs** — change only what is needed, preserve surrounding code and comments.
2. **Explain before you edit** — briefly state what you are about to change and why.
3. **Follow the conventions above** without being asked.
4. **Flag deviations** — if the existing code violates a convention, note it but do not mass-refactor unless asked.
5. **No hallucinated APIs** — only suggest browser-native or explicitly listed APIs.
6. **Accessibility first** — every new UI element must pass WCAG 2.1 AA by default.

---

## File Map

| File | Purpose |
|------|---------|
| `index.html` | App shell and semantic structure |
| `style.css` | All styling, design tokens in `:root` |
| `script.js` | App logic, event handling, data fetching |
| `README.md` | Human-facing project overview |
| `CLAUDE.md` | This file — AI instructions |

---

## Out of Scope (Do Not Add)

- Build tools (Webpack, Vite, Rollup) — unless a brief requires them.
- CSS preprocessors (Sass, Less).
- Type annotations (TypeScript) — unless a brief requires them.
- UI component libraries.
