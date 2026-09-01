import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-hero-bg text-white">
      <div className="mx-auto w-full max-w-full px-12 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-32 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <img src="/favicon.ico" alt="SentraHex" className="h-8 w-8 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Sentra<span className="text-white/50">Hex</span></span>
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">CyberTech</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs mb-10">
              Practical governance, compliance and digital solutions. Rooted in India, built for organizations that take their responsibilities seriously.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/sentrahexct" target="_blank" rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-white/35 transition-colors hover:bg-white/10 hover:text-white/70"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xs font-semibold uppercase tracking-wider text-white/40">GRC Services</h4>
            <ul className="space-y-6 text-sm">
              <li><Link href="/grc" className="text-white/55 hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/grc/isms" className="text-white/55 hover:text-white transition-colors">ISMS ISO/IEC 27001</Link></li>
              <li><Link href="/grc/aims" className="text-white/55 hover:text-white transition-colors">AIMS ISO/IEC 42001</Link></li>
              <li className="flex items-center gap-2">
                <Link href="/grc/dpdpa" className="text-white/55 hover:text-white transition-colors">DPDPA</Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/grc/policies" className="text-white/55 hover:text-white transition-colors">Policy Development</Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/grc/pims" className="text-white/35 hover:text-white/55 transition-colors">PIMS ISO/IEC 27701</Link>
                <span className="badge-soon">Soon</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-8 text-xs font-semibold uppercase tracking-wider text-white/40">Company</h4>
            <ul className="space-y-6 text-sm">
              <li><Link href="/" className="text-white/55 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/web-development" className="text-white/55 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/about" className="text-white/55 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white/55 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white/55 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/55 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-8 text-xs font-semibold uppercase tracking-wider text-white/40">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-white/40 mb-3">Email</p>
                <a href="mailto:sales@sentrahexct.in" className="text-sm text-white/55 hover:text-white transition-colors">sales@sentrahexct.in</a>
              </div>
              <div>
                <p className="text-xs text-white/40 mb-3">Location</p>
                <p className="text-sm text-white/55">India</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/55 border border-white/15 rounded-md px-4 py-2.5 hover:text-white hover:border-white/30 transition-colors mt-6">
                Start a Conversation
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-full flex-col items-center justify-between gap-6 px-12 py-8 sm:flex-row">
          <p className="text-xs text-white/30">© {year} SentraHex CyberTech. All rights reserved.</p>
          <div className="flex gap-12">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-white/30 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
