import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GRC Services Governance, Risk & Compliance",
  description: "SentraHex CyberTech provides practical GRC services: ISO/IEC 27001 ISMS, ISO/IEC 42001 AIMS, and ISO/IEC 27701 PIMS. Helping organizations implement management systems that work.",
};

export default function GRCPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <p className="label mb-5" style={{ color: "rgba(147,197,253,0.85)" }}>GRC Services</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            Governance, Risk<br />&amp; Compliance
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            Management systems built around recognized international standards implemented to work, not just to pass an audit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary-light">Talk to SentraHex</Link>
            <Link href="#services" className="btn-ghost-light">View Services</Link>
          </div>
        </div>
      </section>

      {/* What GRC means */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label mb-4">What Is GRC</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                More than a compliance checklist.
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>Governance, Risk and Compliance covers the frameworks, policies, processes and controls that organizations use to manage information security risk and demonstrate accountability.</p>
                <p>Done well, GRC creates organizational resilience systems that work when tested and documentation that reflects reality. Done poorly, it creates overhead without value.</p>
                <p>SentraHex helps organizations do GRC properly: practical implementation aligned with ISO/IEC standards that gives auditors what they need and organizations what they actually benefit from.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { title: "Governance", desc: "Clear policies, roles, responsibilities and decision-making structures for information security and AI." },
                { title: "Risk", desc: "Systematic identification, assessment and treatment of information security and AI-related risks." },
                { title: "Compliance", desc: "Alignment with ISO/IEC standards, applicable laws and organizational obligations." },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="label mb-4">Our Services</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight">Management systems for today&apos;s obligations.</h2>
          </div>
          
          {/* ISO Standards Section */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-text-primary mb-6">International Standards</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card p-7 flex flex-col">
                <div className="mb-5">
                  <p className="label mb-2">ISMS</p>
                  <div className="text-xs text-text-muted mb-4">ISO/IEC 27001</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Information Security Management System</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Gap assessment, risk assessment, policy development, control implementation, internal audit support and certification readiness for ISO/IEC 27001.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href="/grc/isms" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="card p-7 flex flex-col">
                <div className="mb-5">
                  <p className="label mb-2">AIMS</p>
                  <div className="text-xs text-text-muted mb-4">ISO/IEC 42001</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">AI Management System</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Establish responsible AI governance: AI system inventory, risk management, policies, lifecycle governance and implementation support aligned with ISO/IEC 42001.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href="/grc/aims" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="card p-7 flex flex-col opacity-60">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="label">PIMS</p>
                    <span className="badge-soon">Coming Soon</span>
                  </div>
                  <div className="text-xs text-text-muted mb-4">ISO/IEC 27701</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Privacy Information Management System</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">An extension of ISO/IEC 27001 to include privacy management. SentraHex is expanding its GRC practice to include ISO/IEC 27701-aligned PIMS implementation.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href="/grc/pims" className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted">
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* India Compliance & Support Section */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">India-Specific Compliance & GRC Support</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card p-7 flex flex-col">
                <div className="mb-5">
                  <p className="label mb-2">DPDPA</p>
                  <div className="text-xs text-text-muted mb-4">Data Protection Compliance</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">DPDPA Compliance</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Implement the Digital Personal Data Protection Act (DPDPA) 2023: gap assessment, data protection frameworks, technical controls, data mapping, and accountability documentation for India-based organizations.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href="/grc/dpdpa" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              <div className="card p-7 flex flex-col">
                <div className="mb-5">
                  <p className="label mb-2">Policy Development</p>
                  <div className="text-xs text-text-muted mb-4">Governance & Compliance</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Policy Creation & Development</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Custom policies for ISO 27001, ISO 42001, DPDPA, and other compliance standards. Practical, actionable policies tailored to your organization that actually guide your teams.</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border">
                  <Link href="/grc/policies" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="label mb-4">Who We Work With</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">Organizations ready to take governance seriously.</h2>
              <p className="text-text-secondary leading-relaxed">SentraHex works with organizations of various sizes that recognize the value of structured governance not just those required to comply.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Organizations pursuing ISO/IEC 27001 certification", desc: "Preparing for first-time certification or maintaining an existing ISMS." },
                { title: "Organizations deploying AI systems", desc: "Seeking structured governance under ISO/IEC 42001 for responsible AI use." },
                { title: "Organizations with compliance obligations", desc: "Navigating sector-specific or contractual information security requirements." },
                { title: "Growing businesses building governance foundations", desc: "Establishing information security controls before they become a requirement." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="h-5 w-5 rounded bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary mb-0.5">{item.title}</div>
                    <div className="text-sm text-text-secondary">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-hero-bg border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">Ready to build something that lasts?</h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8 leading-relaxed">Start with a conversation about your organization&apos;s current state and what you need to achieve.</p>
          <Link href="/contact" className="btn-primary-light">
            Start a Conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
