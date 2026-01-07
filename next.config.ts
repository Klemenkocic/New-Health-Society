import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/New-Health-Society',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
