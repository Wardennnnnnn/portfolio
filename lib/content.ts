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
        "title": "What I learned",
        "detail": "When a forum solution did not work in my application, I compared several examples, kept notes on the differences, and adapted the approach to my own code."
      }
    ],
    "id": "bascal",
    "number": "01",
    "title": "BasCal",
    "domain": "Adaptive calculus learning platform",
    "status": "Locally hosted · Successfully defended",
    "role": "Solo developer",
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
    "summary": "A learning platform based on an academic research framework. It includes 12 calculus modules, adaptive quizzes, and student progress analytics.",
    "story": [
      [
        "The brief",
        "A professor commissioned BasCal for a master’s thesis at Batangas State University. My task was to turn the research requirements into workflows for students and educators. The research framework itself was not my work."
      ],
      [
        "The application",
        "The platform covers differentiation and integration across 12 modules. It provides adaptive quizzes, learning materials, and progress analytics across five mathematical proficiency strands. Educators can manage content and review generated quizzes."
      ],
      [
        "The challenge",
        "Integrating the AI quiz generator and displaying equations correctly took the most effort. The generated questions had to be usable, and the calculus notation had to be readable."
      ],
      [
        "My approach",
        "I read forum discussions, noted how other developers solved similar problems, and adapted the parts that applied. The quiz workflow now supports LaTeX for mathematical expressions."
      ],
      [
        "Delivery and feedback",
        "I built the system and hosted it locally. I used ngrok to make it reachable during the defense, which was successful. My professor told me, “Nak, maraming salamat ha.” I include this as an account of the delivery experience. It is not a measure of learning outcomes."
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
        "title": "What I learned",
        "detail": "Before choosing a host, I researched the available services and their limits. I weighed cost against connectivity and the application’s requirements."
      }
    ],
    "id": "safetap",
    "number": "02",
    "title": "SparTap",
    "domain": "Campus safety and evacuation accountability",
    "status": "Deployed · Not yet tested in actual operations",
    "role": "Solo developer",
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
      939
    ],
    "alt": "SparTap evacuation overview during an active earthquake drill",
    "gallery": [
      {
        "src": "/assets/projects/safetap-student-directory.png",
        "width": 1920,
        "height": 939,
        "alt": "SparTap administrator directory with students and academic blocks",
        "caption": "Managing student records and class blocks."
      },
      {
        "src": "/assets/projects/safetap-scanner.png",
        "width": 1920,
        "height": 1080,
        "alt": "SparTap representative check-in screen with NFC, QR, search, and ID-photo scan options",
        "caption": "Representative check-in with NFC and alternative identification methods."
      },
      {
        "src": "/assets/projects/safetap-offline-setup.png",
        "width": 1920,
        "height": 1080,
        "alt": "SparTap offline records screen before downloading event data",
        "caption": "Offline preparation before event data is downloaded."
      },
      {
        "src": "/assets/projects/safetap-offline-ready.png",
        "width": 1920,
        "height": 1080,
        "alt": "SparTap offline records screen showing downloaded event data and offline assets",
        "caption": "Downloaded event data ready for offline check-ins."
      },
      {
        "src": "/assets/projects/spartap-sign-in-light.png",
        "width": 1920,
        "height": 939,
        "alt": "SparTap sign-in screen in light mode",
        "caption": "Campus attendance and evacuation accountability, with light and dark themes."
      },
      {
        "src": "/assets/projects/spartap-sign-in-dark.png",
        "width": 1920,
        "height": 939,
        "alt": "SparTap sign-in screen in dark mode",
        "caption": "Dark theme for the SparTap sign-in screen."
      },
      {
        "src": "/assets/projects/spartap-overview-dark.png",
        "width": 1920,
        "height": 939,
        "alt": "SparTap evacuation overview in dark mode",
        "caption": "Active earthquake drill overview in dark mode."
      },
      {
        "src": "/assets/projects/spartap-student-directory-dark.png",
        "width": 1920,
        "height": 939,
        "alt": "SparTap student directory in dark mode",
        "caption": "Student and academic block management in dark mode."
      }
    ],
    "summary": "A system that links campus identification with class attendance and emergency accountability. It supports live check-ins and offline scan queues.",
    "story": [
      [
        "Why I built it",
        "The university was introducing new identification cards, and I serve in a disaster risk reduction and management (DRRM) role. This raised the question of whether the same card could help account for students during an evacuation. I proposed SparTap for my Web Systems and Technologies course."
      ],
      [
        "The application",
        "SparTap combines class attendance, emergency check-ins, live arrival counts, lists of unaccounted students, offline scan queues, audit records, and exportable reports. It is used by administrators and class representatives."
      ],
      [
        "The challenge",
        "Deployment, NFC and QR identification, and the floor-plan interface required the most research. I looked into free hosting options to keep the cost of access low."
      ],
      [
        "Technical decisions",
        "The system uses Express, MySQL, and Socket.IO. NFC requires a compatible device and a browser over HTTPS, so QR and other identification methods are available as alternatives. The floor view is a schematic reference and is not drawn to scale."
      ],
      [
        "Current status and feedback",
        "The application is deployed but has not been used in actual campus operations or an emergency. Some friends gave positive feedback on the interface. This feedback is informal, and operational validation has yet to be done."
      ],
      [
        "Security decisions",
        "I implemented salted scrypt password hashing, expiring sessions, HttpOnly and SameSite cookies, CSRF tokens, login attempt limits, server-side role checks, and parameterized database writes. The API tests include cases for missing CSRF tokens and unauthorized roles. These are controls I implemented. They do not amount to a completed penetration test or a guarantee of security."
      ],
      [
        "Remaining security work",
        "The production cookie and HTTPS settings still need to be verified. Authenticated users can currently see the student directory, so a least-privilege review should determine which records each role needs. Operational security validation must be completed before any real campus use."
      ]
    ],
    "links": [
      [
        "Source code",
        "https://github.com/Wardennnnnnn/safetap"
      ],
      [
        "Visit application",
        "https://spartap.terincorp.com/"
      ]
    ],
    "dates": "October 2026"
  },
  {
    "learnings": [
      {
        "title": "What I learned",
        "detail": "Building PITS gave me practice with basic Python concepts and file handling in an application that has multiple user roles."
      }
    ],
    "id": "pits",
    "number": "03",
    "title": "PITS",
    "domain": "Public infrastructure transparency",
    "status": "Presented and defended · Interface refinement needed",
    "role": "Solo developer",
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
    "summary": "A desktop prototype that explores how project maps, budget records, evidence review, and citizen reports can make public infrastructure information easier to review.",
    "story": [
      [
        "Motivation",
        "PITS examines how organized records of infrastructure, budgets, progress, and evidence can support public review. A report of a suspected ghost project is a concern that calls for review. It is not proof of wrongdoing."
      ],
      [
        "Administrator workflows",
        "Administrators can verify or reject uploads, delete projects with double confirmation, clear the database, review audit logs and system statistics, and export CSV reports."
      ],
      [
        "Moderator workflows",
        "Moderators create projects with materials, labor, and equipment budgets. They upload progress photos, engineer statements, and budget reports, update progress and status, and set project GPS coordinates. BudgetTracker shows safe, warning, critical, and exceeded states before new costs are logged."
      ],
      [
        "Citizen workflows",
        "Public users can search and filter projects, browse a progress-colored map and document galleries, comment on and like updates, report suspected ghost projects, and export project lists. Registration validates email, username availability, and password strength."
      ],
      [
        "The interface challenge",
        "Building the interface I wanted in Kivy was difficult at my level of experience at the time. I chose a simpler design so that I could complete the core workflows. This reflects my own experience and does not reflect the limits of Python or Kivy."
      ],
      [
        "Presentation and feedback",
        "After I presented and defended the project, my professor liked the concept and recommended further work on the interface. The listed workflows are implemented in the academic desktop prototype. The project has not been publicly deployed or adopted."
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
        "title": "What I learned",
        "detail": "I have planned how monitoring, device status, faults, and control requests fit together. I have also kept implemented software separate from hardware behavior that has not been tested."
      }
    ],
    "id": "silong-hamuros",
    "title": "Silong Hamuros",
    "domain": "IoT-based coffee drying and digital monitoring",
    "status": "Functional Android prototype · Hardware testing pending · Started October 2026",
    "role": "Project Manager · Main Project Feature Lead · Application Feature Lead",
    "screenshot": "/assets/projects/silong-app-dashboard.jpeg",
    "screenshotSize": [
      946,
      2048
    ],
    "alt": "Silong Hamuros Android dashboard showing the device-not-connected message, unavailable cover status, and sample weight awaiting readings",
    "screenshotCaption": "Android monitoring dashboard · Hardware disconnected; waiting for readings from a connected device",
    "gallery": [
      {
        "src": "/assets/projects/silong-app-weather-guide.jpeg",
        "width": 946,
        "height": 2048,
        "alt": "Silong Android weather and drying guide showing Lipa forecast rain probability and no suitable drying window",
        "caption": "Weather and drying guide · Forecast information can be viewed without connected hardware; drying suggestions remain experimental."
      },
      {
        "src": "/assets/projects/silong-app-forecast-reminders.jpeg",
        "width": 946,
        "height": 2048,
        "alt": "Silong Android in-app cover reminder and hourly rain forecasts with an Open-Meteo fetch timestamp",
        "caption": "Hourly forecasts and an in-app cover reminder · The reminder does not demonstrate physical cover movement."
      },
      {
        "src": "/assets/projects/silong-app-farm-settings.jpeg",
        "width": 946,
        "height": 2048,
        "alt": "Silong Android farm settings with optional device setup, disconnected status, a rain advisory threshold, and an in-app weather advisory toggle",
        "caption": "Farm settings · Device connection setup, rain advisory threshold, and in-app advisory preferences."
      },
      {
        "src": "/assets/projects/silong-design-blueprint.png",
        "width": 1536,
        "height": 1024,
        "alt": "Silong proposed coffee-drying system blueprint showing a protective cover, sensors, and ESP32-based architecture",
        "caption": "Proposed system design · Conceptual blueprint, not a photograph of a working hardware prototype."
      }
    ],
    "summary": "A six-member team project. The functional Android prototype covers coffee-drying monitoring, batch records, weather advisories, and control workflows. Physical hardware testing has not started.",
    "details": "The implemented Android workflows include monitoring, batch tracking, charts, guarded cover controls, local storage, and weather forecasts that do not depend on hardware. No physical prototype has been built.",
    "story": [
      [
        "More about this project",
        "The implemented Android workflows include monitoring, batch tracking, charts, guarded cover controls, local storage, and weather forecasts that do not depend on hardware. No physical prototype has been built."
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
        "title": "What I learned",
        "detail": "This project taught me coding and JavaScript by connecting a web application to a real attendance-recording task."
      }
    ],
    "title": "RFID Attendance Monitoring",
    "phase": "early-work",
    "domain": "Hardware and database integration",
    "status": "Completed March 2024 · Best in Innovation Award, 2024",
    "role": "Grade 12 project",
    "screenshot": "/assets/projects/rfid-hardware.jpeg",
    "screenshotSize": [
      1280,
      1864
    ],
    "alt": "RFID attendance hardware assembly with an ESP8266 board, PN532 NFC module, and breadboard wiring",
    "screenshotCaption": "Grade 12 project · Hardware assembly",
    "summary": "An RFID attendance-in and attendance-out system I completed in Grade 12. An ESP8266 and a PN532 reader connect to a local PC database through a phone hotspot.",
    "details": "The project combined physical identification hardware, network connectivity, and database-backed attendance records. It was an early step in building complete systems.",
    "dates": "Completed March 2024 · Best in Innovation Award, 2024",
    "id": "rfid-attendance",
    "story": [
      [
        "More about this project",
        "The project combined physical identification hardware, network connectivity, and database-backed attendance records. It was an early step in building complete systems."
      ]
    ]
  },
  {
    "learnings": [
      {
        "title": "What I learned",
        "detail": "Assigned teams need regular updates so that their individual tasks stay connected to the overall build."
      }
    ],
    "id": "coin-sorter",
    "title": "Automated Coin Sorter and Counter",
    "phase": "early-work",
    "domain": "Hardware prototyping and 3D-printed design adaptation",
    "status": "Completed class prototype · 2024",
    "role": "Primary build contributor and team lead · Class project",
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
    "summary": "A Grade 12 class build in which I served as team lead. We adapted a purchased coin-sorter model for Philippine coins, with motor-driven sorting and sensor-based counting.",
    "details": "I arranged help to adjust the purchased 3D model for Philippine coins, took a main role in the physical build, and coordinated the class teams.",
    "story": [
      [
        "More about this project",
        "I arranged help to adjust the purchased 3D model for Philippine coins, took a main role in the physical build, and coordinated the class teams."
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
        "title": "What I learned",
        "detail": "I should confirm that a platform supports the intended way of communicating before I treat it as the delivery channel."
      }
    ],
    "title": "DRRM Alert Automation",
    "domain": "Workflow automation for public safety",
    "status": "Working workflow prototype · Delivery pending · July–August 2026",
    "role": "Workflow developer",
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
    "summary": "An n8n workflow that uses PAGASA advisories to prepare DRRM alerts. The workflow runs, but a suitable platform for delivering announcements has not been chosen.",
    "details": "The workflow was intended for student-organization announcements, originally through Messenger. It executes correctly. The platform choice and live delivery are still pending.",
    "id": "drrm-alert-automation",
    "dates": "July–August 2026",
    "story": [
      [
        "More about this project",
        "The workflow was intended for student-organization announcements, originally through Messenger. It executes correctly. The platform choice and live delivery are still pending."
      ]
    ]
  }
];

export const earlyProjects = experiments.filter(project => project.phase === 'early-work');
export const ongoingProjects = experiments.filter(project => project.phase !== 'early-work');

export const hyperlink: CtfProject = {
  "learnings": [
    {
      "title": "What I learned",
      "detail": "Preparing player files, organizer solutions, and verification checks taught me to organize my work around explicit requirements and solutions that can be reproduced."
    }
  ],
  "id": "hyperlink",
  "title": "HyperLink VI",
  "domain": "Cybersecurity challenge development",
  "status": "Prepared in September 2026. The challenge bank passed verification. Event approval is pending.",
  "role": "Head and sole challenge developer",
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
  "summary": "I developed an 18-challenge Capture the Flag competition for a department event. The challenges cover six cybersecurity categories and progress from beginner to advanced difficulty.",
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
      "Capture the Flag development",
      "I developed an 18-challenge Capture the Flag competition for a department event. The challenges cover six cybersecurity categories and progress from beginner to advanced difficulty."
    ],
    [
      "My work",
      "My work included challenge-generation scripts, player files, hints, scoring configurations, organizer solutions, an automated verification tool, and preparation for CTFd deployment."
    ],
    [
      "Current status",
      "Prepared in September 2026. The challenge bank passed verification. Event approval is pending."
    ]
  ],
  "dates": "Preparation: September 2026 · Event approval pending"
};

export const projectSlugs = [...projects.map(p => p.id), ...experiments.map(p => p.id), hyperlink.id];
