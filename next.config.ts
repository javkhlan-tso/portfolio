import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
