import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SentraHex CyberTech",
  description:
    "Read the Privacy Policy for SentraHex CyberTech, including how we collect, use, secure, and retain personal data.",
  openGraph: {
    title: "Privacy Policy | SentraHex CyberTech",
    description:
      "How SentraHex CyberTech collects, uses, shares, and protects your personal information.",
    url: "https://sentrahexct.in/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://sentrahexct.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24 -mb-px min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent-cyan/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent-green/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-white/60 max-w-2xl mx-auto">
            Effective date: March 23, 2026
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1380 53 1440 56V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl space-y-10 text-text-secondary">
          <p>
            This Privacy Policy explains how SentraHex CyberTech ("we", "us", "our")
            collects, uses, stores, and discloses information when you use our website,
            submit forms, request services, or communicate with us.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details, such as name, email address, and company information.</li>
              <li>Inquiry and service request details submitted through our forms.</li>
              <li>Communication records when you contact us by email or forms.</li>
              <li>Technical data such as logs, IP address, device type, and browser information.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide requested services.</li>
              <li>To operate, maintain, and improve our website and service workflows.</li>
              <li>To detect abuse, fraud, security incidents, and unauthorized activity.</li>
              <li>To comply with legal obligations and enforce our legal rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">3. Legal Basis and Consent</h2>
            <p>
              We process personal information based on legitimate business interests,
              contractual necessity, legal obligations, and consent where required by law.
              By submitting forms, you consent to processing required for handling your request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">4. Data Sharing</h2>
            <p>
              We do not sell personal data. We may share information with trusted processors
              and service providers strictly for operational purposes, and with authorities if
              required by law or to protect legal rights and security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">5. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes described in
              this policy, legal compliance, dispute resolution, and security audit needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">6. Security Measures</h2>
            <p>
              We use reasonable technical and organizational safeguards to protect data.
              No internet-based system is fully risk-free, but we continuously improve controls
              to reduce unauthorized access, disclosure, and misuse.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">7. Your Rights</h2>
            <p>
              Subject to applicable law, you may request access, correction, deletion,
              restriction, or portability of your personal information, and may object to
              certain processing. To exercise rights, contact us at sales@sentrahexct.in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">8. Cookies and Analytics</h2>
            <p>
              We may use cookies and similar technologies for security, functionality,
              analytics, and performance. You can manage cookie preferences in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">9. Children\'s Privacy</h2>
            <p>
              Our services are not directed to children under 18. We do not knowingly collect
              data from children. If such data is identified, we will take steps to delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">10. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes become effective
              when posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">11. Contact</h2>
            <p>
              For privacy-related questions, contact us at sales@sentrahexct.in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
