export const cvData = {
  name: "Edgar Voskanayan",
  title: "Middle Frontend Developer",
  tagline: "Building modern, performant web experiences with React & TypeScript",

  about: [
    "Passionate frontend developer with hands-on experience building scalable web applications. I specialize in React ecosystem and TypeScript, focusing on clean architecture and exceptional user experiences.",
    "I have contributed to real-world projects including a full-featured marketplace platform and a reusable UI component library. I enjoy turning complex requirements into intuitive, well-crafted interfaces.",
  ],

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SCSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Styled Components", level: 80 },
      { name: "Next.js", level: 70 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Webpack", level: 65 },
      { name: "Figma", level: 70 },
      { name: "REST API", level: 85 },
      { name: "npm / yarn", level: 85 },
      { name: "Docker", level: 55 },
      { name: "ESLint / Prettier", level: 85 },
    ],
    other: [
      "Responsive Design",
      "Component Libraries",
      "State Management (Redux, Zustand)",
      "Framer Motion",
      "Storybook",
      "CSS Modules",
      "Atomic Design",
      "Accessibility (a11y)",
      "Performance Optimization",
      "CI/CD Basics",
    ],
  },

  experience: [
    {
      role: "Frontend Developer",
      company: "Dinely",
      period: "Feb 2025 — Present",
      highlights: [
        "Built a QR-code ordering system for restaurants and cafes — no apps, no waiters, just scan and order",
        "Developed admin & seller dashboards with smart menu and order management",
        "Integrated OpenAI to automate menu creation, including product copy and descriptions",
        "Designed a high-converting landing page to attract restaurants",
        "Worked closely with backend and design teams to deliver fast, responsive UI",
      ],
      tech: ["React", "TypeScript", "RTK Query", "Tailwind CSS", "Framer Motion", "Storybook", "i18next", "FSD", "Webpack"],
    },
    {
      role: "Frontend Developer",
      company: "Telcell Market",
      period: "Jan 2023 — Dec 2024",
      highlights: [
        "Developed three different platforms for the first Armenian marketplace (Seller, Buyer, Admin)",
        "Created an npm package with a shared UI kit and utilities used across all three platforms, following Atomic Design Pattern",
        "Fully documented codebase using Storybook for UI components and JSDoc for functionality. Wrote tests with Jest and Cypress",
        "Implemented light/dark theme support with styled-components and multilingual interface with i18next",
        "Integrated Yandex Maps, Firebase, and various third-party services across platforms",
        "Developed complex animated landing pages with parallax effects using Framer Motion",
        "Performed full SEO optimization of the buyer platform with Next.js SSR, improving performance by 80–90%",
        "Configured Prettier and ESLint for consistent code style. Participated in regular code reviews",
      ],
      tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query", "Styled Components", "SCSS"],
    },
    {
      role: "Frontend Developer",
      company: "RA Services",
      period: "Aug 2021 — Dec 2022",
      highlights: [
        "Developed a logistics project using Firebase as the backend: Firestore, Realtime Database, Cloud Functions, Hosting",
        "Created an authorization system for ordering tickets online with Telegram API integration",
        "Built an email notification system for flight news using react-email and Firebase API",
      ],
      tech: ["React", "TypeScript", "Redux", "Firebase", "Styled Components", "Telegram API"],
    },
  ],

  projects: [
    {
      title: "Dinely",
      description:
        "QR-code ordering system for restaurants and cafes. Scan, browse the menu, and order — no apps or waiters needed. Includes admin & seller dashboards with AI-powered menu creation via OpenAI.",
      tech: ["React", "TypeScript", "RTK Query", "Tailwind CSS", "Framer Motion", "Webpack"],
      links: [
        { label: "Live", url: "https://dinely.co/am/en" },
      ],
    },
    {
      title: "Telcell Market",
      description:
        "The first Armenian marketplace with three platforms (Seller, Buyer, Admin). Full SEO optimization with Next.js SSR, dark/light themes, multilingual support, and 80–90% performance boost.",
      tech: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Styled Components", "SCSS"],
      links: [
        { label: "Marketplace", url: "https://telcell.market/en" },
        { label: "App Store / Play Market", url: "https://telcell.market/en" },
      ],
    },
    {
      title: "Telcell Business & Corporate",
      description:
        "Complex animated landing pages for Telcell's B2B and corporate governance platforms. Parallax effects, responsive design, and smooth interactions built from scratch.",
      tech: ["React", "TypeScript", "Framer Motion", "Styled Components", "Next.js"],
      links: [
        { label: "Business", url: "https://telcell.am/hy/business" },
        { label: "Corporate", url: "https://telcell.am/hy/corporate-management" },
      ],
    },
    {
      title: "tcm-ui-kit",
      description:
        "A shared npm component library used across three marketplace platforms. Built with Atomic Design Pattern, documented with Storybook, and tested with Jest & Cypress.",
      tech: ["React", "TypeScript", "Storybook", "Styled Components", "Jest", "Cypress"],
      links: [
        { label: "npm", url: "https://www.npmjs.com/package/tcm-ui-kit" },
      ],
    },
    {
      title: "RA Services",
      description:
        "A logistics platform for flight ticket ordering with Telegram API authorization, email notifications for flight news, and Firebase as the full backend (Firestore, Cloud Functions, Hosting).",
      tech: ["React", "TypeScript", "Redux", "Firebase", "Styled Components", "Telegram API"],
      links: [
        { label: "Website", url: "https://rusarm-transits.am/" },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree",
      institution: "Yerevan State University (YSU)",
      period: "2017 — 2024",
      description: "Faculty of Informatics and Applied Mathematics"
    },
  ],

  languages: [
    { name: "Armenian", level: "Native", percent: 100 },
    { name: "Russian", level: "C1 — Fluent", percent: 90 },
    { name: "English", level: "B1 — Intermediate", percent: 60 },
  ],

  contacts: {
    phone: "+374 77 01 86 87",
    email: "edgar.voskanyan99@gmail.com",
    linkedin: "https://www.linkedin.com/in/edgar2511/",
  },
};
