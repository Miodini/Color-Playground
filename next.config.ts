import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blend",
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
