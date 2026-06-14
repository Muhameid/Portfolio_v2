import React from "react";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { IDENTITY } from "../../data/portfolio";

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-end overflow-hidden grain"
    >
      {/* Soft radial copper glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 80% 10%, rgba(197,131,43,0.10) 0%, rgba(5,5,5,0) 60%), radial-gradient(60% 40% at 0% 100%, rgba(197,131,43,0.06) 0%, rgba(5,5,5,0) 60%)",
        }}
      />
      {/* Vertical rule */}
      <div className="hidden md:block absolute top-0 bottom-0 left-12 w-px bg-gradient-to-b from-transparent via-copper-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 w-full">
        {/* Status badge */}
        <div className="flex items-center gap-3 mb-10" data-testid="hero-status-badge">
          <span className="status-dot" />
          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-neutral-300">
            En recherche d'alternance — Cycle Ingénieur ISEP · Sept. 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-9">
            <p className="label-eyebrow mb-6">Portfolio · 2023 — 2026</p>
            <h1 className="font-display font-bold text-[14vw] md:text-[9rem] leading-[0.88] tracking-tighter text-neutral-50">
              Mouhammed
              <br />
              <span className="italic copper-text">Diop.</span>
            </h1>
            <p className="mt-8 font-display italic text-xl md:text-3xl text-neutral-300 max-w-3xl">
              {IDENTITY.role}
            </p>
            <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              {IDENTITY.oneliner}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 md:items-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Paris · 94 — Sénégal
            </p>
            <div className="flex md:justify-end gap-3 mt-2">
              <a href={IDENTITY.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="hero-github-link" className="text-neutral-400 hover:text-copper-200 transition-colors">
                <Github strokeWidth={1.4} className="w-5 h-5" />
              </a>
              <a href={IDENTITY.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="hero-linkedin-link" className="text-neutral-400 hover:text-copper-200 transition-colors">
                <Linkedin strokeWidth={1.4} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a href="#projets" className="cta-primary" data-testid="hero-cta-projects">
            Voir mes projets
            <ArrowDown className="w-4 h-4" strokeWidth={1.4} />
          </a>
          <a href={IDENTITY.cv} download className="cta-secondary" data-testid="hero-cta-cv">
            Télécharger mon CV
            <Download className="w-4 h-4" strokeWidth={1.4} />
          </a>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-copper-400/10 pt-6">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500">
            BUT3 Informatique · IUT Villetaneuse · Sorbonne Paris Nord
          </p>
          <a href="#presentation" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-copper-200 flex items-center gap-2" data-testid="hero-scroll-down">
            Défiler <ArrowDown className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
