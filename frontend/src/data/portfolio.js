// Portfolio data — Mouhammed Diop
export const IDENTITY = {
  name: "Mouhammed Diop",
  role: "Développeur Full Stack · Futur Ingénieur IA",
  oneliner:
    "Formé aux sciences dures avant de basculer dans l'informatique, je passe mon temps à modéliser, structurer et mettre en production des logiciels qui tiennent la charge.",
  email: "diopmouhammed1@gmail.com",
  phone: "+33 7 50 00 03 86",
  location: "Bonneuil-sur-Marne, 94380, France",
  city: "Paris / Bonneuil-sur-Marne (94)",
  linkedin: "https://www.linkedin.com/in/mouhammed-diop-659998200",
  linkedinLabel: "linkedin.com/in/mouhammed-diop-659998200",
  github: "https://github.com/Muhameid",
  githubLabel: "github.com/Muhameid",
  cv: "/cv-mouhammed-diop.pdf",
};

export const ASSETS = {
  miaam: "/images/miaam1.jpeg",
  voronoi: "/images/voronoi.png",
  cnam: "/images/cnam.jpg",
  globe: "/images/globe.jpg",
};

export const PRESENTATION = `Mon parcours se découpe en deux temps : un socle théorique en maths et physique à Dakar, puis une bascule vers l'informatique à l'IUT de Villetaneuse. Ce glissement des sciences dures vers le logiciel a façonné ma façon de travailler : avant d'écrire du code, j'ai besoin de comprendre la structure du problème, sinon j'ai l'impression de construire sur du sable.

Cette bascule se retrouve dans mes projets, mais aussi à côté. Sur Sagittarius-A-Engine, j'ai passé des soirées à optimiser les calculs vectoriels d'un moteur de dynamique stellaire codé from scratch. Le reste du temps, je lis Dostoïevski ou je traîne dans les collections du CNAM. Ce qui me plaît dans ces trois trucs, au fond, c'est la même chose : comprendre comment un système, qu'il soit mécanique, narratif ou logiciel, tient debout.

Cette curiosité, je l'ai retrouvée chez DEVEA. Repository Pattern, RBAC par site, pipelines CI/CD sous Jenkins : la partie la plus intéressante n'était pas la techno en elle-même, mais le fait de devoir faire tenir tout ça pour des techniciens dans plusieurs pays, avec des règles d'accès et d'isolation des données différentes selon les sites.

En septembre 2026, je commence le Cycle Ingénieur à l'ISEP en alternance (Architecture Logicielle, Data & IA), et je suis encore en recherche d'entreprise pour ça. Ce que je cherche : une équipe où on prend le temps de comprendre un problème avant de foncer dans le code.`;

export const SOFT_SKILLS = [
  "Capacité à tenir la complexité : logiciel SAV from scratch, déployé à l'international, en 6 mois",
  "Décision sous contrainte : pivot algorithme Voronoï artisanal → d3-delaunay en cours de SAE pour livrer dans les délais",
  "Collaboration concrète : 40+ pull requests sur Miaam, code reviews chez DEVEA, 150+ commits sans conflit majeur",
];

export const FORMATIONS = [
  {
    period: "Sept. 2026 – 2029",
    degree: "Cycle Ingénieur — Architecture Logicielle, Data & IA",
    school: "ISEP — Institut Supérieur d'Électronique de Paris",
    note: "Alternance 3j/2j · En recherche d'entreprise partenaire",
  },
  {
    period: "2023 – Juin 2026",
    degree: "BUT3 Informatique — Conception et Développement d'Applications",
    school: "IUT de Villetaneuse — Université Sorbonne Paris Nord",
  },
  {
    period: "2020 – 2022",
    degree: "DEUG — Mathématiques, Physique, Informatique",
    school: "Université Cheikh Anta Diop, Dakar, Sénégal",
  },
  {
    period: "2019 – 2020",
    degree: "Baccalauréat Scientifique",
    school: "Groupe Baobab, Dakar, Sénégal",
  },
];

export const EXPERIENCES = [
  {
    period: "Mars 2026 – Août 2026",
    title: "Développeur Full Stack — Logiciel SAV SaaS",
    company: "DEVEA SAS · 93240 Stains",
    badge: "Stage BUT3 · En cours",
    description:
      "Conception from scratch d'un logiciel de gestion SAV multi-sites déployé à l'international. Coordonne interventions de réparation entre centres SAV et techniciens sur plusieurs pays. Architecture Repository Pattern (Laravel 13), interface Vue 3 + Inertia.js + TypeScript, Docker, Jenkins CI/CD, RBAC par site via Laravel Fortify, stockage AWS S3.",
    tags: ["Laravel 13", "Vue 3", "TypeScript", "Docker", "Jenkins", "PostgreSQL", "AWS S3", "RBAC"],
  },
  {
    period: "Janvier – Mars 2025",
    title: "Développeur Full Stack — ERP Multi-tenant",
    company: "DEVEA SAS · 93240 Stains",
    description:
      "ERP complet pour organisations multi-sites Afrique : gestion utilisateurs, stocks, commandes inter-filiales, logs. Isolation stricte des données par entité, tests d'intégration, tableaux de bord Chart.js par filiale.",
    tags: ["Laravel 9", "PostgreSQL", "PHP", "Chart.js", "Multi-tenant"],
  },
  {
    period: "Mai – Juillet 2024",
    title: "Développeur Back-end — Plateforme E-learning",
    company: "Giancarlo Collantes · 75015 Paris",
    description:
      "Refonte back-end complète : inscription, espaces membres/admin, cours, sécurisation bcrypt, intégration PayPal, déploiement production.",
    tags: ["PHP 7+", "MySQL", "JavaScript", "Bootstrap", "PayPal API"],
  },
  {
    period: "Avril 2025 – Présent",
    title: "Employé Commercial",
    company: "Mon-Marché, Paris",
    minor: true,
  },
  {
    period: "Nov. 2023 – Mars 2025",
    title: "Équipier Polyvalent & Formateur",
    company: "Five Guys, Paris",
    minor: true,
  },
];

export const PROJECTS = [
  {
    id: "sav-devea",
    name: "Logiciel SAV DEVEA",
    badge: "En production · International",
    description:
      "Application SaaS de gestion des interventions SAV multi-sites déployée à l'international. Coordonne centres de réparation et techniciens terrain sur plusieurs pays. Architecture Repository Pattern, RBAC granulaire par site, interface Vue 3 dynamique, infrastructure Docker + CI/CD Jenkins, stockage AWS S3.",
    tags: ["Laravel 13", "Vue 3", "TypeScript", "Docker", "Jenkins", "PostgreSQL", "AWS S3"],
    link: "https://github.com/Muhameid",
    image: null,
    cover: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D1B08 100%)",
    private: true,
  },
  {
    id: "miaam",
    name: "Miaam — Recommandation Anti-Gaspillage",
    badge: "SAE S501 · Équipe de 6",
    description:
      "Application mobile Flutter de recommandation de recettes alignée sur l'ODD 12. Recommandation 100% locale, zéro serveur, zéro fuite de données. Algorithme SVD 27 dimensions sur 487 recettes et 2146 ingrédients, satisfaction utilisateur passée de 40% à 85%. Topologie culturelle de 100+ cuisines. 50ms de calcul, −50% batterie vs apps serveur.",
    contribution: "Algorithme de recommandation : SVD 27D, pondération temporelle, normalisation L2, similarité cosinus.",
    team: "6 développeurs · 150+ commits · 40+ PRs",
    tags: ["Flutter", "Dart", "Python", "SQLite", "SVD", "ML", "scipy"],
    link: "https://github.com/Muhameid",
    image: "/images/miaam1.jpeg",
  },
  {
    id: "voronoi",
    name: "Diagramme de Voronoï",
    badge: "SAE S601 · Équipe de 3",
    description:
      "Double implémentation : application web interactive JavaScript (d3-delaunay, Canvas 2D, drag-and-drop, export PNG) + CLI Python robuste (scipy, matplotlib, export SVG/PNG/JPG, tests Pytest complets). Architecture modulaire, Git workflow pro (9 PRs, 20 commits).",
    tags: ["JavaScript", "Python", "d3-delaunay", "scipy", "Canvas", "Jest", "Pytest"],
    link: "https://github.com/Adrian-Galindo/diagramme_Voronoi",
    image: "/images/voronoi.png",
  },
  {
    id: "sagittarius",
    name: "Sagittarius-A-Engine",
    badge: "Projet Personnel",
    description:
      "Moteur de simulation physique from scratch, zéro framework tiers. Simule 5000+ corps célestes en temps réel : algèbre matricielle, trajectoires de Kepler, lentilles gravitationnelles. Optimisation vectorielle NumPy.",
    tags: ["Python", "NumPy", "Physique computationnelle"],
    link: "https://github.com/Muhameid",
    image: "/images/voie-lactee.jpg",
  },
  {
    id: "france-academy",
    name: "France Academy",
    badge: "Projet Personnel",
    description:
      "Plateforme de gestion scolaire multi-tenant : isolation stricte des données par organisation. Repository Pattern + Eloquent ORM.",
    tags: ["Laravel 9", "PostgreSQL", "PHP", "Multi-tenant"],
    link: "https://github.com/Muhameid",
    image: "/images/france-academy.png",
  },
  {
    id: "chatapp",
    name: "ChatApp",
    badge: "Projet Personnel",
    description:
      "Architecture événementielle asynchrone via Ratchet (PHP/ReactPHP). WebSocket persistant, I/O non-bloquants.",
    tags: ["PHP", "ReactPHP", "WebSocket"],
    link: "https://github.com/Muhameid",
    image: "/images/chatapp.jpg",
  },
];

export const STACK = [
  {
    title: "DevOps & Infrastructure",
    items: ["Docker", "Jenkins", "CI/CD", "GitLab", "GitHub", "AWS S3", "Linux", "Bash"],
  },
  {
    title: "Architecture & Back-end",
    items: ["Laravel (9/13)", "PHP", "Java Spring Boot", "TypeScript", "Repository Pattern", "SOLID"],
  },
  {
    title: "Front-end & Mobile",
    items: ["Vue 3", "React", "Inertia.js", "Tailwind CSS", "Flutter", "HTML5", "CSS3"],
  },
  {
    title: "Data & IA",
    items: ["Python", "NumPy", "SciPy", "Matplotlib", "SVD", "Machine Learning"],
  },
  {
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Merise"],
  },
  {
    title: "Méthodologies",
    items: ["Agile Scrum/Kanban", "TDD", "Tests unitaires & intégration", "UML"],
  },
  {
    title: "Sécurité",
    items: ["RBAC", "Laravel Fortify", "bcrypt", "ANSSI ×4 (2024)"],
  },
];

export const COMPETENCES = [
  {
    name: "Réaliser un développement d'application",
    level: 4,
    levelLabel: "Avancé",
    proofs: "SAV DEVEA prod internationale · ERP Multi-tenant · Miaam Flutter/ML · Voronoï JS+Python",
    eval: "J'ai évolué de scripts PHP isolés vers des architectures Repository Pattern, pour des applications utilisées à l'international. Ce qui a changé : je stabilise l'architecture avant d'écrire la première ligne.",
  },
  {
    name: "Optimiser des applications informatiques",
    level: 3,
    levelLabel: "Intermédiaire-Avancé",
    proofs: "Miaam : −70% requêtes SQL, −50% batterie, SVD 50ms · Repository Pattern DEVEA",
    eval: "Miaam a marqué un tournant le jour où j'ai remplacé 15 000 requêtes par une seule jointure SQL. Depuis, l'optimisation est un réflexe, mais je dois encore systématiser le profiling.",
  },
  {
    name: "Collaborer au sein d'une équipe informatique",
    level: 4,
    levelLabel: "Avancé",
    proofs: "Miaam 6 devs · 150+ commits · 40+ PRs · Trello · Voronoï 3 devs · Stages DEVEA",
    eval: "La gestion de projets en groupe m'a montré que les désaccords techniques se règlent par la discussion, pas en réécrivant le code de quelqu'un sans en parler. Et documenter son travail, c'est respecter celui des autres.",
  },
];

export const TESTIMONIAL = {
  quote:
    "Ce qui m'a marqué chez Mouhammed, c'est qu'il est arrivé avec déjà des questions sur l'architecture existante, alors que c'est plutôt l'inverse avec un stagiaire d'habitude. Il a repris le back-end, documenté au fur et à mesure, et le module de paiement qu'il a posé fonctionne toujours sans qu'on ait eu à y retoucher.",
  author: "Giancarlo Collantes, développeur indépendant",
  context: "Tuteur de stage · Projet e-learning · Paris, Mai–Juillet 2024",
};

export const CERTIFICATIONS = [
  { name: "ANSSI — 4 Certifications Cybersécurité", year: "Fév. 2024", detail: "Scores : 88% · 86% · 84% · 84%" },
  { name: "BUT3 Informatique", year: "Juin 2026", detail: "IUT Villetaneuse — en cours" },
  { name: "Cycle Ingénieur ISEP", year: "Sept. 2026", detail: "Admission confirmée" },
];

export const NAV_LINKS = [
  { href: "#presentation", label: "Présentation" },
  { href: "#formations", label: "Formations" },
  { href: "#experiences", label: "Expériences" },
  { href: "#projets", label: "Projets" },
  { href: "#stack", label: "Compétences" },
  { href: "#but3", label: "Portfolio BUT3" },
  { href: "#contact", label: "Contact" },
];
