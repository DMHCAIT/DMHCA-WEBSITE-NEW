import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/top-medical-courses/:slug',
        destination: '/courses/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
