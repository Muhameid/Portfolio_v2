import React from "react";
import { PRESENTATION, SOFT_SKILLS, ASSETS } from "../../data/portfolio";
import { Monogram } from "../Monogram";
import { Reveal } from "../Reveal";

const SectionTitle = ({ eyebrow, title, italic }) => (
  <Reveal>
    <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong">
      <span>{eyebrow}</span>
    </p>
    <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
      {title} <span className="italic copper-text">{italic}</span>
    </h2>
  </Reveal>
);

export const Presentation = () => {
  const paragraphs = PRESENTATION.split("\n\n");
  return (
    <section id="presentation" data-testid="presentation-section" className="relative py-28 md:py-40 grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle eyebrow="01 — À propos" title="Qui suis-" italic="je ?" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={`leading-relaxed ${i === 0 ? "font-display italic text-xl md:text-2xl text-neutral-200" : "text-neutral-300 text-base md:text-lg"}`}>
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={120}>
              <div className="mt-10 pt-8 border-t border-copper-400/15">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] copper-text-strong mb-4">Langues</p>
                <p className="text-neutral-200">Français <span className="text-neutral-500">(natif)</span> · Anglais <span className="text-neutral-500">B2</span></p>
              </div>
            </Reveal>
          </div>

          {/* Visual grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[640px]">
              <div className="col-span-4 row-span-3">
                <div className="w-full h-full hairline-border overflow-hidden">
                  <img src={ASSETS.portrait} alt="Mouhammed Diop" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
              <div className="col-span-2 row-span-2">
                <div className="w-full h-full hairline-border overflow-hidden">
                  <img src={ASSETS.cnam} alt="CNAM Paris" className="w-full h-full object-cover opacity-90" />
                </div>
              </div>
              <div className="col-span-2 row-span-1 flex items-center justify-center hairline-border bg-ink-900">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] copper-text">Dakar → Paris</p>
              </div>
              <div className="col-span-2 row-span-3"><Monogram variant={1} /></div>
              <div className="col-span-2 row-span-2">
                <div className="w-full h-full hairline-border overflow-hidden">
                  <img src={ASSETS.globe} alt="Globe scientifique" className="w-full h-full object-cover opacity-90" />
                </div>
              </div>
              <div className="col-span-2 row-span-1 flex items-center justify-center hairline-border bg-ink-900">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] copper-text">SVD · Kepler</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOFT_SKILLS.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full p-7 hairline-border hairline-hover bg-ink-900/40 transition-all duration-500" data-testid={`soft-skill-${i}`}>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] copper-text-strong mb-4">0{i + 1}</p>
                <p className="font-display text-lg md:text-xl leading-snug text-neutral-100">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentation;
