export type Lang = "en" | "ru";

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      scroll: "Scroll",
    },
    about: {
      label: "About Me",
      title: "Who I Am",
      paragraphs: [
        "Passionate frontend developer with hands-on experience building scalable web applications. I specialize in React ecosystem and TypeScript, focusing on clean architecture and exceptional user experiences.",
        "I have contributed to real-world projects including a full-featured marketplace platform and a reusable UI component library. I enjoy turning complex requirements into intuitive, well-crafted interfaces.",
      ],
      highlights: [
        { title: "Clean Code", text: "Writing maintainable, well-structured code" },
        { title: "Performance", text: "Optimized applications for speed & UX" },
        { title: "Team Player", text: "Collaborative development & code reviews" },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tech Stack",
      frontend: "Frontend",
      tools: "Tools & Technologies",
      other: "Also Familiar With",
    },
    experience: {
      label: "Experience",
      title: "Where I've Worked",
      items: [
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
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "What I've Built",
      items: [
        {
          title: "Dinely",
          description: "QR-code ordering system for restaurants and cafes. Scan, browse the menu, and order — no apps or waiters needed. Includes admin & seller dashboards with AI-powered menu creation via OpenAI.",
        },
        {
          title: "Telcell Market",
          description: "The first Armenian marketplace with three platforms (Seller, Buyer, Admin). Full SEO optimization with Next.js SSR, dark/light themes, multilingual support, and 80–90% performance boost.",
          note: "Server may be down — the app is still available in App Store / Play Market",
        },
        {
          title: "Telcell Business & Corporate",
          description: "Complex animated landing pages for Telcell's B2B and corporate governance platforms. Parallax effects, responsive design, and smooth interactions built from scratch.",
        },
        {
          title: "tcm-ui-kit",
          description: "A shared npm component library used across three marketplace platforms. Built with Atomic Design Pattern, documented with Storybook, and tested with Jest & Cypress.",
        },
        {
          title: "RA Services",
          description: "A logistics platform for flight ticket ordering with Telegram API authorization, email notifications for flight news, and Firebase as the full backend (Firestore, Cloud Functions, Hosting).",
          note: "Server may currently be down",
        },
      ],
    },
    education: {
      label: "Education",
      title: "My Background",
      items: [
        {
          degree: "Bachelor's Degree",
          institution: "Yerevan State University (YSU)",
          period: "2017 — 2024",
          description: "Faculty of Informatics and Applied Mathematics",
        },
      ],
    },
    languages: {
      label: "Languages",
      title: "I Speak",
      items: [
        { name: "Armenian", level: "Native" },
        { name: "Russian", level: "C1 — Fluent" },
        { name: "English", level: "B1 — Intermediate" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle: "I'm always open to new opportunities and interesting projects. Feel free to reach out!",
    },
    footer: {
      builtWith: "Built with React & TypeScript.",
    },
  },

  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      education: "Образование",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      viewWork: "Мои работы",
      contactMe: "Связаться",
      scroll: "Листать",
    },
    about: {
      label: "Обо мне",
      title: "Кто я",
      paragraphs: [
        "Увлечённый фронтенд-разработчик с практическим опытом создания масштабируемых веб-приложений. Специализируюсь на экосистеме React и TypeScript, уделяя внимание чистой архитектуре и отличному пользовательскому опыту.",
        "Участвовал в реальных проектах, включая полноценную маркетплейс-платформу и переиспользуемую библиотеку UI-компонентов. Люблю превращать сложные требования в интуитивные, продуманные интерфейсы.",
      ],
      highlights: [
        { title: "Чистый код", text: "Поддерживаемый, хорошо структурированный код" },
        { title: "Производительность", text: "Оптимизация приложений для скорости и UX" },
        { title: "Командный игрок", text: "Совместная разработка и код-ревью" },
      ],
    },
    skills: {
      label: "Навыки",
      title: "Стек технологий",
      frontend: "Фронтенд",
      tools: "Инструменты и технологии",
      other: "Также знаком с",
    },
    experience: {
      label: "Опыт",
      title: "Где я работал",
      items: [
        {
          role: "Фронтенд-разработчик",
          company: "Dinely",
          period: "Фев 2025 — настоящее время",
          highlights: [
            "Разработал систему QR-заказов для ресторанов и кафе — без приложений, без официантов, просто сканируй и заказывай",
            "Создал админ- и продавец-панели с умным управлением меню и заказами",
            "Интегрировал OpenAI для автоматизации создания меню, включая описания продуктов",
            "Спроектировал высоконверсионный лендинг для привлечения ресторанов",
            "Тесно сотрудничал с бэкенд- и дизайн-командами для создания быстрого, отзывчивого UI",
          ],
        },
        {
          role: "Фронтенд-разработчик",
          company: "Telcell Market",
          period: "Янв 2023 — Дек 2024",
          highlights: [
            "Разработал три платформы для первого армянского маркетплейса (Продавец, Покупатель, Админ)",
            "Создал npm-пакет с общим UI-китом и утилитами для трёх платформ, по паттерну Atomic Design",
            "Полностью документировал кодовую базу: Storybook для UI-компонентов, JSDoc для функциональности. Написал тесты на Jest и Cypress",
            "Реализовал поддержку светлой/тёмной тем через styled-components и мультиязычность через i18next",
            "Интегрировал Яндекс Карты, Firebase и другие сторонние сервисы",
            "Разработал сложные анимированные лендинги с параллакс-эффектами на Framer Motion",
            "Провёл полную SEO-оптимизацию платформы покупателя на Next.js SSR, улучшив производительность на 80–90%",
            "Настроил Prettier и ESLint для единого стиля кода. Участвовал в регулярных код-ревью",
          ],
        },
        {
          role: "Фронтенд-разработчик",
          company: "RA Services",
          period: "Авг 2021 — Дек 2022",
          highlights: [
            "Разработал логистический проект с Firebase в качестве бэкенда: Firestore, Realtime Database, Cloud Functions, Hosting",
            "Создал систему авторизации для онлайн-заказа билетов с интеграцией Telegram API",
            "Построил систему email-уведомлений о новостях авиарейсов через react-email и Firebase API",
          ],
        },
      ],
    },
    projects: {
      label: "Проекты",
      title: "Что я создал",
      items: [
        {
          title: "Dinely",
          description: "Система QR-заказов для ресторанов и кафе. Сканируй, смотри меню и заказывай — без приложений и официантов. Включает админ- и продавец-панели с ИИ-генерацией меню через OpenAI.",
        },
        {
          title: "Telcell Market",
          description: "Первый армянский маркетплейс с тремя платформами (Продавец, Покупатель, Админ). Полная SEO-оптимизация на Next.js SSR, тёмная/светлая темы, мультиязычность и рост производительности на 80–90%.",
          note: "Сервер может быть недоступен — приложение доступно в App Store / Play Market",
        },
        {
          title: "Telcell Business & Corporate",
          description: "Сложные анимированные лендинги для B2B и корпоративного управления Telcell. Параллакс-эффекты, адаптивный дизайн и плавные интерактивные элементы с нуля.",
        },
        {
          title: "tcm-ui-kit",
          description: "Общая npm-библиотека компонентов для трёх платформ маркетплейса. Построена по паттерну Atomic Design, документирована в Storybook, протестирована на Jest и Cypress.",
        },
        {
          title: "RA Services",
          description: "Логистическая платформа для заказа авиабилетов с авторизацией через Telegram API, email-уведомлениями и Firebase в качестве полного бэкенда (Firestore, Cloud Functions, Hosting).",
          note: "Сервер может быть недоступен",
        },
      ],
    },
    education: {
      label: "Образование",
      title: "Моё образование",
      items: [
        {
          degree: "Степень бакалавра",
          institution: "Ереванский государственный университет (ЕГУ)",
          period: "2017 — 2024",
          description: "Факультет информатики и прикладной математики",
        },
      ],
    },
    languages: {
      label: "Языки",
      title: "Я говорю",
      items: [
        { name: "Армянский", level: "Родной" },
        { name: "Русский", level: "C1 — Свободный" },
        { name: "Английский", level: "B1 — Средний" },
      ],
    },
    contact: {
      label: "Контакты",
      title: "Связаться со мной",
      subtitle: "Я всегда открыт для новых возможностей и интересных проектов. Не стесняйтесь писать!",
    },
    footer: {
      builtWith: "Создано на React и TypeScript.",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];

export default translations;
