# Don Gonzales portfolio — Next.js

Next.js App Router + React + TypeScript. Static export, shared CSS design tokens, local fonts, responsive project stories, eight dedicated project pages, and a persistent light/dark preference.

## Run locally

Deployment uses Node.js 22.23.1, pinned in `.node-version`.

```sh
cd terincorp
npm ci
npm run dev
```

Open the localhost URL printed by Next.js.

## Validate and export

```sh
npm run typecheck
npm run build
```

`next build` generates `out/` for static hosting. `next start` is not used with static export. To inspect the export locally:

```sh
python3 -m http.server 8080 --directory out
```

Open http://localhost:8080.

## Files to edit

- `lib/content.ts`: typed project summaries, stories, statuses, dates, screenshot paths, and HyperLink details.
- `app/page.tsx`: biography, leadership, education, training and planned learning, contact information, and homepage composition.
- `app/projects/[slug]/page.tsx`: project detail pages, static route generation, and page-specific metadata.
- `app/globals.css`: shared theme variables, responsive layouts, typography, and motion.
- `components/theme-toggle.tsx`: theme preference and synchronization across tabs.

Nineteen supplied project images are included under `public/assets/projects/`. BasCal, SafeTap, PITS, HyperLink, RFID, Silong, the Coin Sorter, and DRRM have real previews; BasCal, SafeTap, HyperLink, and Silong also have galleries on their case-study pages. The RFID image is a hardware photograph; the Silong blueprint is clearly labeled as a proposed design, not a built prototype. Images retain their original proportions and open in a same-page overlay. Click outside, use Close, press Escape, or use browser Back to return; Forward reopens the image. Zoom in shows the original dimensions inside a scrollable viewport. For remaining projects, add an asset and set `screenshot`, `screenshotSize: [width, height]`, and accurate `alt` text in `lib/content.ts`. Optional `gallery` entries accept `src`, `alt`, `caption`, `width`, and `height`. All eight projects have owner-supplied dates. Google Cybersecurity coursework is listed under training, explicitly without a certificate. Future Appkademiya COAP, NTO-101, CWPT, and LXO-101 goals are separate, always visible, and not yet started. Full names, broad subject descriptions, and personal learning goals are included; the provider’s official LinkedIn page is linked. Education and organizational dates are owner-confirmed.

Portfolio content, hero selectors, and walkthrough selectors are server-rendered. The hero and walkthrough use native radio controls and CSS, so selection works without JavaScript. SafeTap and CTF demos hydrate as client components; their action controls stay disabled while loading. Local fonts avoid a remote font request during builds. Reduced-motion preferences are respected. System theme is followed until a visitor saves an explicit preference.

## Routes

- `/`
- `/projects/bascal/`
- `/projects/safetap/`
- `/projects/pits/`
- `/projects/hyperlink/`
- `/projects/silong-hamuros/`
- `/projects/rfid-attendance/`
- `/projects/drrm-alert-automation/`
- Unknown paths use the custom not-found page.

## Verification

Dependencies are installed and package-lock.json is present. TypeScript checking and the Next.js static export build passed during the Impeccable refinement. The installed Impeccable engine loaded project context and its source detector reported no findings for app/components. No connected browser is available to this agent, so desktop/mobile rendered layout and interactive theme behavior still need visual review on your machine.

The build uses Next's TypeScript compiler API (`experimental.useTypeScriptCli: false`) because this environment failed to capture the TypeScript CLI's --showConfig output. Type checking remains enabled.

The current deployment target is a separate Render Static Site. See [DEPLOYMENT.md](DEPLOYMENT.md) for repository setup, manual rollout, DNS rollback, and verification status. `render.yaml` publishes `out/` from `main` with automatic deployments off. Previous Sites publishing attempts failed; local `.openai/` state is excluded from Git. No live deployment or DNS verification is claimed yet.

## Previous static version

`legacy-static/` preserves the first dependency-free HTML/CSS/JS version. It is a fallback preview, not the Next.js export. Do not publish it as though it were a verified Next.js build.

## Content accuracy and design

AI-assisted development is disclosed. BasCal is locally hosted and was exposed using ngrok for defense; SafeTap is deployed per the owner; Silong has a functional Android prototype, with no physical hardware prototype or end-to-end motor validation. PITS was presented and defended; its UI needs refinement. RFID Attendance Monitoring is a completed Grade 12 project that earned the Best in Innovation Award, as confirmed by the owner. The owner confirms a successful HyperLink verifier run; it was not independently rerun in this portfolio session. Event paperwork and approval are pending.

Impeccable design guidance was read from https://github.com/pbakaus/impeccable. The globally installed engine at ~/.agents/skills/impeccable successfully loaded context and ran the static source detector. No browser audit is claimed. PRODUCT.md and DESIGN.md record the confirmed content and visual direction. Open Sans font licensing is included under `public/assets/font-license.txt`.

## Build Lab experiences
- Select a real project preview in the homepage hero.
- Try SafeTap check-ins with fictional students; going offline queues arrivals and reconnecting synchronizes them. Reset clears the simulation.
- Solve a portfolio-only ROT13 puzzle in the HyperLink section; hints and an explanation are available without JavaScript.
- Explore screenshot markers and steps on the BasCal, SafeTap, and PITS pages.
- Follow the progression from Grade 12 RFID through the themes in Don’s work. The eight project dates are supplied by the owner.

Run `npm test` for simulation transitions, duplicate prevention, reconnection, reset, and mini-CTF validation. Browser visual verification remains unavailable in this environment; responsive and theme behavior should also be reviewed in the local browser.

## LAN development preview
The dev server allows the owner’s preview host `192.168.1.225` through `allowedDevOrigins`. After editing this option, restart `npm run dev`; hot reload cannot repair a previously blocked development connection. Use `http://192.168.1.225:3000/` on the LAN or `http://localhost:3000/` on the host. If the LAN IP changes, update the allowlist with the new hostname. Do not open the export through `file://`; serve `out` over HTTP.

Origin regression tests call Next’s actual request guard for HMR and script requests with the LAN origin. Live browser/HTTP checks were prevented by this environment’s socket restrictions.

## Coin Sorter attribution
The completed Grade 12 class prototype adapted a purchased Etsy design originally intended for European coins to supported Philippine peso dimensions. Don’s contribution covers the primary build role, coordination of model-editing help, prototype integration, and class leadership. Fraens and the Etsy source URL are credited. Supported coins are new/earlier ₱1, new/old ₱5 and ₱10, and ₱20. Measured accuracy was not supplied. The Best in Innovation Award belongs to the separate RFID project.

The Coin Sorter case study has an explicit `/projects/coin-sorter/` route, using the shared `components/project-case-study.tsx` template. It is excluded from the dynamic route’s generated params to avoid duplicate exported paths and reliance on a stale development slug cache.

## Same-page image viewer
The shared viewer delegates clicks from server-rendered image links, including native hero and walkthrough panels. It uses a native modal dialog for focus containment, locks page scrolling while open, restores focus on close, and preserves Next router history state. Opening adds a same-URL history entry; Back dismisses the viewer and Forward reopens it. Explicit close and backdrop clicks consume the overlay entry rather than adding extra page entries. Loading/error states and retry are included. Images have same-tab links as a progressive fallback when JavaScript is unavailable.

Silong’s case study separates implemented Android monitoring, batch, weather, storage, and control workflows from unvalidated physical sensor/controller/cover integration. Don’s clarified role includes main project feature concept development for most of the planned prototype features, alongside project management and application feature leadership. Team attribution and the unbuilt hardware status remain explicit.

Every project has typed `learnings` in `lib/content.ts`. The homepage presents one lesson per project and each case study presents the full set, with workflow-development wording and unresolved delivery integration for DRRM. Silong explicitly credits the weather-station API concept/service to a teammate.

The DRRM image is an original n8n workflow diagram, labeled as a workflow prototype with pending delivery integration. It uses the same-page viewer like every other project image.

Current positioning: web and application development is Don’s main project experience; cybersecurity is his intended career direction. Hero, About, and page metadata reflect this distinction without claiming professional cybersecurity experience.

## Final QA, security history, and sharing
See QA.md for completed checks and verification limits. Run `python scripts/verify-export.py` after a successful build to check local links, assets, metadata, and sitemap output. `lib/site.ts` holds the intended canonical domain and social image; regenerate the latter with `python scripts/generate-social-preview.py` (Pillow required only for regeneration).

SafeTap and Silong include source-backed security decisions and an append-only review history defined in `lib/security-history.ts`. Preserve original entries; add verified resolutions with actual versions, evidence, and `resolves` pointing to the original finding. Current observations are review items and planned hardening, not confirmed vulnerabilities. Render rollout and account-access requirements are recorded in DEPLOYMENT.md. Browser/mobile QA remains unverified and is explicitly skipped for this deployment task.
