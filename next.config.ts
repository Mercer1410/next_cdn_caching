import type { NextConfig } from "next";

const CDN_URL = process.env.CDN_URL || '';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  assetPrefix: CDN_URL || undefined,
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: './lib/cdn-loader.ts',
    remotePatterns: CDN_URL
      ? [
          {
            protocol: 'https',
            hostname: new URL(CDN_URL).hostname,
          }
        ]
      : []

  }
};

export default nextConfig;
