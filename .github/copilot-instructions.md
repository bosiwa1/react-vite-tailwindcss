## Quick orientation

- Project type: React app scaffolded with Vite + TailwindCSS. Entry: `src/main.jsx` → `src/App.jsx`.
- Components live under `src/Components/`. Posts-related UI is in `src/Components/Posts/`.
- Build & run: use npm scripts in `package.json` (dev: `npm run dev`, build: `npm run build`, preview: `npm run preview`).

## What to change and how (short contract)

- Inputs: modify files under `src/` (components, styles, assets). Keep changes small and focused.
- Output: working UI with no console runtime errors and preserved Tailwind classes.
- Error modes to avoid: failing dev server, broken imports, React runtime errors (undefined arrays, improper jsx attributes).

## Important patterns & conventions in this repo

- Styling: Tailwind classes in JSX; global import `src/index.css` includes Tailwind via `@import "tailwindcss"`.
- Tooling: Vite plugins configured in `vite.config.js` (React plugin + `@tailwindcss/vite`).
- Linting: `npm run lint` runs `eslint .` — prefer to run lint before committing.
- Third-party deps: CKEditor is present (`@ckeditor/ckeditor5-react`, `@ckeditor/ckeditor5-build-classic`) used in post forms.

## Integration & data flows to know

- Posts list fetches WordPress REST API directly inside `src/Components/Posts/PostList.jsx` (example fetch URL: `https://dlbwebservice.com/wp-json/wp/v2/posts/`).
- There is no centralized API client or environment var system. If adding configurable endpoints, prefer creating `src/lib/api.js` and wire `process.env`/`.env` values.

## Known repo-specific gotchas (must-read for any patch)

- File name has a leading space: the edit modal file is stored as `src/Components/Posts/Modal/␣EditPostModal.jsx` (note the leading space). Import lines incorrectly include that space in some places; fix by renaming the file to `EditPostModal.jsx` (remove leading space) and update imports.
- Many small typos exist in `PostList.jsx` that cause runtime failures; e.g.:
  - fetch options use `"methode"` instead of `"method"`;
  - `setPost(date)` should be `setPost(data)`;
  - initial state for posts is undefined; initialize with `[]` to avoid map on undefined;
  - attributes: use `className` (not `class`); event handlers should be correct (`onChange` not `onCanPlay`); form submit should use `onSubmit` and call `event.preventDefault()`.
These are actionable fixes an AI can safely apply when asked to make the Posts list or modal work.

## Where to look for examples when editing

- Entry & wiring: `src/main.jsx`, `src/App.jsx`.
- Posts UI: `src/Components/Posts/PostList.jsx`, `src/Components/Posts/Modal/AdPostModal.jsx`, `src/Components/Posts/Modal/ EditPostModal.jsx` (see leading-space caveat).
- Build config: `vite.config.js` and `package.json` scripts.

## Testing & verification steps (what the agent should run locally)

1. Install deps: `npm install`.
2. Start dev server: `npm run dev` — confirm no compile-time errors and the app loads at the Vite dev URL.
3. Open browser console and confirm no runtime exceptions (especially from `PostList.jsx` map calls or wrong imports).
4. Run linter: `npm run lint` and fix reported issues if they relate to changed code.

## When to ask (and what to ask the human)

- If a change needs secrets or real WordPress credentials (e.g., posting content), request env var values and explain where they'll be stored (use `.env` files).
- If renaming files (for example removing the leading space), confirm there are no external CI scripts depending on the current filename.

## Small examples the agent may apply

- Fix fetch in `PostList.jsx` (conceptual):
  - change `fetch(..., { "methode": "GET" })` → `fetch(..., { method: "GET" })`;
  - set initial state: `const [postendpoint, setPost] = useState([]);`
  - use `setPost(data)` after parsing JSON and guard render: `postendpoint?.map(...)

## Final notes

- Keep edits minimal and run the dev server to validate. Prefer small PRs that fix one class of issues (imports/typos, then API or styling).
- If you update major wiring (add API clients, env, or state libraries), include a brief README section documenting the change.

---

If any of the above sections are unclear or you'd like me to expand examples (e.g., a small API client file or a patch to remove the filename leading space), tell me which part to implement next.
