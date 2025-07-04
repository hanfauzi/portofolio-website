import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: [
      "design4users.com",        // ✅ finance dashboard
      "clarylifeglobal.com",     // ✅ real estate platform
      "preview.redd.it",         // ✅ resume builder
      "miro.medium.com",         // ✅ LMS for EduPro
      "encrypted-tbn0.gstatic.com",
      "mir-s3-cdn-cf.behance.net",
      "images.ctfassets.net"     // ✅ restaurant booking & analytics dashboard
    ],
  },
};

export default nextConfig;
