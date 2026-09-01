import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SentraHex CyberTech | GRC Consulting",
  description:
    "SentraHex CyberTech provides practical GRC consulting: ISO/IEC 27001 ISMS, ISO/IEC 42001 AIMS, DPDPA compliance, and professional website development for businesses in India.",
  keywords: [
    "GRC consulting India",
    "ISO 27001 consultant",
    "AI governance consulting",
    "DPDPA compliance",
    "website development India",
    "information security consulting",
  ],
  alternates: { canonical: "https://sentrahexct.in" },
};

export default function Home() {
  const services = [
    {
      href: "/grc/isms", code: "ISO/IEC 27001", name: "ISMS",
      desc: "Information Security Management System", comingSoon: false,
    },
    {
      href: "/grc/aims", code: "ISO/IEC 42001", name: "AIMS",
      desc: "AI Management System", comingSoon: false,
    },
    {
      href: "/grc/dpdpa", code: "India Compliance", name: "DPDPA",
      desc: "Digital Personal Data Protection Act", comingSoon: false,
    },
    {
      href: "/web-development", code: "Digital", name: "Web Development",
      desc: "Professional websites for businesses", comingSoon: false,
    },
  ];

  const whyPoints = [
    {
      title: "Practical over performative",
      desc: "We focus on management systems that actually work, not documentation generated to satisfy an audit.",
    },
    {
      title: "Focused expertise",
      desc: "We specialize in GRC management systems and professional digital solutions not everything at once.",
    },
    {
      title: "Standards-aware",
      desc: "Our GRC work is built around ISO/IEC 27001, ISO/IEC 42001, and ISO/IEC 27701. Recognized international standards.",
    },
    {
      title: "Built for growing organizations",
      desc: "Focused support that scales with your needs without unnecessary enterprise overhead.",
    },
  ];

  const process = [
    { n: "01", title: "Understand", desc: "Understand your organization's current state, objectives, and obligations." },
    { n: "02", title: "Assess", desc: "Identify gaps, risks, and priorities against the relevant standard or requirement." },
    { n: "03", title: "Build", desc: "Develop the framework, documentation, policies, and controls." },
    { n: "04", title: "Prepare", desc: "Prepare your organization for implementation, review, or certification." },
    { n: "05", title: "Improve", desc: "Support continual improvement and ongoing compliance." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does SentraHex CyberTech do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SentraHex CyberTech helps organizations implement practical governance, risk, and compliance frameworks, including ISO/IEC 27001 ISMS, ISO/IEC 42001 AIMS, DPDPA compliance, and professional business websites.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with businesses in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SentraHex CyberTech supports organizations in India with standards-based GRC consulting, compliance readiness, and digital presence work.",
        },
      },
      {
        "@type": "Question",
        name: "What services does SentraHex offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide ISO 27001 implementation support, AI governance consulting, DPDPA compliance services, policy development, and website development for businesses that need a credible online presence.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ───────────────────────────── */}
      <section className="relative bg-hero-bg min-h-[92vh] flex items-center overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hero-bg/60 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Copy */}
            <div>
              <p className="label mb-6" style={{ color: "rgba(147,197,253,0.85)" }}>
                GRC Consulting &amp; Digital Solutions
              </p>
              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
                Build.{" "}
                <br />
                Govern.{" "}
                <br />
                Comply.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/55 max-w-lg">
                Practical governance, compliance and digital solutions for
                organizations navigating information security and AI.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary-light">
                  Talk to SentraHex
                </Link>
                <Link href="/grc" className="btn-ghost-light">
                  Explore Services
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Services grid (desktop only) */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {services.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className={`rounded-lg border p-5 transition-colors group ${
                    s.comingSoon
                      ? "border-white/8 cursor-default"
                      : "border-white/10 hover:border-white/22 hover:bg-white/4"
                  }`}
                >
                  <div className="text-[10px] font-mono text-white/35 mb-2 tracking-wider">{s.code}</div>
                  <div className="text-white font-semibold text-base mb-1 flex items-center gap-2">
                    {s.name}
                    {s.comingSoon && <span className="badge-soon">Soon</span>}
                  </div>
                  <div className="text-white/40 text-xs leading-snug">{s.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Positioning ────────────────────── */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="label mb-4">What We Do</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
              Governance for the systems that matter.
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              SentraHex helps organizations establish practical management
              systems for information security and AI governance, while building
              professional digital experiences for their customers.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { label: "ISMS", sub: "ISO/IEC 27001", href: "/grc/isms", soon: false },
              { label: "AIMS", sub: "ISO/IEC 42001", href: "/grc/aims", soon: false },
              { label: "DPDPA", sub: "India Compliance", href: "/grc/dpdpa", soon: false },
              { label: "Policies", sub: "Compliance", href: "/grc/policies", soon: false },
              { label: "Website Development", sub: "Digital", href: "/web-development", soon: false },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className={`inline-flex items-center gap-2 border rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  s.soon
                    ? "border-border text-text-muted pointer-events-none"
                    : "border-border text-text-primary hover:border-accent hover:text-accent"
                }`}
              >
                {s.label}
                <span className="text-xs text-text-muted font-normal">{s.sub}</span>
                {s.soon && <span className="badge-soon">Soon</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRC Section ────────────────────── */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="label mb-4">GRC Services</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                Governance that works beyond the audit.
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Organizations that implement management systems because they
                understand the value not just to satisfy an auditor end up
                with controls that actually work. SentraHex focuses on practical
                implementation: the policies, procedures, and controls that make
                your organization demonstrably more secure and accountable.
              </p>
              <div className="mt-8">
                <Link href="/grc" className="btn-primary">
                  View GRC Services
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/grc/isms", label: "ISMS", code: "ISO/IEC 27001", desc: "Establish, implement and continually improve an information security management system.", soon: false },
                { href: "/grc/aims", label: "AIMS", code: "ISO/IEC 42001", desc: "Implement responsible AI governance aligned with the emerging international standard.", soon: false },
                { href: "/grc/dpdpa", label: "DPDPA", code: "India Compliance", desc: "Implement DPDPA 2023 compliance framework, data protection controls, and privacy governance.", soon: false },
                { href: "/grc/policies", label: "Policies", code: "Policy Development", desc: "Custom governance and compliance policies for ISO 27001, ISO 42001, DPDPA, and more.", soon: false },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className={`card p-5 block ${s.soon ? "opacity-60 pointer-events-none" : ""}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="label">{s.label}</span>
                    {s.soon && <span className="badge-soon">Soon</span>}
                  </div>
                  <div className="text-xs text-text-muted mb-2">{s.code}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Website Development ─────────────── */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 card p-8">
              <div className="space-y-3">
                {["Business websites","Corporate websites","Landing pages","Portfolio websites","Website redesign","Responsive development","Deployment & maintenance"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="label mb-4">Website Development</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                Websites built for credibility.
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Professional, responsive websites designed for businesses that
                need to look as credible online as they are offline. Clear
                communication, strong design, and reliable delivery.
              </p>
              <div className="mt-8">
                <Link href="/web-development" className="btn-secondary">
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SentraHex ───────────────────── */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="label mb-4">Why SentraHex</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight max-w-xl">
              Focused. Standards-aware. Implementation-minded.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {whyPoints.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="h-5 w-5 rounded bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────── */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="label mb-4">How We Work</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              A straightforward engagement.
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-5 border border-border rounded-lg overflow-hidden">
            {process.map((step) => (
              <div key={step.n} className="bg-surface p-6">
                <div className="text-2xl font-bold text-border mb-3 font-mono">{step.n}</div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section bg-hero-bg border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5 leading-tight max-w-2xl mx-auto">
            Building something that needs to be trusted?
          </h2>
          <p className="text-white/55 leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re preparing for ISO/IEC 27001, establishing AI governance
            under ISO/IEC 42001, or need a professional website let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-primary-light">
            Start a Conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
