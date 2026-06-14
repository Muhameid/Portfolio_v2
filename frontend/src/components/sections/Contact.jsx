import React, { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { IDENTITY } from "../../data/portfolio";
import { Reveal } from "../Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "error", msg: "Tous les champs sont requis." });
      return;
    }
    setStatus({ state: "loading", msg: "Envoi en cours…" });
    try {
      await axios.post(`${API}/contact`, form, { timeout: 15000 });
      setStatus({ state: "success", msg: "Message envoyé. Je reviens vers vous très vite." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
      setStatus({ state: "error", msg: detail });
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-28 md:py-40 border-t border-copper-400/10 grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="section-eyebrow font-mono text-[11px] uppercase tracking-[0.3em] copper-text-strong"><span>09 — Contact</span></p>
          <h2 className="mt-5 font-display text-5xl md:text-7xl tracking-tight text-neutral-50">
            Travaillons <span className="italic copper-text">ensemble.</span>
          </h2>
          <p className="mt-6 font-display italic text-lg md:text-2xl text-neutral-300 max-w-3xl">
            En recherche d'alternance — Cycle Ingénieur ISEP · Architecture Logicielle, Data & IA · Septembre 2026.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Coordonnées */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] copper-text-strong mb-4">Coordonnées</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-0.5 copper-text" strokeWidth={1.4} />
                  <a href={`mailto:${IDENTITY.email}`} className="font-display text-lg md:text-xl text-neutral-100 hover:copper-text break-all" data-testid="contact-email-link">{IDENTITY.email}</a>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-0.5 copper-text" strokeWidth={1.4} />
                  <a href={`tel:${IDENTITY.phone.replace(/\s/g, "")}`} className="font-display text-lg md:text-xl text-neutral-100 hover:copper-text" data-testid="contact-phone-link">{IDENTITY.phone}</a>
                </li>
                <li className="flex items-start gap-4">
                  <Linkedin className="w-5 h-5 mt-0.5 copper-text" strokeWidth={1.4} />
                  <a href={IDENTITY.linkedin} target="_blank" rel="noreferrer" className="font-display text-lg md:text-xl text-neutral-100 hover:copper-text break-all" data-testid="contact-linkedin-link">{IDENTITY.linkedinLabel}</a>
                </li>
                <li className="flex items-start gap-4">
                  <Github className="w-5 h-5 mt-0.5 copper-text" strokeWidth={1.4} />
                  <a href={IDENTITY.github} target="_blank" rel="noreferrer" className="font-display text-lg md:text-xl text-neutral-100 hover:copper-text" data-testid="contact-github-link">{IDENTITY.githubLabel}</a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 copper-text" strokeWidth={1.4} />
                  <span className="font-display text-lg md:text-xl text-neutral-100">{IDENTITY.city}</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <a href={IDENTITY.cv} download className="cta-secondary mt-4" data-testid="contact-cv-download">
                <Download className="w-4 h-4" strokeWidth={1.4} /> Télécharger mon CV (PDF)
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} data-testid="contact-form" className="space-y-8">
                <div>
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.3em] copper-text-strong block mb-2">Nom</label>
                  <input
                    id="name"
                    type="text"
                    className="editorial-input"
                    placeholder="Votre nom complet"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-testid="contact-input-name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.3em] copper-text-strong block mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="editorial-input"
                    placeholder="vous@entreprise.fr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    data-testid="contact-input-email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.3em] copper-text-strong block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="editorial-input resize-none"
                    placeholder="Parlez-moi de votre projet, de votre équipe, du rythme d'alternance recherché…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="contact-input-message"
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="cta-primary disabled:opacity-60"
                    data-testid="contact-submit"
                  >
                    {status.state === "loading" ? "Envoi…" : "Envoyer le message"}
                    <Send className="w-4 h-4" strokeWidth={1.4} />
                  </button>
                  <a href={`mailto:${IDENTITY.email}`} className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400 hover:copper-text flex items-center gap-2">
                    Ou par email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {status.state !== "idle" && (
                  <p
                    data-testid="contact-status"
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                      status.state === "success" ? "text-emerald-300" : status.state === "error" ? "text-red-300" : "text-neutral-400"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
