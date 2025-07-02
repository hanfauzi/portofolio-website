import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "design4users.com", // ✅ finance dashboard
      "clarylifeglobal.com", // ✅ real estate platform
      "preview.redd.it", // ✅ resume builder
      "miro.medium.com", // ✅ LMS for EduPro
      "encrypted-tbn0.gstatic.com", 
      "mir-s3-cdn-cf.behance.net",
      "images.ctfassets.net"// ✅ restaurant booking & analytics dashboard (sama domain)
    ],
  },
};
export default nextConfig;
