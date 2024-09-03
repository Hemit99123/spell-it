/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      serverActions: true,
    },
    // Ensure that Next.js can handle API routes for Next Auth
    async rewrites() {
      return [
        {
          source: '/api/auth/:path*',
          destination: '/api/auth/:path*',
        },
      ]
    },
  };
  
  module.exports = nextConfig;