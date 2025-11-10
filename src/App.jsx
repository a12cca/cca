import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// -------------------- Minimal Icon Set
const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Check = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Film = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 5v14M17 5v14M3 9h18M3 15h18" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
const Music = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M9 18a3 3 0 11-.001-6.001A3 3 0 019 18zm0 0V6l10-2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const Spark = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const Globe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// -------------------- Motion helpers
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl px-4"
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">{eyebrow}</p>
      )}
      {title && (
        <h2 className="mb-6 text-3xl font-semibold leading-tight text-black sm:text-4xl">{title}</h2>
      )}
      <div className="text-neutral-700">{children}</div>
    </motion.div>
  </section>
);

// -------------------- Sticky Nav (ultra minimal)
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition ${
      scrolled ? "backdrop-blur bg-white/70 border-b border-neutral-200" : "bg-transparent"
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-[17px] font-semibold tracking-tight text-black">CCA<span className="text-neutral-400">.vc</span></a>
        <div className="hidden gap-7 md:flex">
          <a href="#services" className="nav-link">What we fund</a>
          <a href="#case" className="nav-link">Case studies</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-neutral-300 px-4 py-2 text-[13px] font-medium text-black transition hover:bg-black hover:text-white"
        >
          Start a Request
        </a>
      </div>
      <style>{`
  .nav-link { font-size: 0.9rem; font-weight: 500; color: #525252; text-decoration: none; }
  .nav-link:hover { color: #000; }
  html { scroll-behavior: smooth; }
`}</style>
    </nav>
  );
};

// -------------------- Hero (creator-first)
const Hero = () => (
  <section id="home" className="relative isolate pt-28 sm:pt-32">
    <div className="mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="mb-4 text-4xl font-semibold leading-tight text-black sm:text-5xl">
              Funding for creators.
              <span className="block text-neutral-600">Fast, flexible, rights‑aware.</span>
            </h1>
            <p className="mb-8 max-w-xl text-[15px] text-neutral-700">
              Creative Capital Atelier provides short‑term financing for film, TV, music and media companies—structured around
              real contracts and delivery. We bridge the gap between hand‑off and payment, so you can keep creating.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Start a funding request <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-black hover:bg-neutral-50">
                What we fund
              </a>
            </div>
            <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-[13px] text-neutral-800 sm:grid-cols-4">
              {["Film & TV", "Post & VFX", "Music & Catalogs", "Distribution"].map((k) => (
                <li key={k} className="rounded-2xl border border-neutral-200 bg-white px-3 py-2 text-center">{k}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-[13px] uppercase tracking-widest text-neutral-500">Common uses</p>
              <ul className="mt-3 space-y-2 text-[15px] text-neutral-900">
                {[
                  "Advance on contracted receivables",
                  "Gap & bridge during pre‑sales",
                  "Distribution & licensing advances",
                  "Royalty‑backed facilities",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> {t}</li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-neutral-200 p-4 text-[13px] text-neutral-600">
                For investors: We occasionally speak with qualified LPs. This site is informational only and not an offer or
                solicitation of securities.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// -------------------- What we fund (creator language)
const Services = () => (
  <Section id="services" eyebrow="What we fund" title="Built for production realities">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card icon={<Film className="h-6 w-6"/>} title="Production & Post" body="Financing tied to schedules and deliverables—so crews get paid and timelines hold."/>
      <Card icon={<Spark className="h-6 w-6"/>} title="VFX & Animation" body="Milestone‑based advances against studio or streamer work orders."/>
      <Card icon={<Globe className="h-6 w-6"/>} title="Distribution & Licensing" body="Contract‑backed funding for MGs, pre‑sales and fulfillment."/>
      <Card icon={<Music className="h-6 w-6"/>} title="Music & Catalogs" body="Royalty‑aware facilities for catalogs, publishing and sync."/>
    </div>
    <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6">
      <h3 className="mb-2 text-base font-medium text-black">Eligibility snapshot</h3>
      <ul className="grid gap-2 sm:grid-cols-2 text-[15px] text-neutral-800">
        <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Signed or near‑final contracts (POs, LOAs, licensing deals)</li>
        <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Clear delivery milestones and payment schedules</li>
        <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Credible counterparties (studios, streamers, distributors)</li>
        <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Rights and collateral assignable where applicable</li>
      </ul>
    </div>
  </Section>
);

const Card = ({ icon, title, body }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
  >
    <div className="mb-3 inline-flex rounded-xl bg-neutral-100 p-2 text-black">{icon}</div>
    <h3 className="mb-1 text-lg font-medium text-black">{title}</h3>
    <p className="text-neutral-700">{body}</p>
  </motion.div>
);

// -------------------- Case Studies (compact)
const CaseStudies = () => (
  <Section id="case" eyebrow="Case studies" title="Examples of how we help">
    <div className="grid gap-6 lg:grid-cols-3">
      <CaseCard
        tag="Film / Distribution"
        title="Indie feature—receivables advance"
        bullets={[
          "Challenge: Payment only at delivery; vendors needed cash mid‑shoot.",
          "Structure: Advance against signed distribution receivable; milestone draws.",
          "Outcome: On‑time wrap; receivable collected at delivery, facility repaid.",
        ]}
      />
      <CaseCard
        tag="Post & VFX"
        title="Vendor milestone finance"
        bullets={[
          "Challenge: 120‑day terms from streamer created payroll gaps.",
          "Structure: Work‑order‑tied facility with assignment of proceeds.",
          "Outcome: Smooth payroll; automatic sweep at counterparty payment.",
        ]}
      />
      <CaseCard
        tag="Music / Catalog"
        title="Royalty bridge for sync pipeline"
        bullets={[
          "Challenge: Lag between licensing wins and royalty distribution.",
          "Structure: Royalty‑aware line backed by PRO statements and contracts.",
          "Outcome: Continued A&R; line revolved as royalties posted.",
        ]}
      />
    </div>
  </Section>
);

const CaseCard = ({ tag, title, bullets }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6">
    <div className="mb-2 text-xs uppercase tracking-widest text-neutral-500">{tag}</div>
    <h3 className="mb-3 text-lg font-medium text-black">{title}</h3>
    <ul className="space-y-2 text-[15px] text-neutral-800">
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> {b}</li>
      ))}
    </ul>
  </div>
);

// -------------------- Process (3 steps, simple)
const Process = () => (
  <Section id="process" eyebrow="Process" title="Simple, transparent, fast">
    <ol className="grid gap-6 sm:grid-cols-3">
      {[
        ["1 · Send details", "Share project, contracts and timeline. We respond within a few business days."],
        ["2 · Structure & docs", "We align on milestones, collateral and servicing. You focus on delivery."],
        ["3 · Fund & support", "Draw against milestones. We monitor and help remove blockers when needed."],
      ].map(([title, body]) => (
        <li key={title} className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h4 className="mb-1 text-base font-medium text-black">{title}</h4>
          <p className="text-neutral-700">{body}</p>
        </li>
      ))}
    </ol>
    <div className="mt-8 rounded-2xl border border-neutral-200 p-6 text-[15px] text-neutral-700">
      We prioritise clarity and downside protection without publishing rates or terms here. Every project is different; we tailor around your contracts and cashflows.
    </div>
  </Section>
);

// -------------------- About (compact and human)
const About = () => (
  <Section id="about" eyebrow="About" title="Creative Capital Atelier">
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <p className="mb-4">
          We’re a small, specialist team focused on financing the creative supply chain—producers, post‑houses, distributors,
          music rights holders. We’ve built a process that respects schedules, rights and the realities of production.
        </p>
        <p className="mb-4">
          Our capital is purpose‑built for short durations and clear deliverables. We work globally where counterparties and
          contracts are enforceable, and we prefer simple structures you can run with.
        </p>
      </div>
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h4 className="mb-3 text-sm font-medium text-black">For investors</h4>
          <p className="text-[15px] text-neutral-700">
            From time to time we may share materials with qualified parties. If you’re an institutional or sophisticated
            investor, <a href="#contact" className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700">get in touch</a>. This is not an offer to sell or solicit any security.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

// -------------------- Contact
const Contact = () => (
  <Section id="contact" eyebrow="Contact" title="Start a funding request">
    <div className="grid gap-8 lg:grid-cols-2">
      <form
        className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const body = `Name: ${data.get("name")}
Email: ${data.get("email")}
Company: ${data.get("company") || ""}
Project: ${data.get("project") || ""}
Links: ${data.get("links") || ""}`;
          window.location.href = `mailto:funding@cca.vc?subject=Funding%20request&body=${encodeURIComponent(body)}`;
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="name">Name</label>
            <input id="name" name="name" required className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none ring-neutral-200 focus:ring" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none ring-neutral-200 focus:ring" placeholder="you@studio.com" />
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="company">Company</label>
            <input id="company" name="company" className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none ring-neutral-200 focus:ring" placeholder="Production / Label / Vendor" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="links">Links</label>
            <input id="links" name="links" className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none ring-neutral-200 focus:ring" placeholder="IMDB, portfolio, site" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="project">Project (optional)</label>
          <textarea id="project" name="project" rows={4} className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none ring-neutral-200 focus:ring" placeholder="Brief, counterparties, timelines" />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90">
            Email the team <ArrowRight className="h-4 w-4"/>
          </button>
          <a href="https://cal.com/cca-vc/intro" target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-black hover:bg-neutral-50">Book a call</a>
        </div>
      </form>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6">
        <h4 className="mb-2 text-base font-medium text-black">What to prepare</h4>
        <ul className="space-y-2 text-[15px] text-neutral-800">
          <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Contract or LOA draft (or summary)</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Delivery schedule & milestones</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Counterparty details (distributor / streamer / label)</li>
          <li className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-black"/> Payment terms & collection mechanics</li>
        </ul>
      </div>
    </div>
  </Section>
);

// -------------------- Footer
const Footer = () => (
  <footer className="border-t border-neutral-200 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
      <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Creative Capital Atelier. All rights reserved.</p>
      <div className="flex items-center gap-6 text-sm">
        <a href="#about" className="text-neutral-600 hover:text-black">About</a>
        <a href="#services" className="text-neutral-600 hover:text-black">What we fund</a>
        <a href="#contact" className="text-neutral-600 hover:text-black">Contact</a>
      </div>
    </div>
  </footer>
);

// -------------------- Page Shell
export default function CCA() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
