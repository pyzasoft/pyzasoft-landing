import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // (optional) Set your desired output configuration
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
