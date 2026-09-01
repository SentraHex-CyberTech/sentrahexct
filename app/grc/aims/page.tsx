import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIMS ISO/IEC 42001 AI Governance",
  description: "SentraHex helps organizations establish an ISO/IEC 42001-aligned AI Management System. Practical AI governance: inventory, risk management, policies, lifecycle controls.",
};

export default function AIMSPage() {
  const focusAreas = [
    { title: "AI system inventory", desc: "Identify and document AI systems in scope, their purpose, inputs, outputs and dependencies." },
    { title: "AI risk management", desc: "Assess risks associated with AI systems including bias, opacity, safety and security implications." },
    { title: "AI policies and objectives", desc: "Develop an AI policy, responsible use principles and measurable AI objectives." },
    { title: "Roles and responsibilities", desc: "Define accountability for AI systems: who owns, develops, operates and audits AI use." },
    { title: "AI lifecycle governance", desc: "Controls for the design, development, deployment, monitoring and decommissioning of AI systems." },
    { title: "Impact considerations", desc: "Assess the potential impact of AI systems on individuals, groups and society." },
    { title: "Documentation and evidence", desc: "Maintain the records required to demonstrate a functioning AIMS to auditors and stakeholders." },
    { title: "Readiness and implementation support", desc: "Guide your organization from initial assessment to a functioning, auditable AI management system." },
  ];

  const faqs = [
    {
      q: "What is ISO/IEC 42001?",
      a: "ISO/IEC 42001 is the international standard for AI Management Systems. It provides requirements for organizations to establish, implement, maintain and continually improve a system for responsible development and use of AI. It is analogous to ISO/IEC 27001 for information security, but focused on AI.",
    },
    {
      q: "Why does our organization need AI governance?",
      a: "Organizations using AI systems face risks from bias, errors, regulatory scrutiny and reputational exposure. Structured AI governance including accountability, controls, risk management and monitoring is becoming both a best practice and increasingly a regulatory expectation in jurisdictions globally.",
    },
    {
      q: "Does this apply only to organizations building AI?",
      a: "No. ISO/IEC 42001 applies to organizations that develop or deploy AI including those using third-party AI tools and services in their operations. If AI systems affect your customers, employees or decisions, governance applies.",
    },
    {
      q: "Is ISO/IEC 42001 certification available?",
      a: "Yes. ISO/IEC 42001 certification is available from accredited certification bodies. SentraHex helps organizations implement an AIMS and prepare for certification we do not award certification ourselves.",
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
            <span className="text-sm text-white/60">AIMS</span>
          </div>
          <p className="label mb-4" style={{ color: "rgba(147,197,253,0.85)" }}>ISO/IEC 42001</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            AI Management System
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            AI adoption is accelerating. Governance needs to keep up.
          </p>
          <p className="mt-3 text-base text-white/40 max-w-lg leading-relaxed">
            SentraHex helps organizations establish practical AI governance aligned with ISO/IEC 42001 the international standard for responsible AI management.
          </p>
          <div className="mt-8">
            <Link href="/contact?service=aims" className="btn-primary-light">Enquire About AIMS</Link>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="label mb-4">The Context</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">Serious AI governance, not AI hype.</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>Organizations are integrating AI tools into operations, customer interactions and decision-making at a pace that often outstrips governance. The risks from biased outputs to security exposures to regulatory non-compliance are concrete and growing.</p>
                <p>ISO/IEC 42001 provides a structured management system framework for responsible AI: not a prohibition on AI use, but a systematic approach to managing it accountably.</p>
                <p>For organizations that take their obligations seriously, an AIMS demonstrates that AI use is governed, not incidental to customers, partners, regulators and their own boards.</p>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-semibold text-text-primary mb-4">Why ISO/IEC 42001 now</h3>
              <div className="space-y-4">
                {[
                  { label: "Regulatory momentum", desc: "AI-specific regulations are emerging globally, including the EU AI Act. A structured AIMS positions organizations ahead of compliance requirements." },
                  { label: "Stakeholder expectations", desc: "Customers, partners and supply chains increasingly scrutinize AI use. Demonstrable governance is becoming a differentiator." },
                  { label: "Risk management", desc: "AI systems introduce novel risks. A management system provides the structure to identify, assess and treat those risks systematically." },
                  { label: "Operational accountability", desc: "As AI decisions affect more people, accountability requires more than good intentions it requires documented governance." },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="text-sm font-semibold text-text-primary mb-1">{item.label}</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="label mb-4">What We Provide</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight max-w-xl">From AI inventory to auditable governance.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="card p-5">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{area.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{area.desc}</p>
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">Ready to govern your AI systems?</h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8 leading-relaxed">Let&apos;s discuss your organization&apos;s AI use, obligations, and what a practical AIMS implementation looks like for you.</p>
          <Link href="/contact?service=aims" className="btn-primary-light">
            Start a Conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
