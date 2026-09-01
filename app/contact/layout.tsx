import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SentraHex CyberTech to discuss GRC services (ISMS, AIMS, PIMS) or website development. Based in India.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
