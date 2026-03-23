import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SentraHex CyberTech",
  description:
    "Read the Terms of Service for SentraHex CyberTech, including service conditions, liabilities, and legal terms.",
  openGraph: {
    title: "Terms of Service | SentraHex CyberTech",
    description:
      "Terms governing the use of SentraHex CyberTech website and services.",
    url: "https://sentrahexct.in/terms-of-service",
    type: "website",
  },
  alternates: {
    canonical: "https://sentrahexct.in/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Terms of Service</h1>
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
            These Terms of Service ("Terms") govern your access to and use of the SentraHex
            CyberTech website and services. By using our website or requesting services, you
            agree to these Terms.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">1. Eligibility and Authority</h2>
            <p>
              You represent that you are legally capable of entering these Terms and, if acting
              for an organization, you have authority to bind that organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">2. Scope of Services</h2>
            <p>
              Service details, deliverables, timelines, and fees are defined in proposals,
              statements of work, or written agreements. In case of conflict, the signed
              commercial agreement governs service execution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">3. Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must not misuse, disrupt, or attempt unauthorized access to systems.</li>
              <li>You must not submit unlawful, infringing, or malicious content.</li>
              <li>You must provide accurate information when using forms or engaging services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">4. Intellectual Property</h2>
            <p>
              All website content, branding, and materials are owned by or licensed to
              SentraHex CyberTech. No rights are granted except as explicitly stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">5. Confidentiality</h2>
            <p>
              Each party agrees to protect confidential information disclosed during discussions
              and engagements, and to use it only for legitimate service purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">6. Payments and Commercial Terms</h2>
            <p>
              Fees, invoicing schedules, and payment due dates are defined in project-specific
              agreements. Late payment may result in suspension of service delivery where legally
              permitted.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">7. Warranties Disclaimer</h2>
            <p>
              Services and website content are provided on an "as is" and "as available" basis,
              except as explicitly stated in a signed agreement. No security service can guarantee
              prevention of all incidents or vulnerabilities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SentraHex CyberTech is not liable for
              indirect, incidental, special, consequential, or punitive damages, including loss
              of profits, data, or business interruption.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">9. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless SentraHex CyberTech from claims arising
              from your unlawful use, policy violations, or misuse of provided services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">10. Suspension and Termination</h2>
            <p>
              We may suspend or terminate access for violations of these Terms, legal requirements,
              or security risks. Termination does not waive rights accrued before termination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">11. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Disputes are subject to the
              competent courts in India, unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">12. Updates to Terms</h2>
            <p>
              We may modify these Terms from time to time. Updated Terms are effective when
              posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-3">13. Contact</h2>
            <p>
              For legal or contractual questions, contact us at sales@sentrahexct.in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
