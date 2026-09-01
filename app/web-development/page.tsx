import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Professional Business Websites",
  description: "SentraHex builds professional, responsive websites for businesses and organizations. Business websites, corporate sites, landing pages, portfolio sites, and website redesigns.",
};

export default function WebDevPage() {
  const types = [
    { title: "Business websites", desc: "Clean, credible websites for established businesses that need a strong online presence." },
    { title: "Corporate websites", desc: "Professional corporate sites that communicate your organization clearly and accurately." },
    { title: "Landing pages", desc: "Focused, conversion-oriented pages for specific products, services or campaigns." },
    { title: "Portfolio websites", desc: "Showcase-oriented sites for professionals, studios and creative organizations." },
    { title: "Website redesign", desc: "Modernizing existing websites that no longer represent the organization they serve." },
    { title: "Maintenance & updates", desc: "Ongoing support, content updates and maintenance for delivered websites." },
  ];

  const approach = [
    { n: "01", title: "Discovery", desc: "Understand your organization, audience, and what the website needs to communicate and achieve." },
    { n: "02", title: "Structure", desc: "Define the sitemap, page structure, and content hierarchy before visual design begins." },
    { n: "03", title: "Design", desc: "Build a design that reflects your organization professional, clear, and appropriate." },
    { n: "04", title: "Development", desc: "Responsive, performant development with attention to accessibility and SEO fundamentals." },
    { n: "05", title: "Delivery", desc: "Deployment, handover, documentation, and ongoing support as required." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <p className="label mb-5" style={{ color: "rgba(147,197,253,0.85)" }}>Website Development</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            Websites built for credibility.
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-xl leading-relaxed">
            Professional, responsive websites designed for businesses that need to look as credible online as they are offline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?service=web" className="btn-primary-light">Discuss Your Website</Link>
            <Link href="#types" className="btn-ghost-light">What We Build</Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label mb-4">Our Approach</p>
              <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight mb-5">
                Design that communicates, development that delivers.
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>Many businesses have websites that no longer represent them accurately outdated, poorly structured, or visually inconsistent with the organization they have become. A website that undermines trust is worse than no website.</p>
                <p>SentraHex approaches website development the same way we approach management systems: with structure, clarity, and attention to what actually matters. The result is a website that communicates your organization clearly, loads quickly, and works correctly on every device.</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: "Professional design", desc: "Appropriate, purposeful design not templates or generic aesthetics." },
                { label: "Responsive", desc: "Works correctly on desktop, tablet and mobile without compromise." },
                { label: "Performance", desc: "Fast-loading pages with attention to Core Web Vitals and user experience." },
                { label: "SEO fundamentals", desc: "Semantic HTML, proper metadata and structured data as standard." },
                { label: "Accessibility", desc: "Accessible contrast, keyboard navigation and sensible focus states." },
                { label: "Security-conscious", desc: "Best-practice development with no unnecessary dependencies." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                  <div className="h-5 w-5 rounded bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-text-primary">{item.label}</span>
                    <span className="text-sm text-text-secondary"> {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="types" className="section bg-surface-alt border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="label mb-4">What We Build</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl leading-tight">The right website for your organization.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => (
              <div key={t.title} className="card p-6">
                <h3 className="text-base font-semibold text-text-primary mb-2">{t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="label mb-4">Process</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">How a project works.</h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-5 border border-border rounded-lg overflow-hidden">
            {approach.map((step) => (
              <div key={step.n} className="bg-surface p-6">
                <div className="text-2xl font-bold text-border mb-3 font-mono">{step.n}</div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-hero-bg border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">Ready to build your website?</h2>
          <p className="text-white/55 max-w-lg mx-auto mb-8 leading-relaxed">Tell us about your organization, your audience, and what your website needs to achieve. We&apos;ll take it from there.</p>
          <Link href="/contact?service=web" className="btn-primary-light">
            Discuss Your Project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
