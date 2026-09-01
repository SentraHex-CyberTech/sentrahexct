import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  applicationName: "SentraHex CyberTech",
  authors: [{ name: "SentraHex CyberTech" }],
  creator: "SentraHex CyberTech",
  publisher: "SentraHex CyberTech",
  title: {
    default: "SentraHex CyberTech | GRC Consulting in India | ISO 27001 & AI Governance",
    template: "%s | SentraHex CyberTech",
  },
  description:
    "SentraHex CyberTech helps organizations in India implement ISO/IEC 27001 ISMS, ISO/IEC 42001 AIMS, DPDPA compliance, and professional websites with practical governance and risk support.",
  keywords: [
    "GRC consulting India",
    "ISO 27001 consultant India",
    "ISMS implementation",
    "ISO 42001 AI governance",
    "AIMS consulting",
    "DPDPA compliance India",
    "data protection compliance",
    "AI governance consulting",
    "privacy compliance",
    "website development India",
    "SentraHex CyberTech",
    "ISO 27701",
    "PIMS",
    "information security management",
  ],
  metadataBase: new URL("https://sentrahexct.in"),
  alternates: { canonical: "https://sentrahexct.in" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sentrahexct.in",
    siteName: "SentraHex CyberTech",
    title: "SentraHex CyberTech | GRC Consulting in India | ISO 27001 & AI Governance",
    description: "Practical governance, risk, compliance, and digital solutions for businesses navigating information security, AI governance, and data protection in India.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SentraHex CyberTech" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sentrahexct",
    creator: "@sentrahexct",
    title: "SentraHex CyberTech | GRC Consulting in India",
    description: "ISO 27001, ISO 42001, DPDPA compliance, and professional website development support for modern organizations.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "SentraHex CyberTech",
        description: "GRC consulting and digital solutions for information security, AI governance, data protection, and professional website development.",
        url: "https://sentrahexct.in",
        logo: "https://sentrahexct.in/favicon.ico",
        foundingDate: "2024",
        areaServed: "IN",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "sales@sentrahexct.in",
          url: "https://sentrahexct.in/contact",
        },
        sameAs: ["https://linkedin.com/company/sentrahexct"],
      },
      {
        "@type": "WebSite",
        name: "SentraHex CyberTech",
        url: "https://sentrahexct.in",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://sentrahexct.in/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
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
