// Portfolio data — Mouhammed Diop
export const IDENTITY = {
  name: "Mouhammed Diop",
  role: "Développeur Full Stack · Futur Ingénieur IA",
  oneliner:
    "Du back-end Laravel à la simulation 3D de 5000 étoiles — je construis des logiciels qui tiennent la complexité.",
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
  miaam:
    "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/4aykwgjy_miaam1.jpeg",
  voronoi:
    "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/088fozqg_Capture%20d%E2%80%99%C3%A9cran%202026-02-19%20205541.jpg",
  cnam:
    "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/h7f39huy_IMG_3720.jpg",
  globe:
    "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/irwyvaw5_IMG_5917.jpg",
};

export const PRESENTATION = `Un soir de 2024, j'ai passé quatre heures à implémenter les équations de Kepler depuis zéro — trajectoires stellaires, lentilles gravitationnelles, 5000 corps en temps réel. Personne ne me l'avait demandé. C'est peut-être la meilleure façon de vous dire qui je suis.

Je viens de Dakar. DEUG en Maths-Physique-Informatique à Cheikh Anta Diop, puis aller simple pour Paris et BUT Informatique à Villetaneuse. Ce bagage scientifique, je le retrouve dans tout ce que je construis : je modélise avant d'ouvrir un éditeur, je cherche pourquoi quelque chose tient avant de l'utiliser.

Chez DEVEA, j'ai passé deux jours sur un schéma de base de données avant d'écrire la première migration. Sur Miaam, j'ai réécrit l'algorithme de recommandation parce que la V1 marchait — mais ne me satisfaisait pas. Sur le Voronoï, j'ai convaincu l'équipe d'abandonner notre implémentation artisanale en cours de route. Décision difficile. Bonne décision.

En dehors de ça : Dostoïevski, les musées des sciences, le foot. Et en septembre 2026, le Cycle Ingénieur ISEP en alternance — Architecture Logicielle, Data & IA. Je cherche une entreprise qui construit des choses qui durent.`;

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
  },
  {
    id: "miaam",
    name: "Miaam — Recommandation Anti-Gaspillage",
    badge: "SAE S501 · Équipe de 6",
    description:
      "Application mobile Flutter de recommandation de recettes alignée sur l'ODD 12. Recommandation 100% locale, zéro serveur, zéro fuite de données. Algorithme SVD 27 dimensions sur 487 recettes et 2146 ingrédients — satisfaction utilisateur 40% → 85%. Topologie culturelle de 100+ cuisines. 50ms de calcul, −50% batterie vs apps serveur.",
    contribution: "Algorithme de recommandation — SVD 27D, pondération temporelle, normalisation L2, similarité cosinus.",
    team: "6 développeurs · 150+ commits · 40+ PRs",
    tags: ["Flutter", "Dart", "Python", "SQLite", "SVD", "ML", "scipy"],
    link: "https://github.com/Muhameid",
    image: "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/4aykwgjy_miaam1.jpeg",
  },
  {
    id: "voronoi",
    name: "Diagramme de Voronoï",
    badge: "SAE S601 · Équipe de 3",
    description:
      "Double implémentation : application web interactive JavaScript (d3-delaunay, Canvas 2D, drag-and-drop, export PNG) + CLI Python robuste (scipy, matplotlib, export SVG/PNG/JPG, tests Pytest complets). Architecture modulaire, Git workflow pro (9 PRs, 20 commits).",
    tags: ["JavaScript", "Python", "d3-delaunay", "scipy", "Canvas", "Jest", "Pytest"],
    link: "https://github.com/Adrian-Galindo/diagramme_Voronoi",
    image: "https://customer-assets.emergentagent.com/job_sagittarius-engine/artifacts/088fozqg_Capture%20d%E2%80%99%C3%A9cran%202026-02-19%20205541.jpg",
  },
  {
    id: "sagittarius",
    name: "Sagittarius-A-Engine",
    badge: "Projet Personnel",
    description:
      "Moteur de simulation physique from scratch, zéro framework tiers. Simule 5000+ corps célestes en temps réel : algèbre matricielle, trajectoires de Kepler, lentilles gravitationnelles. Optimisation vectorielle NumPy.",
    tags: ["Python", "NumPy", "Physique computationnelle"],
    link: "https://github.com/Muhameid",
    image: null,
    cover: "radial-gradient(circle at 30% 30%, #2D1B08 0%, #050505 70%)",
  },
  {
    id: "france-academy",
    name: "France Academy",
    badge: "Projet Personnel",
    description:
      "Plateforme de gestion scolaire multi-tenant : isolation stricte des données par organisation. Repository Pattern + Eloquent ORM.",
    tags: ["Laravel 9", "PostgreSQL", "PHP", "Multi-tenant"],
    link: "https://github.com/Muhameid",
    image: null,
    cover: "linear-gradient(160deg, #0A0A0A 0%, #1A0F05 100%)",
  },
  {
    id: "chatapp",
    name: "ChatApp",
    badge: "Projet Personnel",
    description:
      "Architecture événementielle asynchrone via Ratchet (PHP/ReactPHP). WebSocket persistant, I/O non-bloquants.",
    tags: ["PHP", "ReactPHP", "WebSocket"],
    link: "https://github.com/Muhameid",
    image: null,
    cover: "linear-gradient(135deg, #0A0A0A 0%, #161616 60%, #1F1208 100%)",
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
    eval: "J'ai évolué de scripts PHP à des architectures Repository Pattern en prod internationale. Ce qui m'a changé : comprendre que l'architecture se décide avant le code.",
  },
  {
    name: "Optimiser des applications informatiques",
    level: 3,
    levelLabel: "Intermédiaire-Avancé",
    proofs: "Miaam : −70% requêtes SQL, −50% batterie, SVD 50ms · Repository Pattern DEVEA",
    eval: "Depuis Miaam — 15 000 requêtes là où une JOIN suffisait — l'optimisation est devenue un réflexe. J'ai encore à progresser sur le profiling systématique.",
  },
  {
    name: "Collaborer au sein d'une équipe informatique",
    level: 4,
    levelLabel: "Avancé",
    proofs: "Miaam 6 devs · 150+ commits · 40+ PRs · Trello · Voronoï 3 devs · Stages DEVEA",
    eval: "J'ai appris que les conflits techniques se règlent par la communication avant le code. Et que documenter son travail, c'est respecter ses coéquipiers.",
  },
];

export const TESTIMONIAL = {
  quote:
    "Mouhammed est arrivé avec deux jours d'avance et une liste de questions sur l'architecture existante. Je n'avais pas l'habitude de ça avec des stagiaires. Il a refait le back-end proprement, documenté ce qu'il touchait, et le module de paiement qu'il a intégré tourne toujours sans accroc. Si j'ai un autre projet, je le rappelle.",
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
