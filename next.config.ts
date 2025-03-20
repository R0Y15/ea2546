import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    // Add specific resolution for date-fns modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'date-fns/locale': require.resolve('date-fns/locale'),
      'date-fns/locale/en-US': require.resolve('date-fns/locale/en-US'),
    };
    return config;
  },
};

export default nextConfig;
