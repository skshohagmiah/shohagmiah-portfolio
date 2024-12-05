import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        hostname:'fakeimg.pl'
      },
      {
        hostname:'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;
