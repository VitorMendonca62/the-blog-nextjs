/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview--blog-scribe-header-craft.lovable.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
