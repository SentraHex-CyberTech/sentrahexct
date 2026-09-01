import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SentraHex CyberTech | GRC & Digital Solutions in India",
  description: "Learn about SentraHex CyberTech, an Indian consulting firm helping businesses implement ISO 27001, AI governance, DPDPA compliance, and professional websites with practical delivery.",
  keywords: ["about SentraHex CyberTech", "GRC consulting firm", "AI governance company India", "ISO 27001 consulting"],
};

export default function AboutPage() {
  const values = [
    { title: "Practical over performative", desc: "We implement management systems that work not documentation created to satisfy an auditor and filed away." },
    { title: "Honest scope", desc: "We do what we say we do. Our services are clearly defined and our claims are substantiated." },
    { title: "Standards-aware", desc: "Our GRC work is grounded in ISO/IEC standards not proprietary frameworks or invented methodologies." },
    { title: "Implementation-minded", desc: "Documentation matters, but implementation matters more. We focus on organizations actually changing how they operate." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <p className="label mb-5" style={{ color: "rgba(147,197,253,0.85)" }}>About</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            A small, serious consulting firm.
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            Focused expertise. Practical implementation. Professional delivery.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="label mb-4">Who We Are</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                SentraHex CyberTech
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>SentraHex CyberTech is an Indian organization helping businesses establish practical governance frameworks and build professional digital experiences.</p>
                <p>Our GRC practice focuses on management systems aligned with recognized international standards ISO/IEC 27001 for information security, ISO/IEC 42001 for AI governance, and ISO/IEC 27701 for privacy management.</p>
                <p>Our digital practice builds professional, responsive websites for businesses that take their online presence seriously.</p>
                <p>We are intentionally focused. We do not claim to be everything to everyone in cybersecurity. We do the things we do well, and we are honest about what falls outside our scope.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card p-6 border-l-2 border-accent">
                <h3 className="text-base font-semibold text-text-primary mb-2">Our Mission</h3>
                <p className="text-sm text-text-secondary leading-relaxed">To help organizations establish governance frameworks that create real security and accountability and to build digital experiences that accurately represent who they are.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-base font-semibold text-text-primary mb-3">Our Services</h3>
                <div className="space-y-3">
                  {[
                    { label: "ISMS", sub: "ISO/IEC 27001 Information Security Management", href: "/grc/isms" },
                    { label: "AIMS", sub: "ISO/IEC 42001 AI Management System", href: "/grc/aims" },
                    { label: "DPDPA", sub: "Digital Personal Data Protection Act", href: "/grc/dpdpa" },
                    { label: "Policies", sub: "Governance & compliance documentation", href: "/grc/policies" },
                    { label: "PIMS", sub: "ISO/IEC 27701 Coming Soon", href: "/grc/pims", soon: true },
                    { label: "Web Development", sub: "Professional business websites", href: "/web-development" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-start justify-between">
                      <div>
                        <span className="text-sm font-medium text-text-primary">{s.label}</span>
                        <span className="text-xs text-text-muted ml-2">{s.sub}</span>
                      </div>
                      {s.soon && <span className="badge-soon">Soon</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h3 className="text-base font-semibold text-text-primary mb-2">Based in India</h3>
                <p className="text-sm text-text-secondary leading-relaxed">SentraHex CyberTech is an Indian organization, serving clients in India and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="label mb-4">Our Approach</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight">What we believe about good work.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="text-base font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-hero-bg border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">Let&apos;s work together.</h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8 leading-relaxed">If you&apos;re looking for focused expertise, honest scope, and practical delivery we&apos;d like to hear from you.</p>
          <Link href="/contact" className="btn-primary-light">
            Start a Conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
