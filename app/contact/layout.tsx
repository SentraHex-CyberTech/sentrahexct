import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SentraHex CyberTech | GRC & Website Consultation",
  description: "Contact SentraHex CyberTech to discuss ISO 27001 ISMS, ISO 42001 AIMS, DPDPA compliance, governance support, or professional website development in India.",
  keywords: ["contact SentraHex", "GRC consulting contact", "website development inquiry", "ISO 27001 consultation"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
