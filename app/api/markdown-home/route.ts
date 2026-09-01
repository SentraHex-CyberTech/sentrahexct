export async function GET() {
  const markdown = `# SentraHex CyberTech

SentraHex CyberTech helps organizations in India implement practical governance, risk, and compliance programs, including ISO/IEC 27001 ISMS, ISO/IEC 42001 AIMS, DPDPA compliance, policy development, and professional website development.

## Services
- ISO/IEC 27001 ISMS implementation support
- ISO/IEC 42001 AI governance and management system support
- DPDPA compliance and privacy governance support
- Policy development and compliance documentation
- Professional website development for businesses and organizations

## Contact
- Website: https://sentrahexct.in/
- Contact: https://sentrahexct.in/contact
- Email: sales@sentrahexct.in
`;

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
