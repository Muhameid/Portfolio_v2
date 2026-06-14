import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import { Reveal } from "../Reveal";

const ProjectCard = ({ project, index }) => {
  const big = index === 0 || index === 2; // make first and Voronoi span 2 cols
  return (
    <Reveal delay={index * 60} className={big ? "md:col-span-2" : ""}>
      <article
        className="group h-full hairline-border hairline-hover bg-ink-900/40 transition-all duration-500 hover:-translate-y-1 flex flex-col overflow-hidden"
        data-testid={`project-card-${project.id}`}
      >
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-copper-400/10 bg-ink-900">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              loading="lazy"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: project.cover || "linear-gradient(135deg,#0A0A0A,#1A1A1A)" }}
            >
              <p className="font-display italic text-5xl md:text-7xl copper-text opacity-30">
                {project.name.split(" ")[0]}
              </p>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] bg-ink-950/80 text-copper-200 border border-copper-400/30 px-3 py-1">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-7 md:p-8 flex-1 flex flex-col">
          <h3 className="font-display text-2xl md:text-3xl text-neutral-50 tracking-tight">{project.name}</h3>
          <p className="mt-4 text-neutral-300 leading-relaxed text-sm md:text-base">{project.description}</p>

          {project.contribution && (
            <p className="mt-4 text-sm text-copper-200 border-l-2 border-copper-400/40 pl-4 italic">
              Ma contribution : {project.contribution}
            </p>
          )}
          {project.team && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Équipe · {project.team}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>

          <div className="mt-7 pt-5 border-t border-copper-400/10 flex items-center justify-between">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-copper-200 hover:text-copper-100"
              data-testid={`project-link-${project.id}`}
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.4} /> Voir le code
            </a>
            <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-copper-200 transition-colors" strokeWidth={1.4} />
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export const Projets = () => (
  <section id="projets" data-testid="projets-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>04 — Travaux</span></p>
        <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
            Pro<span className="italic copper-text">jets.</span>
          </h2>
          <p className="font-display italic text-lg md:text-2xl text-neutral-400 max-w-md">
            Des systèmes pensés pour durer.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projets;
