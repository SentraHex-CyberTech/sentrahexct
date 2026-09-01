"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const grcLinks = [
  { href: "/grc/isms", label: "ISMS", code: "ISO/IEC 27001", comingSoon: false },
  { href: "/grc/aims", label: "AIMS", code: "ISO/IEC 42001", comingSoon: false },
  { href: "/grc/pims", label: "PIMS", code: "ISO/IEC 27701", comingSoon: true },
];

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/web-development", label: "Website Development" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [grcOpen, setGrcOpen] = useState(false);
  const [mobileGrcOpen, setMobileGrcOpen] = useState(false);
  const grcRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (grcRef.current && !grcRef.current.contains(e.target as Node)) {
        setGrcOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const openGrc = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setGrcOpen(true);
  };
  const closeGrc = () => {
    closeTimer.current = setTimeout(() => setGrcOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isGrcActive = pathname.startsWith("/grc");
  const transparent = !scrolled;

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-200 px-1 py-0.5 ${
      active
        ? transparent ? "text-white" : "text-text-primary"
        : transparent
          ? "text-white/65 hover:text-white"
          : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/favicon.ico" alt="SentraHex CyberTech" className="h-8 w-8 object-contain" />
          <div className="flex flex-col leading-none">
            <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${
              transparent ? "text-white" : "text-text-primary"
            }`}>
              Sentra<span className={transparent ? "text-white/60" : "text-accent"}>Hex</span>
            </span>
            <span className={`text-[9px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              transparent ? "text-white/35" : "text-text-muted"
            }`}>
              CyberTech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className={linkClass(isActive("/"))}>Home</Link>

          {/* GRC Dropdown */}
          <div ref={grcRef} className="relative">
            <button
              onMouseEnter={openGrc}
              onMouseLeave={closeGrc}
              onClick={() => setGrcOpen((o) => !o)}
              className={`${linkClass(isGrcActive)} flex items-center gap-1`}
            >
              GRC
              <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${grcOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              onMouseEnter={openGrc}
              onMouseLeave={closeGrc}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-68 bg-surface border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-150 ${
                grcOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              {/* Invisible bridge over the mt-2 gap */}
              <div className="absolute -top-2 left-0 w-full h-2" />

              <div className="p-2">
                <Link href="/grc"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-alt transition-colors"
                >
                  All GRC Services &rarr;
                </Link>
              </div>
              <div className="border-t border-border p-2">
                {grcLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className={`flex items-start justify-between px-3 py-2.5 rounded-md transition-colors ${
                      pathname.startsWith(link.href) ? "bg-accent-subtle" : "hover:bg-surface-alt"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-text-primary">{link.label}</span>
                        {link.comingSoon && <span className="badge-soon">Soon</span>}
                      </div>
                      <div className="text-xs text-text-muted mt-0.5">{link.code}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}

          <ThemeToggle transparent={transparent} className="ml-1" />

          <Link href="/contact"
            className={`btn-primary !py-2 !px-4 !text-sm ${
              transparent ? "!bg-white !text-[#111827] !border-white hover:!opacity-90" : ""
            }`}
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle transparent={transparent} />

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
              isOpen ? "bg-surface-alt" : ""
            }`}
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col gap-1.5">
              {[0,1,2].map((i) => (
                <span key={i} className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                  isOpen
                    ? i === 0 ? "translate-y-2 rotate-45 bg-text-primary"
                    : i === 1 ? "opacity-0 bg-text-primary"
                    : "-translate-y-2 -rotate-45 bg-text-primary"
                    : scrolled ? "bg-text-primary" : "bg-white"
                }`} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-surface transition-all duration-300 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex h-full flex-col overflow-y-auto pt-20 pb-8 px-6">
          <Link href="/" className="py-3 text-lg font-semibold text-text-primary border-b border-border">
            Home
          </Link>

          <div className="border-b border-border">
            <button
              onClick={() => setMobileGrcOpen((o) => !o)}
              className="w-full flex items-center justify-between py-3 text-lg font-semibold text-text-primary"
            >
              GRC
              <svg className={`h-4 w-4 transition-transform text-text-muted ${mobileGrcOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileGrcOpen && (
              <div className="pb-3 space-y-1">
                <Link href="/grc" className="block py-2 pl-4 text-sm font-medium text-accent">
                  All GRC Services
                </Link>
                {grcLinks.map((link) => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center justify-between py-2 pl-4"
                  >
                    <div>
                      <div className="text-sm font-medium text-text-primary">{link.label}</div>
                      <div className="text-xs text-text-muted">{link.code}</div>
                    </div>
                    {link.comingSoon && <span className="badge-soon">Soon</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href}
              className="py-3 text-lg font-semibold text-text-primary border-b border-border"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-auto pt-6">
            <Link href="/contact" className="btn-primary w-full justify-center !py-3 !text-base">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
