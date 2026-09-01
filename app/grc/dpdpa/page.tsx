import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DPDPA Compliance | Data Protection Act India | SentraHex CyberTech",
  description: "Implement the Digital Personal Data Protection Act (DPDPA) for your organization. DPDPA compliance support, data protection frameworks, and privacy governance for India.",
  keywords: ["DPDPA", "Data Protection", "India", "Privacy Act", "Personal Data", "Compliance"],
};

export default function DPDPAPage() {
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
            <p className="label mb-4" style={{ color: "rgba(147,197,253,0.85)" }}>Indian Compliance</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl leading-tight mb-5">
              DPDPA Compliance
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Implement the Digital Personal Data Protection Act (DPDPA) 2023. Build data protection frameworks that protect customer privacy and demonstrate compliance to regulators.
            </p>
          </div>
        </div>
      </section>

      {/* What is DPDPA */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                India's Personal Data Protection Framework
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  The Digital Personal Data Protection Act (DPDPA) 2023 is India's foundational data protection legislation. It establishes obligations for organizations handling personal data of Indian citizens.
                </p>
                <p>
                  Key principles include consent management, data minimization, storage limitation, and security obligations. Organizations must implement accountability measures and demonstrate compliance.
                </p>
                <p>
                  Unlike sectoral regulations, DPDPA applies across industries and establishes a baseline for data protection that all organizations must meet.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "📋", title: "Key Requirements", desc: "Consent mechanisms, purpose limitation, data subject rights, security controls, breach notification." },
                { icon: "🛡️", title: "Data Processing", desc: "Personal data handling, processing lawfulness, legitimate purpose clarification, retention limits." },
                { icon: "📊", title: "Accountability", desc: "Documentation, impact assessments, data inventory, processing records, audit trails." },
              ].map((item) => (
                <div key={item.title} className="card p-5 flex gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DPDPA Compliance Services */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight">Our DPDPA Compliance Services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { 
                title: "Gap Assessment & Readiness Review",
                desc: "Evaluate current data handling practices against DPDPA requirements. Identify gaps, assess readiness, and create a roadmap for compliance.",
                items: ["Current state analysis", "Gap identification", "Risk assessment", "Compliance roadmap"]
              },
              { 
                title: "Data Protection Framework",
                desc: "Develop comprehensive data protection policies and procedures aligned with DPDPA principles.",
                items: ["Privacy policies", "Data handling procedures", "Consent frameworks", "Data subject request processes"]
              },
              { 
                title: "Technical & Organizational Controls",
                desc: "Implement security measures and organizational controls required for DPDPA compliance.",
                items: ["Data encryption implementation", "Access control systems", "Audit mechanisms", "Security monitoring"]
              },
              { 
                title: "Data Inventory & Mapping",
                desc: "Document all data processing activities, create data flow diagrams, and maintain processing records.",
                items: ["Data inventory creation", "Processing mapping", "Impact assessments", "Documentation support"]
              },
            ].map((service) => (
              <div key={service.title} className="card p-7 flex flex-col">
                <h3 className="text-lg font-bold text-text-primary mb-3">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-border">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Ensure DPDPA Compliance
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Protect customer data, demonstrate accountability, and build trust with a comprehensive DPDPA compliance program.
          </p>
          <Link href="/contact" className="btn-primary">Start Your DPDPA Assessment</Link>
        </div>
      </section>
    </>
  );
}
