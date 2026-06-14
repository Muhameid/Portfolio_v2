import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIAL, CERTIFICATIONS } from "../../data/portfolio";
import { Reveal } from "../Reveal";

export const Temoignage = () => (
  <section id="temoignage" data-testid="temoignage-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>07 — Témoignage</span></p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
          Ils ont travaillé <span className="italic copper-text">avec moi.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <figure className="mt-16 hairline-border p-10 md:p-16 bg-ink-900/40 grain relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-copper-400/40" strokeWidth={1} />
          <blockquote className="font-display italic text-2xl md:text-3xl lg:text-4xl text-neutral-100 leading-snug">
            « {TESTIMONIAL.quote} »
          </blockquote>
          <figcaption className="mt-10 pt-6 border-t border-copper-400/15">
            <p className="font-display text-lg text-copper-200">— {TESTIMONIAL.author}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">{TESTIMONIAL.context}</p>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);

export const Certifications = () => (
  <section id="certifications" data-testid="certifications-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>08 — Distinctions</span></p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
          Certifi<span className="italic copper-text">cations.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-copper-400/10">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <div className="bg-ink-950 p-8 h-full" data-testid={`cert-${i}`}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] copper-text-strong">{c.year}</p>
              <h3 className="mt-4 font-display text-2xl text-neutral-50">{c.name}</h3>
              <p className="mt-3 text-neutral-400 text-sm">{c.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
