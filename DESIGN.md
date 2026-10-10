# Design
Builder's field notes: an editorial portfolio grounded in practical systems and reflective project stories. Homepage with expandable stories and dedicated static project case-study pages. Alternating project rows and a project directory beside the introduction. Default follows system light/dark preference; explicit toggle is persisted locally.
Palette: bright paper or ink navy, high-contrast blue accents, tinted secondary text. Open Sans, self-hosted: restrained body and strongly weighted display. Generous whitespace, thin rules, large project names, square-edged compositions. No decorative gradients, glass, faux terminal, fabricated screenshots, or dashboard metrics.
Chronological project numbering carries the user's requested order. No section eyebrows. Named signature interaction: opening a project story reveals problem, solution, contribution, and reflection while keeping the project image/status in context. Smooth height supported by progressive native details; intro rule grows once. Reduced motion removes animation. Focus, selection, scrollbars, hover, and controls share the palette.
Screenshot placeholders are intentionally labeled and replaced by image paths in lib/content.ts. Dates/certifications have explicit pending copy. Mobile is a single-column reading flow, without hidden essential content.

## Impeccable refinement
The installed engine successfully loaded project context. Same palette and content retained; homepage hero uses a split composition with direct project links, project layouts alternate, typography-led image placeholders remain explicitly pending, and the cybersecurity section uses the existing navy surface for a distinct change of pace. Opaque sticky navigation keeps the site usable during the longer narrative. Static source detector reported no findings; browser visual QA is unavailable.

## Build Lab interactions
The hero lets visitors choose between real BasCal, SafeTap, and PITS screenshots, with a fixed preview frame to keep layout steady. The single authored motion is the reveal on changing the selected project; reduced motion disables it. Home and case-study pages include a fictional SafeTap check-in simulation and a standalone beginner ROT13 puzzle. Queued and synchronized records are explicitly distinct. All interactions work with native keyboard-accessible controls and expose feedback through live regions. Project walkthroughs preserve original screenshot proportions and pair numbered markers with readable step buttons. The progression section starts with Grade 12 RFID and continues through eight owner-dated project milestones.

## Interaction hardening
Hero and walkthrough selection now use native radio inputs and CSS panels rather than React click handlers. Each selection has a visible label, keyboard focus, and one matching panel. SafeTap uses direct per-student check-in actions, recorded states, distinct local/synced counts, a completion message, and reset. The cybersecurity challenge sits next to the HyperLink story instead of in a disconnected full-width block. Empty/incorrect-format flag feedback is explicit, success prevents redundant submission, and retry restores the challenge. Hydration readiness disables client-only actions until handlers are installed.

## Image viewing
All project images open in a shared same-page dialog over a solid dark backdrop. The viewer fits the image to the viewport and optionally shows the original dimensions with scrolling. Clicks outside the image, Close, Escape, and browser Back dismiss it; Forward restores it. Native modal focus containment, scroll locking, opener focus restoration, and loading/error/retry states are included. Server-rendered links retain a same-tab fallback and hero/walkthrough selection stays independent of JavaScript.

## Planned learning
Appkademiya certification goals are always visible under a clear heading, using a semantic description list instead of an expandable control. Each full certification name has a brief subject description and personal learning goal. The group explicitly states all are not yet started. Spacing, thin separators, and palette colors follow the existing education surface; mobile keeps the existing single-column flow.

Image viewing uses the clickable image itself without visible Enlarge links or closing instructions. Descriptive captions, accessible link labels, zoom controls, and the Close button remain. Backdrop, Escape, and browser Back dismissal behavior is retained.

## Final responsive pass
Navigation reflows below 900px with wrapping links and 44px minimum navigation/theme targets. Viewer captions wrap at narrow widths. Security-history entries use dated editorial rows with visible status and validation notes. Social sharing uses a 1200 × 630 typographic image in the existing Open Sans, paper, navy, and blue palette. Responsive changes are source-reviewed; rendered browser/mobile QA remains unavailable.
