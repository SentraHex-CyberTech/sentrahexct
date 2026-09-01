import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISMS ISO/IEC 27001 Implementation",
  description: "SentraHex helps organizations implement an ISO/IEC 27001-aligned Information Security Management System: gap assessment, risk treatment, policy development, and certification readiness.",
};

export default function ISMSPage() {
  const deliverables = [
    "Gap assessment against ISO/IEC 27001 requirements",
    "Information security risk assessment",
    "Risk treatment plan",
    "Statement of Applicability (SoA)",
    "Information security policies and procedures",
    "Control implementation guidance",
    "Evidence preparation support",
    "Internal audit support",
    "Certification readiness review",
  ];

  const faqs = [
    {
      q: "Does SentraHex award ISO/IEC 27001 certification?",
      a: "No. ISO/IEC 27001 certification is awarded by accredited certification bodies following an external audit. SentraHex helps organizations prepare for and implement an ISO/IEC 27001-aligned ISMS including everything needed to approach certification confidently.",
    },
    {
      q: "How long does ISMS implementation typically take?",
      a: "Implementation timelines vary depending on the size and complexity of your organization, existing controls, and readiness. A typical initial implementation ranges from a few months to a year. SentraHex will give you a realistic assessment at the outset.",
    },
    {
      q: "What if we already have some security controls in place?",
      a: "The gap assessment will identify what already exists, what needs to be formalized, and what is genuinely missing. Existing controls are a starting point not wasted effort.",
    },
    {
      q: "Do we need to implement all 93 controls in Annex A?",
      a: "Not necessarily. The Statement of Applicability documents which controls are applicable and which have been excluded, along with justification. Applicability depends on your scope, risk assessment and organizational context.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/grc" className="text-sm text-white/40 hover:text-white/70 transition-colors">GRC</Link>
            <span className="text-white/20">/</span>
            <span className="text-sm text-white/60">ISMS</span>
          </div>
          <p className="label mb-4" style={{ color: "rgba(147,197,253,0.85)" }}>ISO/IEC 27001</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            Information Security Management System
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            We help organizations prepare for and implement an ISO/IEC 27001-aligned ISMS from initial gap assessment through to certification readiness.
          </p>
          <div className="mt-8">
            <Link href="/contact?service=isms" className="btn-primary-light">Enquire About ISMS</Link>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label mb-4">Why ISMS</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">Information security needs a management system, not just tools.</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>Technical controls firewalls, encryption, access management are necessary but not sufficient. Without governance, risk management and clear accountability, security gaps emerge in the spaces between tools.</p>
                <p>ISO/IEC 27001 provides a framework for establishing, implementing, maintaining and continually improving an information security management system. It addresses organizational context, risk, controls, and the management commitment required to make security sustainable.</p>
                <p>Organizations that implement ISO/IEC 27001 properly not just for the certificate end up with measurably better security posture and a defensible record of due diligence.</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { n: "1", label: "Organizational context and scope" },
                { n: "2", label: "Leadership and management commitment" },
                { n: "3", label: "Risk assessment and treatment" },
                { n: "4", label: "Information security objectives" },
                { n: "5", label: "Control implementation (Annex A)" },
                { n: "6", label: "Internal audit and management review" },
                { n: "7", label: "Continual improvement" },
              ].map((item) => (
                <div key={item.n} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                  <span className="text-xs font-mono text-text-muted w-5 shrink-0">{item.n}</span>
                  <span className="text-sm text-text-primary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What SentraHex provides */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="label mb-4">What We Provide</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight max-w-xl">From gap assessment to certification readiness.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <div key={d} className="card p-4 flex items-start gap-3">
                <div className="h-5 w-5 rounded bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <span className="text-sm text-text-secondary leading-snug">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10">
            <p className="label mb-4">FAQ</p>
            <h2 className="text-3xl font-bold text-text-primary">Common questions.</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-base font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-hero-bg border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">Ready to implement your ISMS?</h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8 leading-relaxed">Tell us about your organization&apos;s current state and objectives. We&apos;ll discuss a realistic path to ISO/IEC 27001 readiness.</p>
          <Link href="/contact?service=isms" className="btn-primary-light">
            Start a Conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
