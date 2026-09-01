import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PIMS ISO/IEC 27701 Privacy Management (Coming Soon)",
  description: "SentraHex is expanding its GRC practice to include ISO/IEC 27701-aligned Privacy Information Management System implementation. Coming soon.",
};

export default function PIMSPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/grc" className="text-sm text-white/40 hover:text-white/70 transition-colors">GRC</Link>
            <span className="text-white/20">/</span>
            <span className="text-sm text-white/60">PIMS</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <p className="label" style={{ color: "rgba(147,197,253,0.85)" }}>ISO/IEC 27701</p>
            <span className="badge-soon">Coming Soon</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            Privacy Information Management System
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            Privacy management is the next layer of responsible governance.
          </p>
        </div>
      </section>

      {/* Coming Soon content */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-amber-border bg-amber-bg rounded-md px-4 py-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-amber-text" />
                <span className="text-sm font-medium text-amber-text">This service is in development</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                PIMS is coming to SentraHex.
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>SentraHex is expanding its GRC practice to include ISO/IEC 27701-aligned Privacy Information Management System implementation.</p>
                <p>ISO/IEC 27701 extends ISO/IEC 27001 to include privacy management, providing guidance for organizations acting as privacy information controllers and processors.</p>
                <p>If your organization is interested in PIMS implementation, register your interest and we will be in touch when the service launches.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact?service=pims" className="btn-primary">Register Interest</Link>
                <Link href="/grc" className="btn-secondary">View Other GRC Services</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-text-primary mb-6">What PIMS covers</h3>
              {[
                { title: "Privacy information management", desc: "A systematic approach to managing personal data in line with applicable privacy requirements." },
                { title: "Extension of ISO/IEC 27001", desc: "PIMS is an extension standard organizations typically implement ISO/IEC 27001 first, then add the privacy layer." },
                { title: "Controller and processor guidance", desc: "Guidance for organizations acting as privacy information controllers, processors, or both." },
                { title: "Alignment with privacy regulations", desc: "Supports alignment with GDPR, DPDPA and other applicable privacy frameworks." },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h4 className="text-sm font-semibold text-text-primary mb-1.5">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Interested in PIMS when it launches?</h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">Send us a message and we&apos;ll keep you updated on the PIMS service as it develops.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact?service=pims" className="btn-primary">Register Interest</Link>
            <Link href="/grc" className="btn-secondary">Explore GRC Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
