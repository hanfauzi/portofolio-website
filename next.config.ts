import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Picks up src/i18n/request.ts.
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // 90 is for the hero portrait; Next 16 only serves qualities listed here.
    qualities: [75, 90],
    remotePatterns: [
      { hostname: "design4users.com" },
      { hostname: "clarylifeglobal.com" },
      { hostname: "preview.redd.it" },
      { hostname: "miro.medium.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "mir-s3-cdn-cf.behance.net" },
      { hostname: "images.ctfassets.net" },
    ],
  },
};

export default withNextIntl(nextConfig);
