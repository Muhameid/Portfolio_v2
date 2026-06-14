import React, { useEffect, useState } from "react";
import { NAV_LINKS, IDENTITY } from "../data/portfolio";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-copper-400/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" data-testid="navbar-brand" className="font-display text-lg md:text-xl tracking-tight text-neutral-100 hover:text-copper-200 transition-colors">
          Mouhammed <span className="italic copper-text">Diop</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[12px] font-mono uppercase tracking-[0.18em] text-neutral-400 hover:text-copper-200 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="navbar-contact-btn"
          className="hidden lg:inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.18em] text-copper-200 border border-copper-400/40 px-4 py-2 hover:bg-copper-400/10 transition-colors"
        >
          Discutons
        </a>

        <button
          data-testid="navbar-mobile-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-neutral-200 p-2"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-950/95 backdrop-blur-xl border-t border-copper-400/10">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-copper-200"
                data-testid={`nav-link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </a>
            ))}
            <a href={`mailto:${IDENTITY.email}`} className="font-mono text-xs uppercase tracking-[0.2em] copper-text">
              {IDENTITY.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
