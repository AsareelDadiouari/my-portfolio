export type Lang = 'en' | 'fr';
/** A string in both site languages. */
export type L = Record<Lang, string>;

export const profile = {
  name: 'Asaréel Dadiouari',
  pronunciation: '/a·sa·ré·el/',
  email: 'asareel.y.dadiouari@gmail.com',
  linkedin: 'https://www.linkedin.com/in/asareel-y-dadiouari/',
  github: 'https://github.com/AsareelDadiouari',
  /**
   * CV PDFs served from public/. Set to null to hide every CV link.
   * Make sure the PDFs don't contain your home address before publishing them.
   */
  resume: null as L | null,
};

/** Interface copy that isn't tied to a specific entry. */
export const ui = {
  meta: {
    title: { en: 'Asaréel Dadiouari, Full-Stack Developer', fr: 'Asaréel Dadiouari, Développeur full-stack' },
    description: {
      en: 'Full-stack developer (Angular, .NET, PostgreSQL) with a master’s in computer science. Experience, projects and contact.',
      fr: 'Développeur full-stack (Angular, .NET, PostgreSQL) titulaire d’une maîtrise en informatique. Expérience, projets et contact.',
    },
  },
  nav: {
    about: { en: 'About', fr: 'À propos' },
    work: { en: 'Experience', fr: 'Expérience' },
    projects: { en: 'Projects', fr: 'Projets' },
    side: { en: 'Side projects', fr: 'Projets perso' },
    skills: { en: 'Skills', fr: 'Compétences' },
    contact: { en: 'Contact', fr: 'Contact' },
    menu: { en: 'Menu', fr: 'Menu' },
    top: { en: 'Back to top', fr: 'Retour en haut' },
    toLight: { en: 'Switch to light mode', fr: 'Passer au thème clair' },
    toDark: { en: 'Switch to dark mode', fr: 'Passer au thème sombre' },
    otherLang: { en: 'Voir le site en français', fr: 'View the site in English' },
  },
  hero: {
    role: { en: 'Full-stack developer', fr: 'Développeur full-stack' },
    lede: {
      en: 'Full-stack developer shipping Angular, .NET and PostgreSQL software from enterprise healthcare to production SaaS, with a Master’s in Computer Science from',
      fr: 'Développeur full-stack concevant des applications Angular, .NET et PostgreSQL de la santé d’entreprise au SaaS en production, titulaire d’une maîtrise en informatique de l’',
    },
    cta: { en: 'View my work', fr: 'Voir mes réalisations' },
    resume: { en: 'Résumé', fr: 'CV' },
  },
  stats: [
    { value: { en: 'Since 2020', fr: 'Depuis 2020' }, label: { en: 'in software development', fr: 'en développement logiciel' } },
    { value: { en: 'M.Sc.', fr: 'M. Sc.' }, label: { en: 'in Computer Science', fr: 'en informatique' } },
    { value: { en: 'FR / EN', fr: 'FR / EN' }, label: { en: 'bilingual', fr: 'bilingue' } },
  ],
  sections: {
    about: { en: 'About', fr: 'À propos' },
    work: { en: 'Experience', fr: 'Expérience' },
    education: { en: 'Education', fr: 'Formation' },
    projects: { en: 'Projects', fr: 'Réalisations' },
    side: { en: 'Personal projects', fr: 'Projets personnels' },
    skills: { en: 'Skills', fr: 'Compétences' },
    contact: { en: 'Contact', fr: 'Contact' },
  },
  about: [
    {
      en: 'I’m Asaréel {pron}, a full-stack developer holding a Master’s in Computer Science from the Université du Québec à Chicoutimi. I have been developing software since 2020, with a particular focus on the Angular and .NET ecosystems.',
      fr: 'Je suis Asaréel {pron}, développeur full-stack titulaire d’une maîtrise en informatique de l’Université du Québec à Chicoutimi. Je développe des logiciels depuis 2020, principalement dans les écosystèmes Angular et .NET.',
    },
    {
      en: 'I have worked for a healthcare software company, developing features for a healthcare management application, and at the Université du Québec à Chicoutimi, where, as DevOps Manager, I lead the development and operations of a SaaS platform in production.',
      fr: 'J’ai travaillé pour une entreprise de logiciels de santé, où j’ai développé des fonctionnalités d’une application de gestion de santé, ainsi qu’à l’Université du Québec à Chicoutimi, où, à titre de gestionnaire DevOps, je dirige le développement et l’exploitation d’une plateforme SaaS en production.',
    },
    {
      en: 'I am as effective modernizing legacy systems as I am building on current stacks, and I bring a strong commitment to code quality, automated testing and continuous delivery. I work fluently in French and English.',
      fr: 'Je suis aussi efficace pour moderniser des systèmes existants que pour bâtir sur des technologies actuelles, avec une grande rigueur en matière de qualité du code, de tests automatisés et de livraison continue. Je travaille aisément en français et en anglais.',
    },
  ] as L[],
  present: { en: 'Present', fr: 'aujourd’hui' },
  current: { en: 'Current', fr: 'En poste' },
  live: { en: 'Live in production', fr: 'En production' },
  visit: { en: 'Visit site', fr: 'Voir le site' },
  building: { en: 'In development', fr: 'En développement' },
  shipped: { en: 'Shipped', fr: 'Terminé' },
  soon: { en: 'Coming soon', fr: 'Bientôt disponible' },
  moreGithub: { en: 'View GitHub profile', fr: 'Voir mon profil GitHub' },
  contact: {
    title: { en: 'Interested in working together?', fr: 'Envie de collaborer ?' },
    accent: { en: 'Get in touch.', fr: 'Écrivez-moi.' },
    copy: { en: 'Copy email', fr: 'Copier le courriel' },
    copied: { en: 'Copied', fr: 'Copié' },
  },
  timeZone: { en: 'Eastern Time', fr: 'heure de l’Est' },
  previously: { en: 'Previously:', fr: 'Auparavant :' },
};

export type Job = {
  id: string;
  org: string | L;
  place: L;
  title: L;
  /** YYYY-MM; `end` omitted means current. */
  start: string;
  end?: string;
  /** Earlier title at the same employer, shown under the current one. */
  previous?: { title: L; start: string; end: string };
  points: L[];
  stack: string[];
};

export const experience: Job[] = [
  {
    id: 'uqac-pro',
    org: 'UQAC, Chaire TDS / LaboNFC',
    place: { en: 'Chicoutimi, QC (remote)', fr: 'Chicoutimi, QC (à distance)' },
    title: { en: 'DevOps Manager', fr: 'Gestionnaire DevOps' },
    start: '2026-01',
    previous: {
      title: { en: 'Research Professional (part-time)', fr: 'Professionnel de recherche (auxiliaire)' },
      start: '2024-07',
      end: '2025-12',
    },
    points: [
      {
        en: 'Lead developer of the PMO 5.0 SaaS platform (autoauditpmo5-0.com), in production, within a MITACS research project.',
        fr: 'Développeur principal de la plateforme SaaS PMO 5.0 (autoauditpmo5-0.com), en production, dans le cadre d’un projet de recherche MITACS.',
      },
      {
        en: 'Built server-side PDF reports, partner spaces, an administration console and account security (passkeys, two-step verification), with continuous deployment and automated testing.',
        fr: 'Rapports PDF générés côté serveur, espaces partenaires, console d’administration et sécurité des comptes (passkeys, vérification en deux étapes), avec déploiement continu et tests automatisés.',
      },
      {
        en: 'Replaced a third-party survey tool with an in-house questionnaire and report builder, and exposed a partner REST API with signed webhooks.',
        fr: 'Remplacement d’un outil de questionnaire tiers par un constructeur de questionnaires et de rapports maison, et mise en place d’une API REST partenaires avec webhooks signés.',
      },
      {
        en: 'Deployed on Cloudflare Workers and Render; Playwright end-to-end tests, Gitleaks secret scanning in CI and Law 25 (Québec privacy) compliance.',
        fr: 'Déploiement sur Cloudflare Workers et Render ; tests de bout en bout Playwright, détection de secrets Gitleaks en CI et conformité à la Loi 25.',
      },
    ],
    stack: ['Angular 22', 'ASP.NET Core', '.NET 10', 'PostgreSQL', 'QuestPDF', 'Docker', 'GitHub Actions', 'Cloudflare Workers', 'Render', 'Playwright', 'xUnit', 'Vitest', 'Gitleaks'],
  },
  {
    id: 'healthcare',
    org: { en: 'Healthcare software company', fr: 'Entreprise de logiciels de santé' },
    place: { en: 'Remote', fr: 'À distance' },
    title: { en: 'Software Developer', fr: 'Développeur logiciel' },
    start: '2024-10',
    end: '2026-10',
    points: [
      {
        en: 'Developed and maintained features for a healthcare management application (Angular / RxJS frontend, WCF and .NET Framework 4.8 services, SQL Server).',
        fr: 'Développement et maintenance de fonctionnalités d’une application de gestion de santé (frontend Angular / RxJS, services WCF et .NET Framework 4.8, SQL Server).',
      },
      {
        en: 'Contributed to integrating an artificial intelligence feature into the product.',
        fr: 'Participation à l’intégration d’une fonctionnalité d’intelligence artificielle dans le produit.',
      },
      {
        en: 'Worked in an agile team: requirements analysis, code reviews, continuous delivery through CI/CD.',
        fr: 'Travail en équipe agile : analyse des exigences, revues de code, livraison continue via CI/CD.',
      },
    ],
    stack: ['Angular', 'RxJS', 'C#', '.NET Framework 4.8', 'WCF', 'SQL Server', 'Azure DevOps'],
  },
  {
    id: 'uqac-ra',
    org: 'UQAC, LaboNFC',
    place: { en: 'Chicoutimi, QC', fr: 'Chicoutimi, QC' },
    title: { en: 'Research Assistant — Master’s', fr: 'Assistant de recherche — Maîtrise' },
    start: '2023-06',
    end: '2024-06',
    points: [
      {
        en: 'Contributed to the PME 4.0 project: a digital transformation survey of 30 SMEs in Saguenay-Lac-Saint-Jean.',
        fr: 'Contribution au projet PME 4.0 : sondage sur le virage numérique de 30 PME du Saguenay-Lac-Saint-Jean.',
      },
      {
        en: 'Built a self-audit questionnaire platform for SMEs.',
        fr: 'Mise en place d’une plateforme de questionnaire d’auto-audit destinée aux PME.',
      },
    ],
    stack: ['PointerPro', 'Monday.com', 'HTML', 'CSS'],
  },
  {
    id: 'banking',
    org: { en: 'Banking institution', fr: 'Institution bancaire' },
    place: { en: 'Montréal, QC', fr: 'Montréal, QC' },
    title: { en: 'Full-Stack Developer — Internship', fr: 'Développeur full-stack — Stage' },
    start: '2023-09',
    end: '2024-03',
    points: [
      {
        en: 'Built an Angular dependency management tool (Dependabot-style) to keep npm packages up to date across the team’s projects.',
        fr: 'Développement d’un outil de gestion des dépendances Angular (de type Dependabot) pour maintenir à jour les paquets npm des projets de l’équipe.',
      },
      {
        en: 'Took part in agile ceremonies: daily stand-ups, sprint planning and review.',
        fr: 'Participation aux cérémonies agiles : quotidiennes, planification et revue de sprint.',
      },
    ],
    stack: ['Angular', '.NET 6', 'Entity Framework', 'Azure DevOps', 'Jira', 'xUnit'],
  },
  {
    id: 'gov-qc',
    org: { en: 'Government of Québec', fr: 'Gouvernement du Québec' },
    place: { en: 'Chicoutimi, QC', fr: 'Chicoutimi, QC' },
    title: { en: 'Programmer Analyst — Part-time', fr: 'Analyste programmeur — Temps partiel' },
    start: '2022-09',
    end: '2023-04',
    points: [
      {
        en: 'Developed and maintained internal web applications.',
        fr: 'Développement et maintenance d’applications web internes.',
      },
    ],
    stack: ['React', 'Node.js'],
  },
  {
    id: 'leap',
    org: 'Leap Careers',
    place: { en: 'Remote', fr: 'À distance' },
    title: { en: 'Web Developer — Freelance', fr: 'Développeur web — Freelance' },
    start: '2022-01',
    end: '2022-04',
    points: [
      {
        en: 'Migrated a website from React to Angular; built mobile features (push notifications, chat) and responsive design.',
        fr: 'Migration d’un site de React vers Angular ; fonctionnalités mobiles (notifications push, clavardage) et responsive design.',
      },
    ],
    stack: ['Angular', 'Ionic', 'AWS Amplify', 'Lambda', 'Route 53'],
  },
  {
    id: 'wever',
    org: 'Wever',
    place: { en: 'Valbonne, France', fr: 'Valbonne, France' },
    title: { en: 'Full-Stack Developer — Internship', fr: 'Développeur full-stack — Stage' },
    start: '2021-06',
    end: '2021-08',
    points: [
      {
        en: 'Built internal modules (chat, forms) in React; contributed to the Symfony 5 backend; set up continuous integration.',
        fr: 'Création de modules internes (clavardage, formulaires) en React ; contribution au backend Symfony 5 ; intégration continue.',
      },
    ],
    stack: ['React', 'Symfony 5', 'Docker', 'GitLab'],
  },
];

export const education: { id: string; degree: L; school: L }[] = [
  {
    id: 'msc',
    degree: { en: 'Master’s in Computer Science', fr: 'Maîtrise en informatique' },
    school: { en: 'Université du Québec à Chicoutimi, Saguenay, QC', fr: 'Université du Québec à Chicoutimi, Saguenay, QC' },
  },
  {
    id: 'bsc',
    degree: { en: 'Bachelor’s in Computer Science', fr: 'Licence (baccalauréat) en informatique' },
    school: { en: 'Université Côte d’Azur, Biot, France', fr: 'Université Côte d’Azur, Biot, France' },
  },
  {
    id: 'prep',
    degree: { en: 'Preparatory Classes (Engineering)', fr: 'Classes préparatoires' },
    school: {
      en: 'École Marocaine des Sciences de l’Ingénieur, Casablanca, Morocco',
      fr: 'École Marocaine des Sciences de l’Ingénieur, Casablanca, Maroc',
    },
  },
];

export type Project = {
  name: string;
  summary: L;
  stack: string[];
  url?: string;
  /** Screenshot (import it from ./img or use a URL); a styled title card is shown without one. */
  image?: string;
  /** Still being built: shows an "In progress" badge instead of a link. */
  building?: boolean;
};

export const featured: Project & { url: string } = {
  name: 'PMO 5.0',
  summary: {
    en: 'A self-audit SaaS platform for Québec SMEs, built for the Chaire TDS at UQAC within a MITACS research project. I lead its development: an in-house questionnaire and report builder replacing a third-party tool, server-side PDF reports, a partner REST API with signed webhooks, passkeys and Law 25 privacy compliance. Runs on Cloudflare Workers and Render, with CI/CD, Playwright E2E tests and Gitleaks.',
    fr: 'Une plateforme SaaS d’auto-audit pour les PME québécoises, conçue pour la Chaire TDS de l’UQAC dans le cadre d’un projet de recherche MITACS. J’en dirige le développement : constructeur de questionnaires et de rapports maison remplaçant un outil tiers, rapports PDF côté serveur, API REST partenaires avec webhooks signés, passkeys et conformité à la Loi 25. Hébergée sur Cloudflare Workers et Render, avec CI/CD, tests E2E Playwright et Gitleaks.',
  },
  stack: ['Angular 22', 'ASP.NET Core (.NET 10)', 'PostgreSQL', 'QuestPDF', 'Cloudflare Workers', 'Render', 'Playwright', 'GitHub Actions'],
  url: 'https://autoauditpmo5-0.com',
  image: './screens/pmo5-desktop.png',
};

// Templates for upcoming projects — edit the name, summary and stack as they take shape,
// then add `url` (repo or live demo) and an `image`, and remove `building` once shipped.
export const projects: Project[] = [
  {
    name: 'Document Q&A Assistant (RAG)',
    summary: {
      en: 'Upload PDFs (standards, internal policies, technical docs) and ask questions in plain language: answers are generated with retrieval-augmented generation (RAG), streamed live and cite the exact source pages. Background ingestion and vector search in PostgreSQL with pgvector.',
      fr: 'On dépose des PDF (normes, politiques internes, documentation technique) et on pose ses questions en langage naturel : les réponses sont générées par RAG (génération augmentée par récupération), diffusées en direct et citent les pages sources. Ingestion en arrière-plan et recherche vectorielle dans PostgreSQL avec pgvector.',
    },
    stack: ['Angular', 'ASP.NET Core', 'PostgreSQL', 'pgvector', 'Claude API'],
    url: 'https://github.com/AsareelDadiouari/document-qa-assistant',
    building: true,
  },
  {
    name: 'Stock Market Analyst MCP',
    summary: {
      en: 'A Python Model Context Protocol (MCP) server that gives Claude and other MCP clients stock-analysis tools: quotes and price history, technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands), ticker comparison, a structured stock analysis and strategy backtesting. Covered by tests and GitHub Actions CI.',
      fr: 'Un serveur Model Context Protocol (MCP) en Python qui donne à Claude et aux autres clients MCP des outils d’analyse boursière : cotations et historique des prix, indicateurs techniques (SMA, EMA, RSI, MACD, bandes de Bollinger), comparaison de titres, analyse structurée d’une action et backtesting de stratégies. Couvert par des tests et une CI GitHub Actions.',
    },
    stack: ['Python', 'MCP', 'pandas', 'yfinance', 'pytest', 'GitHub Actions'],
    url: 'https://github.com/AsareelDadiouari/stock-market-analyst-mcp',
  },
];

export const skills: { id: string; group: L; items: (string | L)[] }[] = [
  { id: 'front', group: { en: 'Frontend', fr: 'Frontend' }, items: ['Angular', 'RxJS', 'TypeScript', 'React', 'Vue.js'] },
  {
    id: 'back',
    group: { en: 'Backend', fr: 'Backend' },
    items: ['C# / .NET 10', 'ASP.NET Core', '.NET Framework 4.8', 'WCF', 'Entity Framework', 'Node.js / Express', 'Java', 'Python'],
  },
  {
    id: 'data',
    group: { en: 'Databases', fr: 'Bases de données' },
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    id: 'test',
    group: { en: 'Testing', fr: 'Tests' },
    items: ['Playwright', 'Vitest', 'Jasmine', 'Karma', 'xUnit', 'pytest', 'JUnit', 'Cucumber', { en: 'Integration & E2E', fr: 'Intégration et bout en bout' }],
  },
  {
    id: 'ai',
    group: { en: 'AI tooling', fr: 'Outils IA' },
    items: [
      'Model Context Protocol (MCP)',
      'Claude / Claude Code',
      { en: 'LLM tool integration', fr: 'Intégration d’outils pour LLM' },
    ],
  },
  {
    id: 'tools',
    group: { en: 'DevOps & tools', fr: 'DevOps et outils' },
    items: ['Git', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Cloudflare Workers', 'Render', 'Gitleaks', 'Linux', 'Jira', 'UML', { en: 'Agile', fr: 'Agilité' }],
  },
  {
    id: 'langs',
    group: { en: 'Languages', fr: 'Langues' },
    items: [
      { en: 'French, native', fr: 'Français, langue maternelle' },
      { en: 'English, professional (TOEIC 880)', fr: 'Anglais, professionnel (TOEIC 880)' },
    ],
  },
];
