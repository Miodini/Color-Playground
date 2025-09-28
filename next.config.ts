import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/color-playground/',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/color-playground/',
  output: 'export'
};

export default nextConfig;
