import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Policy Creation & Development | Compliance Policies | SentraHex CyberTech",
  description: "Professional policy creation assistance for ISO 27001 ISMS, ISO 42001 AIMS, DPDPA, and other compliance standards. Custom policies tailored to your organization.",
  keywords: ["Policy creation", "Compliance policies", "Information security policies", "Data protection policies", "Risk management policies"],
};

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
          <div className="mb-4">
            <Link href="/grc" className="text-sm font-medium text-accent-cyan hover:underline flex items-center gap-1 mb-4">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              Back to GRC
            </Link>
          </div>
          <div className="max-w-3xl">
            <p className="label mb-4" style={{ color: "rgba(147,197,253,0.85)" }}>GRC Support</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight mb-5">
              Policy Creation & Development
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Custom governance and compliance policies that reflect your organization's operations, align with standards, and actually guide your teams.
            </p>
          </div>
        </div>
      </section>

      {/* Why policies matter */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                More Than Audit Documents
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Policies should guide how your organization operates and manages risk. Too often, they're created for audits and never read by teams.
                </p>
                <p>
                  We develop practical policies that are actually useful: clear about what people should do, based on your actual processes, and aligned with your compliance obligations.
                </p>
                <p>
                  Every policy is customized to your organization size, industry, technology, and risk environment.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { title: "Purpose-Driven", desc: "Policies that serve operational and compliance needs, not just audit requirements." },
                { title: "Practical & Clear", desc: "Written for your teams with specific guidance they can follow and understand." },
                { title: "Customized", desc: "Based on your operations, risk profile, and compliance obligations." },
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

      {/* Policy Categories */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight">Policy Development Services</h2>
          </div>

          {/* ISO 27001 ISMS Policies */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-cyan bg-accent-subtle rounded">ISO/IEC 27001</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">Information Security Management Policies</h3>
              <p className="text-text-secondary mb-6">Core policies for ISMS implementation and continuous management of information security.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Information Security Policy",
                "Access Control Policy",
                "Password Policy",
                "Incident Response Policy",
                "Data Classification Policy",
                "Encryption Policy",
                "Acceptable Use Policy",
                "Change Management Policy",
                "Business Continuity Policy",
                "Third-Party Risk Management Policy",
                "Security Awareness Policy",
                "Audit & Compliance Policy",
              ].map((policy) => (
                <div key={policy} className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border">
                  <span className="text-accent-cyan mt-0.5">→</span>
                  <span className="text-sm font-medium text-text-primary">{policy}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ISO 42001 AIMS Policies */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-cyan bg-accent-subtle rounded">ISO/IEC 42001</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">AI Management System Policies</h3>
              <p className="text-text-secondary mb-6">Governance frameworks for responsible AI adoption and management within your organization.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "AI Governance Policy",
                "AI Ethics & Responsible AI Policy",
                "AI Risk Management Policy",
                "AI Model Development & Testing Policy",
                "AI Data Security Policy",
                "AI Transparency & Explainability Policy",
                "AI Incident Management Policy",
                "AI Skills & Training Policy",
                "Third-Party AI Risk Policy",
              ].map((policy) => (
                <div key={policy} className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border">
                  <span className="text-accent-cyan mt-0.5">→</span>
                  <span className="text-sm font-medium text-text-primary">{policy}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DPDPA & Data Protection Policies */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-cyan bg-accent-subtle rounded">Indian Compliance</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">DPDPA & Data Protection Policies</h3>
              <p className="text-text-secondary mb-6">Data protection frameworks aligned with DPDPA and privacy best practices for India.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Privacy Policy (DPDPA)",
                "Data Processing Agreement",
                "Consent Management Policy",
                "Data Subject Rights Policy",
                "Data Retention & Deletion Policy",
                "International Data Transfer Policy",
                "Data Breach Notification Policy",
                "Personal Data Security Policy",
                "Processor Agreement Template",
              ].map((policy) => (
                <div key={policy} className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border">
                  <span className="text-accent-cyan mt-0.5">→</span>
                  <span className="text-sm font-medium text-text-primary">{policy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Development Process */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-12 text-center">How We Develop Policies</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { num: "1", title: "Discovery", desc: "Understand your operations, current processes, technology, and risk environment." },
              { num: "2", title: "Analysis", desc: "Map requirements from standards (ISO, DPDPA) to your organization." },
              { num: "3", title: "Development", desc: "Draft practical, clear policies customized to your context." },
              { num: "4", title: "Alignment", desc: "Review, refine, and ensure policies work with your actual processes." },
            ].map((step) => (
              <div key={step.num} className="card p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent-subtle mb-4">
                  <span className="text-lg font-bold text-accent-cyan">{step.num}</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-8">What You Get</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="text-lg font-bold text-text-primary mb-4">Core Deliverables</h3>
              <ul className="space-y-3">
                {[
                  "Customized policy documents in Word format",
                  "Policy framework documentation",
                  "Implementation guidance for each policy",
                  "Roles and responsibilities definitions",
                  "Related procedures and work instructions",
                  "Policy approval templates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-cyan mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <h3 className="text-lg font-bold text-text-primary mb-4">Support Services</h3>
              <ul className="space-y-3">
                {[
                  "Policy review and refinement workshops",
                  "Stakeholder engagement support",
                  "Gap analysis documentation",
                  "Integration with your management systems",
                  "Staff training on policy requirements",
                  "Ongoing policy maintenance guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-cyan mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Get Your Policies Right
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Develop policies that guide your organization and meet your compliance obligations.
          </p>
          <Link href="/contact" className="btn-primary">Discuss Policy Needs</Link>
        </div>
      </section>
    </>
  );
}
