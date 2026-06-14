import React from "react";
import { FORMATIONS, EXPERIENCES } from "../../data/portfolio";
import { Reveal } from "../Reveal";

const TimelineItem = ({ period, title, subtitle, badge, description, tags, minor, index, last }) => (
  <Reveal>
    <div className="relative pl-10 md:pl-14 pb-14 group" data-testid={`timeline-item-${index}`}>
      {/* Line */}
      {!last && (
        <span className="absolute left-3 top-3 bottom-0 w-px timeline-line" aria-hidden />
      )}
      {/* Dot */}
      <span
        className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-copper-400 ring-4 ring-ink-950 transition-shadow group-hover:shadow-[0_0_18px_rgba(197,131,43,0.55)]"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline gap-3 mb-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] copper-text-strong">{period}</span>
        {badge && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300 border border-emerald-400/30 px-2 py-0.5">
            {badge}
          </span>
        )}
      </div>
      <h3 className={`font-display ${minor ? "text-lg" : "text-2xl md:text-3xl"} text-neutral-50 tracking-tight`}>
        {title}
      </h3>
      {subtitle && <p className="mt-1 text-neutral-400 text-sm md:text-base">{subtitle}</p>}
      {description && (
        <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">{description}</p>
      )}
      {tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>
      )}
    </div>
  </Reveal>
);

export const Formations = () => (
  <section id="formations" data-testid="formations-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>02 — Parcours académique</span></p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">Forma<span className="italic copper-text">tions.</span></h2>
      </Reveal>
      <div className="mt-16 max-w-4xl">
        {FORMATIONS.map((f, i) => (
          <TimelineItem
            key={i}
            index={i}
            last={i === FORMATIONS.length - 1}
            period={f.period}
            title={f.degree}
            subtitle={f.school}
            description={f.note}
          />
        ))}
      </div>
    </div>
  </section>
);

export const Experiences = () => (
  <section id="experiences" data-testid="experiences-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>03 — Expériences professionnelles</span></p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">Expé<span className="italic copper-text">riences.</span></h2>
      </Reveal>
      <div className="mt-16 max-w-4xl">
        {EXPERIENCES.map((e, i) => (
          <TimelineItem
            key={i}
            index={i}
            last={i === EXPERIENCES.length - 1}
            period={e.period}
            title={e.title}
            subtitle={e.company}
            badge={e.badge}
            description={e.description}
            tags={e.tags}
            minor={e.minor}
          />
        ))}
      </div>
    </div>
  </section>
);
