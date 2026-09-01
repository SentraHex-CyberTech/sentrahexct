import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="alternate"; type="text/plain"; title="LLM Content", </.well-known/llms.txt>; rel="alternate"; type="text/plain"; title="LLM Content"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
