import React from "react";
import { STACK } from "../../data/portfolio";
import { Reveal } from "../Reveal";

export const Stack = () => (
  <section id="stack" data-testid="stack-section" className="relative py-28 md:py-36 border-t border-copper-400/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <Reveal>
        <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>05 — Compétences techniques</span></p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl tracking-tight text-neutral-50">
          Stack <span className="italic copper-text">technique.</span>
        </h2>
      </Reveal>

      {/* Marquee strip */}
      <Reveal delay={120}>
        <div className="mt-12 overflow-hidden border-y border-copper-400/15 py-5">
          <div className="marquee-track whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="inline-flex items-center gap-12 pr-12">
                {STACK.flatMap((s) => s.items).map((it, i) => (
                  <span key={`${dup}-${i}`} className="font-display italic text-2xl md:text-3xl text-neutral-300">
                    {it} <span className="copper-text-strong not-italic">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-copper-400/10">
        {STACK.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="bg-ink-950 p-8 h-full" data-testid={`stack-group-${i}`}>
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-xl md:text-2xl text-neutral-50">{group.title}</h3>
                <span className="font-mono text-[10px] copper-text uppercase tracking-[0.25em]">0{i + 1}</span>
              </div>
              <ul className="space-y-2">
                {group.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-neutral-300">
                    <span className="w-1 h-1 bg-copper-400 rounded-full" aria-hidden />
                    <span className="text-sm md:text-base">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Stack;
