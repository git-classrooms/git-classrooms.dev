const en = {
  meta: {
    title: "git-classrooms — Self-Hosted Teaching with GitLab",
    description:
      "Self-hosted teaching tool with GitLab integration for digital classrooms, coding assignments, and automated grading.",
  },
  nav: {
    features: "Features",
    howItWorks: "How it works",
    techStack: "Tech Stack",
  },
  hero: {
    badge: "open source · self-hosted",
    headlineTop: "Teach code with",
    cta: "View on GitHub",
    ctaSecondary: "Explore features",
    subline:
      "A self-hosted platform for managing digital classrooms, distributing coding assignments, and running automated grading —\u00A0all backed by your own GitLab instance.",
  },
  features: {
    heading: "Everything you need to",
    headingHighlight: "teach code",
    subline:
      "Built for educators who want their students working with real tools from the start.",
    items: [
      {
        title: "GitLab-Native",
        description:
          "Every classroom becomes a GitLab group. Students get real repositories with branches, merge requests, and CI/CD — no toy environments.",
      },
      {
        title: "Automated Grading",
        description:
          "Push-triggered CI pipelines run your test suites automatically. Results flow back into the dashboard — no manual grading.",
      },
      {
        title: "Classroom Management",
        description:
          "Create classrooms, invite students, distribute assignments, and track progress — all from a single dashboard.",
      },
      {
        title: "Self-Hosted",
        description:
          "Your infrastructure, your data. Deploy alongside your existing GitLab instance with full control over privacy and compliance.",
      },
      {
        title: "Team Projects",
        description:
          "Support for individual and group assignments. Students collaborate in shared repositories with proper access controls.",
      },
      {
        title: "Real-World Workflow",
        description:
          "Students learn Git the way professionals use it — commits, branches, merge requests, code review, and CI/CD from day one.",
      },
    ],
  },
  howItWorks: {
    heading: "How it",
    headingHighlight: "works",
    subline: "Three steps from setup to automated grading.",
    steps: [
      {
        title: "Create a Classroom",
        description:
          "Set up a classroom linked to a GitLab group. Define assignments with starter code, deadlines, and grading criteria — all from the dashboard.",
      },
      {
        title: "Students Join & Code",
        description:
          "Students accept invitations and receive personal or team repositories, cloned from your template with full Git workflow.",
      },
      {
        title: "Automatic Grading",
        description:
          "Every push triggers a CI pipeline running your test suite. Results flow back into the dashboard — instant feedback for everyone.",
      },
    ],
    ui: {
      newClassroom: "New Classroom",
      name: "Name",
      students: "Students",
      gitlabGroup: "GitLab Group",
      createClassroom: "Create Classroom",
      gradingResults: "Grading Results",
      testCoverage: "Test Coverage",
      passed: "passed",
      failed: "failed",
      grade: "grade",
      testsPassed: "18/20 passed",
      gradeValue: "A-",
    },
  },
  techStack: {
    heading: "Built with",
    headingHighlight: "modern tools",
    subline:
      "A robust, production-ready stack designed for reliability and performance.",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      integration: "Integration",
      infra: "Infrastructure",
    },
  },
  footer: {
    tagline: "Self-hosted teaching with GitLab integration.",
    copyright: "git-classrooms · Built for educators, by developers.",
  },
} as const;

const de: typeof en = {
  meta: {
    title: "git-classrooms — Selbstgehostete Lehre mit GitLab",
    description:
      "Selbstgehostetes Lehrtool mit GitLab-Integration für digitale Klassenzimmer, Programmieraufgaben und automatisierte Bewertung.",
  },
  nav: {
    features: "Features",
    howItWorks: "So funktioniert's",
    techStack: "Tech Stack",
  },
  hero: {
    badge: "open source · self-hosted",
    headlineTop: "Code lehren mit",
    cta: "Auf GitHub ansehen",
    ctaSecondary: "Features entdecken",
    subline:
      "Eine selbstgehostete Plattform zur Verwaltung digitaler Klassenzimmer, Verteilung von Programmieraufgaben und automatisierter Bewertung —\u00A0alles mit deiner eigenen GitLab-Instanz.",
  },
  features: {
    heading: "Alles, was du brauchst, um",
    headingHighlight: "Code zu unterrichten",
    subline:
      "Entwickelt für Lehrende, die ihre Studierenden von Anfang an mit echten Tools arbeiten lassen wollen.",
    items: [
      {
        title: "GitLab-Nativ",
        description:
          "Jedes Klassenzimmer wird zu einer GitLab-Gruppe. Studierende bekommen echte Repositories mit Branches, Merge Requests und CI/CD — keine Spielumgebungen.",
      },
      {
        title: "Automatische Bewertung",
        description:
          "Push-getriggerte CI-Pipelines führen deine Test-Suites automatisch aus. Ergebnisse fließen ins Dashboard zurück — kein manuelles Korrigieren.",
      },
      {
        title: "Kursverwaltung",
        description:
          "Erstelle Klassenzimmer, lade Studierende ein, verteile Aufgaben und verfolge den Fortschritt — alles über ein einziges Dashboard.",
      },
      {
        title: "Self-Hosted",
        description:
          "Deine Infrastruktur, deine Daten. Betreibe es neben deiner bestehenden GitLab-Instanz mit voller Kontrolle über Datenschutz und Compliance.",
      },
      {
        title: "Teamprojekte",
        description:
          "Unterstützung für Einzel- und Gruppenaufgaben. Studierende arbeiten in geteilten Repositories mit korrekter Zugriffskontrolle zusammen.",
      },
      {
        title: "Praxis-Workflow",
        description:
          "Studierende lernen Git so, wie Profis es nutzen — Commits, Branches, Merge Requests, Code Review und CI/CD von Tag eins.",
      },
    ],
  },
  howItWorks: {
    heading: "So",
    headingHighlight: "funktioniert's",
    subline: "Drei Schritte vom Setup zur automatischen Bewertung.",
    steps: [
      {
        title: "Klassenzimmer erstellen",
        description:
          "Richte ein Klassenzimmer ein, das mit einer GitLab-Gruppe verknüpft ist. Definiere Aufgaben mit Starter-Code, Abgabefristen und Bewertungskriterien — alles über das Dashboard.",
      },
      {
        title: "Beitreten & Coden",
        description:
          "Studierende nehmen Einladungen an und erhalten persönliche oder Team-Repositories, geklont von deinem Template mit vollem Git-Workflow.",
      },
      {
        title: "Automatische Bewertung",
        description:
          "Jeder Push löst eine CI-Pipeline aus, die deine Test-Suite ausführt. Ergebnisse fließen ins Dashboard zurück — sofortiges Feedback für alle.",
      },
    ],
    ui: {
      newClassroom: "Neues Klassenzimmer",
      name: "Name",
      students: "Studierende",
      gitlabGroup: "GitLab-Gruppe",
      createClassroom: "Klassenzimmer erstellen",
      gradingResults: "Bewertungsergebnisse",
      testCoverage: "Testabdeckung",
      passed: "bestanden",
      failed: "fehlgeschlagen",
      grade: "Note",
      testsPassed: "18/20 bestanden",
      gradeValue: "1,3",
    },
  },
  techStack: {
    heading: "Gebaut mit",
    headingHighlight: "modernen Tools",
    subline:
      "Ein robuster, produktionsreifer Stack für Zuverlässigkeit und Performance.",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      integration: "Integration",
      infra: "Infrastruktur",
    },
  },
  footer: {
    tagline: "Selbstgehostete Lehre mit GitLab-Integration.",
    copyright: "git-classrooms · Von Entwicklern für Lehrende.",
  },
};

export const translations = { en, de } as const;
