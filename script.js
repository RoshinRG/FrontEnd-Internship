/**
 * script.js — Frontend AI Engineering Capstone
 * Week 1: Environment & AI Toolchain
 *
 * Conventions (see CLAUDE.md):
 *  - ES2022+ ESM, no build step
 *  - async/await for any async work
 *  - Accessible DOM interactions
 */

const WEEKS = [
  { week: 1, label: "Environment & AI Toolchain", done: true },
  { week: 2, label: "Component Architecture", done: false },
  { week: 3, label: "Data & API Integration", done: false },
  { week: 4, label: "Accessibility & Performance", done: false },
  { week: 5, label: "Testing & CI/CD", done: false },
  { week: 6, label: "Final Polish & Deployment", done: false },
];

/**
 * Renders the capstone progress list into the DOM.
 * @param {HTMLElement} container - The <ul> element to populate.
 * @param {typeof WEEKS} weeks - Array of week data objects.
 */
function renderProgress(container, weeks) {
  const fragment = document.createDocumentFragment();

  for (const { week, label, done } of weeks) {
    const li = document.createElement("li");
    li.className = `progress__item${done ? " progress__item--done" : ""}`;
    li.setAttribute("aria-label", `Week ${week}: ${label} — ${done ? "complete" : "upcoming"}`);

    li.innerHTML = `
      <span class="progress__badge">Week ${week}</span>
      <span class="progress__label">${label}</span>
      <span class="progress__check" aria-hidden="true">${done ? "✅" : "○"}</span>
    `;

    fragment.appendChild(li);
  }

  container.appendChild(fragment);
}

/**
 * Entry point — runs after DOM is ready.
 */
function init() {
  const list = document.getElementById("progress-list");
  if (!list) {
    console.warn("[capstone] #progress-list not found in DOM.");
    return;
  }
  renderProgress(list, WEEKS);
}

init();
