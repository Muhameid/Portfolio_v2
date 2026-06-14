import React, { useState } from "react";
import { ASSETS, COMPETENCES } from "../../data/portfolio";
import { Reveal } from "../Reveal";

const TABS = [
  { id: "poursuite", label: "7.1 Poursuite d'études" },
  { id: "miaam", label: "7.2 Bilan SAE S5 — Miaam" },
  { id: "voronoi", label: "7.3 Bilan SAE S6 — Voronoï" },
  { id: "competences", label: "7.4 Auto-évaluation" },
  { id: "devea", label: "7.5 Bilan Stage — DEVEA" },
  { id: "fierte", label: "7.6 Plus grande fierté" },
  { id: "monde", label: "7.7 Monde professionnel" },
  { id: "culture", label: "7.8 Passeport culturel" },
  { id: "objectifs", label: "7.9 Objectifs" },
];

const Stars = ({ n }) => (
  <span className="font-mono text-copper-300 tracking-[0.15em]">
    {"★".repeat(n)}<span className="text-neutral-700">{"★".repeat(5 - n)}</span>
  </span>
);

const Caption = ({ src, alt, caption }) => (
  <figure className="my-6">
    <div className="hairline-border overflow-hidden bg-ink-900">
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
    <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">{caption}</figcaption>
  </figure>
);

const Body = ({ children }) => (
  <div className="space-y-5 text-neutral-300 leading-relaxed text-base md:text-lg">{children}</div>
);

const TabPanels = {
  poursuite: (
    <Body>
      <p>À l'issue de mon BUT3, j'intègre le <span className="copper-text">Cycle Ingénieur d'ISEP</span> en alternance (3j/2j), spécialisation <em className="font-display">Architecture Logicielle, Data & IA</em>. Je suis en recherche active d'entreprise partenaire pour septembre 2026.</p>
      <p>Ce choix prolonge naturellement mon parcours : Docker, Jenkins, AWS, Vue 3, Laravel 13, Python ML — autant de domaines que le Cycle Ingénieur approfondira. L'alternance est indispensable pour moi : apprendre en construisant de vrais systèmes, pas uniquement en cours.</p>
    </Body>
  ),
  miaam: (
    <Body>
      <Caption src={ASSETS.miaam} alt="Miaam mobile app" caption="Interface Miaam — mode Découverte, Flutter Android" />
      <p>Miaam est mon projet académique le plus ambitieux. En équipe de 6, nous avons conçu une application mobile Flutter de recommandation de recettes anti-gaspillage alignée sur l'ODD 12.</p>
      <p>Mon rôle : la brique algorithme. La V1 basée sur une topologie simple des cuisines fonctionnait, mais était rigide. J'ai proposé la migration vers une approche vectorielle — <span className="copper-text">SVD 27 dimensions</span>, similarité cosinus, pondération temporelle des favoris. Résultat : satisfaction utilisateur de 40% à 85%.</p>
      <p>Ce que j'ai appris : justifier ses choix techniques à une équipe est aussi difficile que les implémenter. Pourquoi 27 dimensions ? Pourquoi la normalisation L2 ? J'ai dû répondre à ces questions devant 5 coéquipiers avant d'écrire une ligne.</p>
      <p>La plus grande impasse : la fonctionnalité de saisie directe d'ingrédients n'a pas pu être livrée dans les délais. Pivot vers un système de préférences sauvegardées — décision collective difficile, mais la bonne.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-copper-400/10">
        {[
          ["487", "recettes"],
          ["2 146", "ingrédients"],
          ["100+", "cuisines"],
          ["50ms", "calcul"],
          ["−50%", "batterie"],
          ["150+", "commits"],
          ["40+", "PRs"],
          ["40 → 85%", "satisfaction"],
        ].map(([n, l]) => (
          <div key={l} className="bg-ink-950 p-5">
            <p className="font-display text-2xl md:text-3xl copper-text">{n}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 mt-1">{l}</p>
          </div>
        ))}
      </div>
    </Body>
  ),
  voronoi: (
    <Body>
      <Caption src={ASSETS.voronoi} alt="Voronoi canvas" caption="Rendu Canvas 2D — Phase 1 JavaScript, régions colorées" />
      <p>Double implémentation d'un générateur de diagrammes de Voronoï, équipe de 3.</p>
      <p>Le moment le plus formateur : notre implémentation artisanale a échoué après plusieurs jours. J'ai proposé de pivoter vers <span className="copper-text">d3-delaunay</span>. Ce n'était pas abandonner — c'était choisir le bon outil au bon moment.</p>
      <p>Sur la Phase 2 Python, les tests unitaires ont rattrapé deux bugs de parsing que la revue de code avait manqués. Depuis, je teste par réflexe.</p>
    </Body>
  ),
  competences: (
    <div>
      <p className="font-display italic text-lg md:text-xl text-neutral-300 max-w-3xl">
        Auto-évaluation honnête des trois compétences du référentiel BUT Informatique, avec preuves concrètes.
      </p>
      <div className="mt-8 hairline-border overflow-x-auto">
        <table className="w-full border-collapse text-left" data-testid="competences-table">
          <thead>
            <tr className="border-b border-copper-400/20">
              <th className="p-5 font-mono text-[10px] uppercase tracking-[0.22em] copper-text-strong align-top">Compétence</th>
              <th className="p-5 font-mono text-[10px] uppercase tracking-[0.22em] copper-text-strong align-top">Niveau</th>
              <th className="p-5 font-mono text-[10px] uppercase tracking-[0.22em] copper-text-strong align-top">Preuves clés</th>
              <th className="p-5 font-mono text-[10px] uppercase tracking-[0.22em] copper-text-strong align-top">Auto-évaluation</th>
            </tr>
          </thead>
          <tbody>
            {COMPETENCES.map((c) => (
              <tr key={c.name} className="border-b border-copper-400/10 align-top">
                <td className="p-5 font-display text-lg text-neutral-50 max-w-xs">{c.name}</td>
                <td className="p-5 whitespace-nowrap">
                  <Stars n={c.level} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400 mt-2">{c.levelLabel}</p>
                </td>
                <td className="p-5 text-sm text-neutral-300 leading-relaxed max-w-md">{c.proofs}</td>
                <td className="p-5 italic text-sm text-neutral-300 leading-relaxed max-w-md">« {c.eval} »</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  devea: (
    <Body>
      <p>Six mois pour concevoir from scratch un logiciel SAV multi-sites déployé à l'international. C'est la mission la plus exigeante que j'aie conduite.</p>
      <p>Le logiciel coordonne des centres de réparation et des techniciens terrain sur plusieurs pays : suivi des interventions, gestion des pièces, dossiers clients — avec isolation stricte des données entre sites.</p>
      <p><span className="copper-text">Défis techniques</span> : modélisation PostgreSQL complexe, RBAC granulaire par site, Docker, Jenkins, interface Vue 3 + TypeScript pensée pour des techniciens terrain.</p>
      <p>Ce que j'ai découvert de moi-même : quand le périmètre s'est élargi en cours de route, j'ai découpé en livrables itératifs plutôt que de paniquer. J'ai aussi compris que demander de l'aide tôt est une compétence, pas une faiblesse.</p>
      <p>Culture d'entreprise : réunions de suivi hebdomadaires, code reviews systématiques, documentation exigée. Des pratiques que je ne veux plus quitter.</p>
    </Body>
  ),
  fierte: (
    <Body>
      <p className="font-display italic text-2xl md:text-3xl text-neutral-100"><span className="copper-text">Sagittarius-A-Engine.</span> Pas parce qu'il est le plus utile professionnellement. Parce qu'il est le plus honnête.</p>
      <p>Simuler 5000+ corps célestes en temps réel, from scratch, sans framework — personne ne me l'a demandé. Je l'ai fait parce que les équations de Kepler m'intéressaient et que je voulais voir jusqu'où j'allais.</p>
      <p>Ce projet me rappelle pourquoi j'ai choisi ce chemin.</p>
    </Body>
  ),
  monde: (
    <Body>
      <p>Ce qui m'a le plus surpris : la <span className="copper-text">proportion de temps passée à communiquer</span>. Une réunion de 30 minutes avec le client a débloqué une semaine de développement. La communication technique est une compétence à part entière.</p>
      <p><strong className="text-neutral-100">Gestion des blocages :</strong> lors du stage ERP, une fonctionnalité critique s'est révélée impossible dans l'architecture initiale. J'ai proposé une refonte partielle du schéma — difficile à présenter en milieu de projet, mais nécessaire.</p>
      <p><strong className="text-neutral-100">Code reviews :</strong> au début, recevoir des remarques sur mon code m'était inconfortable. Maintenant je les sollicite.</p>
      <p><strong className="text-neutral-100">Outils mobilisés :</strong> GitLab branches feature · Docker environnement unifié · Jenkins CI/CD · Slack · Notion documentation.</p>
    </Body>
  ),
  culture: (
    <Body>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Caption src={ASSETS.cnam} alt="CNAM Paris" caption="Visite du CNAM Paris — Conservatoire National des Arts et Métiers" />
        <Caption src={ASSETS.globe} alt="Globe scientifique CNAM" caption="Collection d'instruments scientifiques historiques — CNAM Paris" />
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] copper-text-strong mb-3">Veille technologique</p>
        <ul className="space-y-2">
          <li>· Hacker News (quotidien)</li>
          <li>· Papers arXiv — ML, systèmes distribués</li>
          <li>· Changelogs Laravel, Vue.js, Flutter</li>
          <li>· Suivi 2025–2026 : Laravel 13, Vue 3.4+, LLM appliqués (RAG, agents)</li>
          <li>· 4 certifications ANSSI — scores 84–88% (2024)</li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] copper-text-strong mb-3">Dimension internationale</p>
        <p className="italic font-display text-lg">« Mon parcours commence à Dakar. Le logiciel SAV que je développe chez DEVEA est déployé dans des pays africains et européens. Je connais les deux côtés. »</p>
      </div>

      <div className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] copper-text-strong mb-3">Centres d'intérêt</p>
        <p>Philosophie russe · Musées des sciences · Football · IA & Cybersécurité</p>
      </div>
    </Body>
  ),
  objectifs: (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Court terme",
          year: "2026",
          items: [
            "Livrer le logiciel SAV DEVEA complet et documenté",
            "Trouver une entreprise partenaire pour l'alternance ISEP",
            "Obtenir mon BUT3 Informatique",
          ],
        },
        {
          title: "Moyen terme",
          year: "2027 — 2028",
          items: [
            "Architectures distribuées et ML appliqué",
            "Certifications AWS (Cloud Practitioner → Solutions Architect)",
            "Contribuer à des projets open source",
            "Maîtriser LLM appliqués (RAG, fine-tuning)",
          ],
        },
        {
          title: "Long terme",
          year: "2029 +",
          items: [
            "Ingénieur senior en systèmes d'IA robustes et scalables",
            "Créer un produit tech à impact positif (éducation ou santé)",
            "Transmettre : mentoring, open source, enseignement",
          ],
        },
      ].map((col, i) => (
        <div key={col.title} className="hairline-border p-7 bg-ink-900/40" data-testid={`objectifs-col-${i}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] copper-text-strong">{col.year}</p>
          <h4 className="font-display text-2xl text-neutral-50 mt-2">{col.title}</h4>
          <ul className="mt-5 space-y-3 text-neutral-300">
            {col.items.map((it) => (
              <li key={it} className="flex gap-3"><span className="copper-text-strong">→</span><span>{it}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ),
};

export const Portfolio = () => {
  const [active, setActive] = useState(TABS[0].id);
  return (
    <section id="but3" data-testid="but3-section" className="relative py-28 md:py-36 border-t border-copper-400/10 grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>06 — Portfolio académique</span></p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
            Portfolio <span className="italic copper-text">BUT3.</span>
          </h2>
          <p className="mt-3 font-display italic text-neutral-400 text-lg md:text-2xl">
            IUT Villetaneuse · Sorbonne Paris Nord · Informatique · 2023–2026
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Tabs side */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-1 border-l border-copper-400/15">
              {TABS.map((t) => {
                const isActive = t.id === active;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    data-testid={`but3-tab-${t.id}`}
                    className={`text-left pl-5 pr-3 py-3 font-mono text-[11px] uppercase tracking-[0.22em] border-l-2 -ml-px transition-all ${
                      isActive
                        ? "border-copper-400 text-copper-100 bg-copper-400/5"
                        : "border-transparent text-neutral-500 hover:text-copper-200"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Panel */}
          <div className="lg:col-span-8" data-testid="but3-panel">
            <article key={active} className="animate-[fade-up_0.5s_ease-out_forwards]">
              {TabPanels[active]}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
