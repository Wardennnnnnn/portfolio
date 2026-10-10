export type StorySection = readonly [heading: string, text: string];
export type ProjectLink = readonly [label: string, url: string];
export interface ProjectLearning { title: string; detail: string }
export interface GalleryImage { src: string; alt: string; caption: string; width: number; height: number }
export interface Screenshot {
  title: string; screenshot: string; alt: string;
  screenshotSize?: readonly [width: number, height: number];
  gallery?: GalleryImage[];
  screenshotCaption?: string;
}
export interface Project extends Screenshot {
  id: string; number: string; domain: string; status: string; role: string;
  stack: string[]; summary: string; story: StorySection[]; links: ProjectLink[]; dates?: string; learnings?: ProjectLearning[];
}
export interface Experiment extends Screenshot {
  id: string; domain: string; status: string; role: string; summary: string; details: string; dates?: string;
  phase?: 'early-work'; story?: StorySection[]; stack?: string[]; learnings?: ProjectLearning[]; links?: ProjectLink[];
}

export interface CtfProject extends Screenshot { id: string; domain: string; status: string; role: string; dates: string; summary: string; categories: string[]; stack: string[]; story: StorySection[]; learnings: ProjectLearning[]; }

// Keep original screenshot dimensions and describe the visible interface accurately.
export const projects: Project[] = [
  {
    "learnings": [
      {
        "title": "Researching unfamiliar integrations",
        "detail": "I learned to compare forum examples, keep notes, and adapt solutions to my own application instead of assuming an example would work unchanged."
      },
      {
        "title": "Making mathematical content readable",
        "detail": "Working on AI quizzes taught me that generating content is only one step: equations also need consistent notation, rendering, and a teacher review workflow."
      },
      {
        "title": "Delivering an academic brief",
        "detail": "I gained experience turning research requirements into a usable application and distinguishing a local defense demonstration from ongoing production hosting."
      }
    ],
    "id": "bascal",
    "number": "01",
    "title": "BasCal",
    "domain": "Adaptive calculus learning",
    "status": "Locally hosted · Successfully defended",
    "role": "Solo developer · AI-assisted development",
    "stack": [
      "Node.js",
      "Express",
      "MySQL",
      "Perplexity API"
    ],
    "screenshot": "/assets/projects/bascal-quiz-generation.png",
    "screenshotSize": [
      1919,
      962
    ],
    "alt": "BasCal module editor with the AI quiz generator and difficulty selector open",
    "gallery": [
      {
        "src": "/assets/projects/bascal-quiz-preview.png",
        "width": 1919,
        "height": 969,
        "alt": "BasCal teacher quiz preview showing calculus questions, correct answers, and explanations",
        "caption": "Reviewing generated quiz questions and explanations before assignment."
      }
    ],
    "summary": "Turning an academic research framework into a learning platform, with 12 calculus modules, adaptive quizzes, and student progress analytics.",
    "story": [
      [
        "The brief",
        "BasCal was commissioned for a professor’s master’s thesis at Batangas State University. I translated the research requirements into student and educator workflows rather than independently originating the research framework."
      ],
      [
        "The application",
        "The platform covers differentiation and integration through 12 modules, adaptive quizzes, learning materials, and progress analytics across five mathematical proficiency strands. Educators can manage content and review generated quizzes."
      ],
      [
        "The challenge",
        "AI integration and incorrectly displayed mathematical equations were the hardest parts. Quiz generation needed both usable output and readable calculus notation."
      ],
      [
        "How I approached it",
        "I researched forum discussions, took notes on other developers’ solutions, and adapted relevant approaches to my application. The quiz workflow supports LaTeX notation for mathematical expressions."
      ],
      [
        "Delivery and feedback",
        "I developed the system with AI-assisted programming, hosted it locally, and used ngrok to make it accessible during the successful defense. The professor appreciated the features and told me, “Nak, maraming salamat ha.” This feedback reflects the delivery experience; learning outcomes were not measured here."
      ]
    ],
    "links": [
      [
        "Source code",
        "https://github.com/Wardennnnnnn/BasCal"
      ]
    ],
    "dates": "June–July 2026"
  },
  {
    "learnings": [
      {
        "title": "Planning deployment within a budget",
        "detail": "I learned to research hosting services and their constraints before choosing a deployment approach, keeping cost in mind alongside connectivity and application requirements."
      },
      {
        "title": "Designing identification alternatives",
        "detail": "Implementing NFC and QR taught me to account for device compatibility and provide alternate check-in paths instead of depending on one scanning method."
      },
      {
        "title": "Coordinating online and offline state",
        "detail": "Offline queues and live updates gave me experience distinguishing recorded check-ins from synchronized arrivals and thinking through reconnection and duplicate records."
      },
      {
        "title": "Representing space clearly",
        "detail": "Working on the floor interface taught me to communicate what a schematic can show and where actual campus validation is still needed."
      }
    ],
    "id": "safetap",
    "number": "02",
    "title": "SafeTap",
    "domain": "Campus safety & evacuation accountability",
    "status": "Deployed · Operational use not yet tested",
    "role": "Solo developer · AI-assisted development",
    "stack": [
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL"
    ],
    "screenshot": "/assets/projects/safetap-overview.png",
    "screenshotSize": [
      1920,
      1080
    ],
    "alt": "SafeTap administrator evacuation overview with building and floor accountability panels",
    "gallery": [
      {
        "src": "/assets/projects/safetap-student-directory.png",
        "width": 1920,
        "height": 1080,
        "alt": "SafeTap administrator directory with students and academic blocks",
        "caption": "Managing student records and class blocks."
      },
      {
        "src": "/assets/projects/safetap-scanner.png",
        "width": 1920,
        "height": 1080,
        "alt": "SafeTap representative check-in screen with NFC, QR, search, and ID-photo scan options",
        "caption": "Representative check-in with NFC and alternative identification methods."
      },
      {
        "src": "/assets/projects/safetap-offline-setup.png",
        "width": 1920,
        "height": 1080,
        "alt": "SafeTap offline records screen before downloading event data",
        "caption": "Offline preparation before event data is downloaded."
      },
      {
        "src": "/assets/projects/safetap-offline-ready.png",
        "width": 1920,
        "height": 1080,
        "alt": "SafeTap offline records screen showing downloaded event data and offline assets",
        "caption": "Downloaded event data ready for offline check-ins."
      }
    ],
    "summary": "Connecting campus identification with classroom attendance and emergency accountability, including live check-ins and offline scan queues.",
    "story": [
      [
        "Why I built it",
        "New campus identification cards and my DRRM responsibilities prompted a question: could campus identity also support student accountability during an evacuation? I proposed SafeTap for Web Systems and Technologies."
      ],
      [
        "The application",
        "SafeTap combines class attendance, emergency event check-ins, live arrival counts, unaccounted-student lists, offline scan queues, audit records, and exportable reports for administrators and class representatives."
      ],
      [
        "The challenge",
        "Deployment, NFC and QR identification, and the floor-plan interface required the most research. I explored free service options to reduce the cost of making the application accessible."
      ],
      [
        "Technical decisions",
        "The system combines Express, MySQL, and Socket.IO. NFC support depends on a compatible device and browser over HTTPS; QR and other identification methods provide alternatives. The floor view is a schematic reference, rather than a to-scale building plan."
      ],
      [
        "Current status and feedback",
        "The application is deployed, but it has not been used for actual campus operations or an emergency. Some friends liked the interface; this is informal peer feedback, with operational validation still ahead."
      ],
      [
        "Security decisions",
        "I implemented salted scrypt password hashing, expiring sessions, HttpOnly and SameSite cookies, CSRF tokens, login-attempt limits, server-side role checks, and parameterized database writes. API tests include missing-CSRF and unauthorized-role scenarios. These are implemented controls, rather than a completed penetration test or a guarantee of security."
      ],
      [
        "Security work still ahead",
        "Production cookie and HTTPS settings need deployment verification. Student-directory visibility needs a least-privilege review to confirm which records each role requires. Operational security validation remains a separate milestone before actual campus use."
      ]
    ],
    "links": [
      [
        "Source code",
        "https://github.com/Wardennnnnnn/safetap"
      ],
      [
        "Visit application",
        "https://safetap-u6ur.onrender.com/"
      ]
    ],
    "dates": "October 2026"
  },
  {
    "learnings": [
      {
        "title": "Python fundamentals",
        "detail": "Building PITS helped me practice basic Python concepts and file handling while connecting them to an application with multiple user roles."
      },
      {
        "title": "Scope and interface tradeoffs",
        "detail": "I learned to prioritize working core workflows when the desired interface exceeded what I could comfortably implement, then use presentation feedback to identify improvements."
      },
      {
        "title": "Making records reviewable",
        "detail": "Budget breakdowns, evidence review, audit logs, and exports helped me think about how information needs to be organized for other people to inspect it."
      }
    ],
    "id": "pits",
    "number": "03",
    "title": "PITS",
    "domain": "Public infrastructure transparency",
    "status": "Presented and defended · UI refinement",
    "role": "Solo developer · AI-assisted development",
    "stack": [
      "Python",
      "Kivy",
      "KivyMD",
      "MySQL",
      "OpenStreetMap"
    ],
    "screenshot": "/assets/projects/pits-project-verification.png",
    "screenshotSize": [
      1920,
      1080
    ],
    "alt": "PITS desktop interface showing project budgets, progress, and evidence awaiting administrator verification",
    "summary": "Exploring how project maps, budget records, evidence review, and citizen reporting can make public infrastructure information easier to scrutinize.",
    "story": [
      [
        "The motivation",
        "PITS explores how organized infrastructure records, budgets, progress, and evidence can support public scrutiny. A suspected ghost-project report is a concern for review, not proof of wrongdoing."
      ],
      [
        "Administrator workflows",
        "Administrators can verify or reject uploads, delete projects with double confirmation, clear the database, review audit logs and system statistics, and export CSV reports."
      ],
      [
        "Moderator workflows",
        "Moderators create projects with materials, labor, and equipment budgets; upload progress photos, engineer statements, and budget reports; update progress and status; and set project GPS coordinates. BudgetTracker provides safe, warning, critical, and exceeded states before new costs are logged."
      ],
      [
        "Citizen workflows",
        "Public users can search and filter projects, browse a progress-colored map and document galleries, comment on and like updates, report suspected ghost projects, and export project lists. Registration includes email, username-availability, and password-strength validation."
      ],
      [
        "The interface challenge",
        "Achieving the interface I wanted with Kivy was difficult at my level of experience. I chose a simpler UI so I could complete the core workflows. This was a tradeoff in my implementation, rather than a claim that Python or Kivy cannot support richer interfaces."
      ],
      [
        "Presentation and feedback",
        "After I presented and defended the project, my professor liked the concept and recommended more work on the UI. The listed workflows are implemented in the academic desktop prototype; public deployment and real-world adoption are not claimed."
      ]
    ],
    "links": [
      [
        "Source code",
        "https://github.com/Wardennnnnnn/PITS-Public-Infrastructure-Transparency-System"
      ]
    ],
    "dates": "November–December 2025"
  }
];

export const experiments: Experiment[] = [
  {
    "learnings": [
      {
        "title": "Connecting application features to physical behavior",
        "detail": "I gained experience planning how monitoring, device freshness, faults, and control requests should fit together, while keeping implemented software separate from untested hardware behavior."
      },
      {
        "title": "Partnership and business communication",
        "detail": "Exploring the agricultural use case helped me practice talking with businesses and considering potential partnerships alongside technical development."
      },
      {
        "title": "Developing an application as a team",
        "detail": "I learned to translate feature ideas into application workflows, coordinate responsibilities, and acknowledge the original concept and weather-service contribution of a teammate."
      },
      {
        "title": "Planning within financial constraints",
        "detail": "Costing made me consider feasibility alongside the feature list. The professor’s offer of support is encouraging, but the build still needs a practical budget and hardware validation."
      }
    ],
    "id": "silong-hamuros",
    "title": "Silong Hamuros",
    "domain": "IoT-based coffee drying & digital monitoring",
    "status": "Functional Android prototype · Hardware pending",
    "role": "Project Manager · Main Project Feature Lead · Application Feature Lead · Team project",
    "screenshot": "/assets/projects/silong-app-dashboard.jpeg",
    "screenshotSize": [946, 2048],
    "alt": "Silong Hamuros Android dashboard showing the device-not-connected message, unavailable cover status, and sample weight awaiting readings",
    "screenshotCaption": "Android monitoring dashboard · Hardware disconnected; readings awaiting a connected device",
    "gallery": [
      { "src": "/assets/projects/silong-app-weather-guide.jpeg", "width": 946, "height": 2048, "alt": "Silong Android weather and drying guide showing Lipa forecast rain probability and no suitable drying window", "caption": "Weather and drying guide · Forecast information can be viewed without connected hardware; drying suggestions remain experimental." },
      { "src": "/assets/projects/silong-app-forecast-reminders.jpeg", "width": 946, "height": 2048, "alt": "Silong Android in-app cover reminder and hourly rain forecasts with an Open-Meteo fetch timestamp", "caption": "Hourly forecasts and an in-app cover reminder · The reminder does not demonstrate physical cover movement." },
      { "src": "/assets/projects/silong-app-farm-settings.jpeg", "width": 946, "height": 2048, "alt": "Silong Android farm settings with optional device setup, disconnected status, a rain advisory threshold, and an in-app weather advisory toggle", "caption": "Farm settings · Device connection setup, rain advisory threshold, and in-app advisory preferences." },
      { "src": "/assets/projects/silong-design-blueprint.png", "width": 1536, "height": 1024, "alt": "Silong proposed coffee-drying system blueprint showing a protective cover, sensors, and ESP32-based architecture", "caption": "Proposed system design · Conceptual blueprint, not a photograph of a working hardware prototype." }
    ],
    "summary": "A six-member team project with a functional Android prototype for coffee-drying monitoring, batch records, weather advisories, and control workflows. Physical hardware testing is still ahead.",
    "details": "Implemented Android workflows include monitoring, batch tracking, charts, guarded cover controls, local storage, and hardware-independent weather forecasts. No physical prototype has been built.",
    "story": [
      [
        "The problem",
        "Silong Hamuros explores digital monitoring and a planned protective cover for Kapeng Barako drying. Unexpected rain can require farmers to intervene quickly to protect drying beans."
      ],
      [
        "My role and attribution",
        "As Project Manager, Main Project Feature Lead, and Application Feature Lead, I conceptualized most of the planned prototype’s features and help develop application workflows. A teammate contributed the original coffee-drying concept and conceptualized the API service for other weather stations. The project is a collaboration among six members."
      ],
      [
        "Monitoring and batch workflows",
        "The Android prototype implements a dashboard for sample weight, weight loss, temperature, humidity, rain, and cover position when a device is connected. Batch workflows include start/end actions, initial and final weight, elapsed time, notes, and optional manual moisture-meter readings, alongside trend charts and batch history."
      ],
      [
        "Controls and event records",
        "Open, Close, Stop, and Resume workflows include checks for rain, a disconnected device, stale readings, and faults. Alerts and rain logs cover rain events, cover movements, and device updates. These application workflows still require physical ESP32 and motor validation."
      ],
      [
        "Weather and farm settings",
        "Open-Meteo forecasts work independently of hardware with an internet connection. They provide rain probability, hourly forecasts, experimental drying-window suggestions, and in-app reminders. Farm settings include the name, coordinates, advisory threshold, and advisory toggle. Background push notifications are not implemented."
      ],
      [
        "Storage and integration",
        "The application saves records and settings locally on the phone and can copy records as JSON. A companion backend provides token-based API connections and SQLite storage."
      ],
      [
        "Costing and support",
        "Costing is a major development challenge. After our idea presentation, our professor offered ₱5,000 toward development. This is an offer of support, rather than a claim that funding has already been received or that the costing challenge is resolved."
      ],
      [
        "Development status",
        "The software is a functional Android prototype. No physical hardware prototype has been built, and end-to-end sensing or motor control has not been validated. Drying suggestions remain experimental and need validation in actual drying conditions."
      ],
      [
        "Security decisions",
        "The Android app stores its access token using secure storage and requires an HTTPS backend URL in release configuration. The companion backend separates app and device credentials and restricts routes by role: device credentials submit telemetry, while app credentials request controls. It also validates input and uses parameterized SQLite statements."
      ],
      [
        "Security work still ahead",
        "The current integration is a prototype. A production setup still needs token rotation and revocation, API rate limiting, deployment verification, and physical-device testing. Implemented safeguards do not establish end-to-end hardware security or a completed security assessment."
      ]
    ],
    "dates": "Started October 2026 · Six-member team",
    "stack": [
      "Flutter",
      "Dart",
      "Open-Meteo",
      "Node.js",
      "SQLite",
      "Planned ESP32"
    ],
    "links": [
      [
        "Source code",
        "https://github.com/Wardennnnnnn/Silong-Hamuros"
      ]
    ]
  },
  {
    "learnings": [
      {
        "title": "A foundation in JavaScript",
        "detail": "This project helped me learn coding and JavaScript by connecting a web application to a concrete attendance-recording task."
      },
      {
        "title": "Researching problems independently",
        "detail": "I learned to refer to forums when I encountered problems and use other developers’ explanations to guide my next attempt."
      },
      {
        "title": "Thinking across a complete system",
        "detail": "Working with a reader, microcontroller, network, server, and database taught me to consider how physical devices and software depend on each other."
      }
    ],
    "title": "RFID Attendance Monitoring",
    "phase": "early-work",
    "domain": "Hardware & database integration",
    "status": "Completed · Best in Innovation Award",
    "role": "Grade 12 project",
    "screenshot": "/assets/projects/rfid-hardware.jpeg",
    "screenshotSize": [
      1280,
      1864
    ],
    "alt": "RFID attendance hardware assembly with an ESP8266 board, PN532 NFC module, and breadboard wiring",
    "screenshotCaption": "Grade 12 project · Hardware assembly",
    "summary": "An RFID attendance-in/out system I completed during Grade 12, connecting an ESP8266 and PN532 reader with a local PC database through a phone hotspot.",
    "details": "I completed this project during Grade 12 and received the Best in Innovation Award for it. It brought together physical identification hardware, network connectivity, and database-backed attendance records—an early step in my experience building complete systems.",
    "dates": "Completed March 2024 · Best in Innovation Award, 2024",
    "id": "rfid-attendance",
    "story": [
      [
        "The project",
        "For my Grade 12 project, I built an RFID attendance prototype using an ESP8266 and PN532 reader. It connected through a phone hotspot to a local PC database to record attendance in and out."
      ],
      [
        "The challenge and approach",
        "Building a web application with a server was the biggest challenge. I learned how JavaScript worked and how to code, using forum discussions to research problems I encountered."
      ],
      [
        "Feedback and recognition",
        "My professor was interested and encouraged preparing a project proposal for the new principal. No subsequent approval or school deployment is confirmed. The completed project earned the Best in Innovation Award at my graduation in 2024."
      ]
    ]
  },
  {
    "learnings": [
      {
        "title": "Coordinating a large group",
        "detail": "I learned that assigned teams need regular updates so their individual tasks stay connected to the overall build."
      },
      {
        "title": "Finding the right help",
        "detail": "The model adjustment taught me to communicate a specific requirement and find someone with the file-editing skills the project needed."
      },
      {
        "title": "Staying hands-on as a leader",
        "detail": "Taking responsibility for the build taught me to stay involved in integration and progress rather than relying only on task assignments."
      }
    ],
    "id": "coin-sorter",
    "title": "Automated Coin Sorter & Counter",
    "phase": "early-work",
    "domain": "Hardware prototyping · 3D-printed design adaptation",
    "status": "Completed class prototype · Grade 12",
    "role": "Primary build contributor & team lead · Class project",
    "dates": "Completed 2024 · Grade 12 class project",
    "stack": [
      "3D printing",
      "DC motor",
      "Sensor-based counting"
    ],
    "screenshot": "/assets/projects/coin-sorter-hardware.jpeg",
    "screenshotSize": [
      1280,
      1707
    ],
    "alt": "Coin sorter prototype electronics with a controller board, DC motor, wiring, and illuminated components",
    "screenshotCaption": "Grade 12 class project · Prototype electronics",
    "summary": "Leading a Grade 12 class build and coordinating adaptation of a purchased coin-sorter model for Philippine coins, with motor-driven sorting and sensor-based counting.",
    "details": "I arranged help to adjust the purchased 3D model for Philippine coins, took a primary role in the physical build, and coordinated the class teams.",
    "story": [
      [
        "The problem",
        "Our class built an automated sorter and counter to reduce the repetitive work of sorting mixed Philippine peso coins."
      ],
      [
        "The starting design",
        "We used a 3D-printable model purchased from Fraens on Etsy. The original design was made for other currencies; the sorting dimensions needed adaptation for Philippine coins. The original concept and model belong to the source designer."
      ],
      [
        "My contribution",
        "I took a primary role in the build and led my classmates toward completion. For the model adjustment, I looked for someone who could edit the file and coordinated that work. My contribution was arranging the adaptation and helping integrate the prototype, rather than personally creating the original model or performing all CAD edits."
      ],
      [
        "The prototype",
        "The class prototype combined a rotating hopper, a DC motor with adjustable speed, denomination-specific openings, sensor-based counting, and a 3D-printed structure. Supported coins included new and earlier ₱1 designs, new and old ₱5 and ₱10 coins, and ₱20 coins."
      ],
      [
        "Feedback",
        "Our professor liked the project. It was a completed class prototype; no measured accuracy or throughput figures are claimed."
      ]
    ],
    "links": [
      [
        "Original design · Fraens on Etsy",
        "https://www.etsy.com/listing/1472774026/3d-printed-coin-sorter"
      ]
    ]
  },
  {
    "learnings": [
      {
        "title": "Checking platform feasibility early",
        "detail": "I learned to investigate whether a platform supports the intended communication workflow before treating it as the delivery channel."
      },
      {
        "title": "Recognizing external constraints",
        "detail": "Not every useful idea can be completed through the initially chosen platform. I learned to identify unresolved dependencies and reconsider the implementation path."
      },
      {
        "title": "Distinguishing execution from delivery",
        "detail": "Building the workflow taught me to separate successful processing from a complete service that actually reaches its intended recipients."
      }
    ],
    "title": "DRRM Alert Automation",
    "domain": "Workflow automation · Public safety",
    "status": "Working workflow prototype · Delivery pending",
    "role": "Workflow developer · AI-assisted development",
    "screenshot": "/assets/projects/drrm-n8n-workflow.jpeg",
    "screenshotSize": [
      1002,
      176
    ],
    "screenshotCaption": "n8n workflow prototype · Delivery integration pending",
    "alt": "Wide n8n DRRM workflow diagram with connected nodes, conditional branches, and multiple processing paths",
    "stack": [
      "n8n",
      "Workflow design"
    ],
    "summary": "An n8n workflow using PAGASA advisories to prepare DRRM alerts. The workflow runs, while a suitable announcement delivery integration remains unresolved.",
    "details": "Intended for student-organization announcements, originally through Messenger. Workflow execution is working; platform selection and live delivery remain pending.",
    "id": "drrm-alert-automation",
    "dates": "July–August 2026",
    "story": [
      [
        "The motivation",
        "My DRRM responsibilities inspired an n8n workflow for preparing weather and hazard alerts from PAGASA advisories for a student organization."
      ],
      [
        "The working prototype",
        "The workflow runs, but an alert delivery platform has not been connected. A working automation workflow does not yet constitute a live announcement service."
      ],
      [
        "The integration challenge",
        "Messenger was the intended channel because organization members are active there. I researched platform options but could not establish a suitable Messenger integration for this announcement workflow. This is an unresolved integration constraint, rather than a claim that all Messenger APIs are closed."
      ],
      [
        "Feedback and next milestone",
        "Friends were impressed by the concept, but there has been no actual organizational usage or operational feedback. Selecting a feasible delivery channel and validating advisory handling and delivery remain next milestones."
      ]
    ]
  }
];

export const earlyProjects = experiments.filter(project => project.phase === 'early-work');
export const ongoingProjects = experiments.filter(project => project.phase !== 'early-work');

export const hyperlink: CtfProject = {
  "learnings": [
    {
      "title": "Turning generated material into a reviewable bank",
      "detail": "Preparing player files, organizer solutions, and verification checks taught me to organize AI-assisted work around explicit requirements and reproducible solution paths."
    },
    {
      "title": "Designing the solving experience",
      "detail": "Working across six categories gave me practice relating difficulty, hints, point values, and attachments to the intended player experience."
    },
    {
      "title": "Separating technical readiness from event readiness",
      "detail": "I learned that verified challenge files are one part of preparation; approval, deployment validation, and running the competition remain separate responsibilities."
    }
  ],
  "id": "hyperlink",
  "title": "HyperLink VI",
  "domain": "Cybersecurity challenge development",
  "status": "Verifier passed · Event approval pending",
  "role": "CTF Head & Sole Challenge Developer · AI-assisted development",
  "screenshot": "/assets/projects/hyperlink-challenge-bank.png",
  "screenshotSize": [
    1920,
    1080
  ],
  "alt": "HyperLink VI CTFd administrator challenge bank showing categories, point values, and hidden challenge states",
  "screenshotCaption": "CTFd challenge bank · Organizer view",
  "gallery": [
    {
      "src": "/assets/projects/hyperlink-osint-editor.png",
      "width": 1920,
      "height": 1080,
      "alt": "HyperLink CTFd editor for The Unraveling showing OSINT player attachments and the challenge description",
      "caption": "The Unraveling: preparing the OSINT challenge description and player attachments."
    },
    {
      "src": "/assets/projects/hyperlink-cryptography-editor.png",
      "width": 1920,
      "height": 1080,
      "alt": "HyperLink CTFd editor for Nonce Sense showing a cryptography challenge description and its attachment",
      "caption": "Nonce Sense: a cryptography challenge about ECDSA nonce reuse, with a downloadable player file."
    }
  ],
  "summary": "An 18-challenge CTF bank across six cybersecurity categories, with organizer solutions and a successful verifier run. Event approval is pending.",
  "categories": [
    "Cryptography",
    "Forensics",
    "Reverse engineering",
    "Web exploitation",
    "Binary exploitation",
    "Open-source intelligence"
  ],
  "stack": [
    "Python",
    "CTFd",
    "Gunicorn",
    "systemd",
    "Tailscale"
  ],
  "story": [
    [
      "The opportunity",
      "I was selected as CTF Head for HyperLink VI, a department organization event planned in partnership with Globe ISP. I developed the entire challenge bank using AI-assisted programming."
    ],
    [
      "The work",
      "I prepared 18 challenges across cryptography, forensics, reverse engineering, web exploitation, binary exploitation, and OSINT. The files include player attachments, descriptions, hints, scoring configurations, generation scripts, and organizer solutions."
    ],
    [
      "Design and verification",
      "A central design concern was making a varied bank consistent and solvable. Organizer solver scripts document intended solution paths; the verifier checks metadata, required files, flag formats, and solver outputs. I ran the verifier successfully."
    ],
    [
      "Deployment preparation",
      "I also prepared CTFd configuration and deployment documentation. Passing the challenge-bank verifier establishes a preparation milestone; event operations and participant experience still require validation."
    ],
    [
      "Event status",
      "The challenge bank is prepared, while event paperwork is still in progress and approval is pending. There are no participant counts, competition outcomes, or event feedback to report yet."
    ]
  ],
  "dates": "Preparation: September 2026 · Event approval pending"
};

export const projectSlugs = [...projects.map(p => p.id), ...experiments.map(p => p.id), hyperlink.id];
