import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "SentraHex CyberTech | GRC, ISO 27001 & AI Governance",
    template: "%s | SentraHex CyberTech",
  },
  description:
    "SentraHex CyberTech helps organizations implement ISO/IEC 27001 ISMS, ISO/IEC 42001 AI governance, and build professional websites. Practical GRC consulting based in India.",
  keywords: ["ISO 27001","ISMS","ISO 42001","AIMS","AI governance","ISO 27701","PIMS","GRC","information security management","SentraHex","website development","India"],
  metadataBase: new URL("https://sentrahexct.in"),
  alternates: { canonical: "https://sentrahexct.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://sentrahexct.in",
    siteName: "SentraHex CyberTech",
    title: "SentraHex CyberTech | GRC, ISO 27001 & AI Governance",
    description: "Practical governance, compliance and digital solutions for organizations navigating information security and AI.",
    images: [{ url: "https://sentrahexct.in/og-image.jpg", width: 1200, height: 630, alt: "SentraHex CyberTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SentraHex CyberTech | GRC, ISO 27001 & AI Governance",
    description: "Practical GRC consulting: ISO 27001, ISO 42001, and professional website development.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "SentraHex CyberTech",
    description: "GRC consulting and digital solutions: ISO 27001 ISMS, ISO 42001 AIMS, and professional website development",
    url: "https://sentrahexct.in",
    logo: "https://sentrahexct.in/favicon.ico",
    foundingDate: "2024", areaServed: "IN",
    contactPoint: { "@type": "ContactPoint", contactType: "Customer Service", email: "sales@sentrahexct.in", url: "https://sentrahexct.in/contact" },
    sameAs: ["https://linkedin.com/company/sentrahexct"],
  };

  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme === 'dark' || (!theme && supportDark)) {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
