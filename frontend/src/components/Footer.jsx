import React from "react";
import { IDENTITY } from "../data/portfolio";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-copper-400/15 py-12 mt-12">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="font-display text-2xl text-neutral-100">Mouhammed <span className="italic copper-text">Diop</span></p>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 mt-2">
          Portfolio · BUT3 Informatique · IUT Villetaneuse — 2026
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-2">
        <a href={`mailto:${IDENTITY.email}`} className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-300 hover:copper-text">
          {IDENTITY.email}
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">
          © {new Date().getFullYear()} — Mis à jour pour la soutenance BUT3.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
