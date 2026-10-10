export interface WalkthroughStep { title: string; description: string; src: string; alt: string; width: number; height: number; x: number; y: number }
export interface Walkthrough { title: string; decision: string; tradeoff: string; steps: WalkthroughStep[] }
export const walkthroughs: Record<string, Walkthrough> = {
  bascal: {
    title: 'From a learning objective to a reviewed quiz.',
    decision: 'AI generation sits inside a teacher review workflow. The interface saves a generated quiz as a draft so questions can be previewed and edited before approval and assignment.',
    tradeoff: 'Generation can assist authoring, but educators still need to check correctness and alignment with the learning objectives.',
    steps: [
      { title: 'Set the difficulty', description: 'The educator chooses a question count and difficulty for the quiz, with optional instructions to guide generation.', src: '/assets/projects/bascal-quiz-generation.png', alt: 'BasCal quiz generator with difficulty options visible', width: 1919, height: 962, x: 58, y: 42 },
      { title: 'Generate a draft', description: 'The generated set enters a draft workflow. The on-screen instructions explain preview, editing, approval, and assignment.', src: '/assets/projects/bascal-quiz-generation.png', alt: 'BasCal dialog explaining draft review and assignment', width: 1919, height: 962, x: 48, y: 71 },
      { title: 'Review the questions', description: 'The teacher preview shows questions, correct answers, and explanations alongside quiz-management controls.', src: '/assets/projects/bascal-quiz-preview.png', alt: 'BasCal teacher quiz preview showing questions and explanations', width: 1919, height: 969, x: 52, y: 61 },
    ],
  },
  safetap: {
    title: 'Prepare. Check in. Keep working offline.',
    decision: 'Offline scan queuing separates recording an arrival from synchronizing it. Local preparation and later synchronization help the workflow continue when connectivity is interrupted.',
    tradeoff: 'Queued records are not yet shared records. Readiness and synchronization status need to stay visible to the representative.',
    steps: [
      { title: 'See the overview', description: 'The administrator view separates missing students, arrived students, expected students, and other arrivals. This screenshot shows the state before an evacuation begins.', src: '/assets/projects/safetap-overview.png', alt: 'SafeTap evacuation overview before an active event', width: 1920, height: 1080, x: 57, y: 59 },
      { title: 'Choose a check-in method', description: 'Representatives can use NFC or alternate methods such as QR, search, and ID-photo matching. Device and browser compatibility determine available scanning options.', src: '/assets/projects/safetap-scanner.png', alt: 'SafeTap representative scanner and alternate check-in methods', width: 1920, height: 1080, x: 36, y: 52 },
      { title: 'Prepare for offline work', description: 'The offline records screen makes downloaded event data and saved offline assets visible before representatives rely on them.', src: '/assets/projects/safetap-offline-ready.png', alt: 'SafeTap downloaded offline records and readiness indicators', width: 1920, height: 1080, x: 52, y: 41 },
    ],
  },
  pits: {
    title: 'Make records visible. Keep evidence reviewable.',
    decision: 'Project records and evidence verification are separate concerns. Administrator controls provide an explicit review step for submitted uploads.',
    tradeoff: 'A review workflow depends on the quality of evidence and the reviewer. An approval control alone cannot independently establish that a public project is legitimate.',
    steps: [
      { title: 'Inspect the records', description: 'The project table brings names, locations, budgets, progress, and publication status into a single view. These are application records, not independently verified public project data.', src: '/assets/projects/pits-project-verification.png', alt: 'PITS project table showing location, budget, progress, and status', width: 1920, height: 1080, x: 52, y: 25 },
      { title: 'Find pending evidence', description: 'Uploads awaiting verification are listed separately, with project, submission type, uploader, and file information.', src: '/assets/projects/pits-project-verification.png', alt: 'PITS pending evidence uploads table', width: 1920, height: 1080, x: 42, y: 72 },
      { title: 'Review before accepting', description: 'Check, Accept, and Decline controls make the evidence-review stage explicit in the administrator interface.', src: '/assets/projects/pits-project-verification.png', alt: 'PITS evidence verification controls', width: 1920, height: 1080, x: 82, y: 79 },
    ],
  },
};
