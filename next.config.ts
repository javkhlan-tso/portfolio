import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
