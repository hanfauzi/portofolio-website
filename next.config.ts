import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

export default nextConfig;
