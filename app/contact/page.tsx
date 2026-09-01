"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission replace with actual API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  const services = [
    { value: "isms", label: "ISO/IEC 27001 ISMS" },
    { value: "aims", label: "ISO/IEC 42001 AIMS" },
    { value: "pims", label: "ISO/IEC 27701 PIMS (Coming Soon)" },
    { value: "web", label: "Website Development" },
    { value: "other", label: "Other" },
  ];

  const inputClass = "w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/10 placeholder:text-text-muted";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24">
          <p className="label mb-5" style={{ color: "rgba(147,197,253,0.85)" }}>Contact</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
            Start a conversation.
          </h1>
          <p className="mt-5 text-lg text-white/55 max-w-lg leading-relaxed">
            Tell us about your organization and what you need. Every inquiry receives a response from someone who has actually read it.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <p className="label mb-4">Get in Touch</p>
              <h2 className="text-2xl font-bold text-text-primary mb-5">We&apos;d like to hear from you.</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Whether you need to implement an ISO management system, establish AI governance, or build a professional website let&apos;s discuss what that looks like for your organization.
              </p>
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Email</div>
                  <a href="mailto:sales@sentrahexct.in" className="text-sm text-accent hover:underline">sales@sentrahexct.in</a>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Location</div>
                  <div className="text-sm text-text-secondary">India</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Response</div>
                  <div className="text-sm text-text-secondary">We respond to all enquiries.</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle">
                    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Message received.</h3>
                  <p className="text-text-secondary text-sm max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll review your message and respond to you directly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                    className="btn-secondary mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-text-primary mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-text-primary mb-1.5">Company / Organization</label>
                      <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder="Organization name" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-text-primary mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-text-primary mb-1.5">Phone</label>
                      <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+91 " />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-text-primary mb-1.5">Service Interested In <span className="text-red-500">*</span></label>
                    <select id="service" required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-text-primary mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us about your organization and what you need..." />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center !py-3">
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                  <p className="text-center text-xs text-text-muted">Your information will not be shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
