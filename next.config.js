/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/gallery': { page: '/gallery' },
      '/user/tokens/1': { page: '/user/tokens/[id]' },
      '/user/tokens/2': { page: '/user/tokens/[id]' },
      '/user/tokens/3': { page: '/user/tokens/[id]' },
      '/user/tokens/4': { page: '/user/tokens/[id]' },
      '/user/tokens/5': { page: '/user/tokens/[id]' },
      '/user/tokens/6': { page: '/user/tokens/[id]' },
      '/user/tokens/7': { page: '/user/tokens/[id]' },
      '/user/tokens/8': { page: '/user/tokens/[id]' },
      '/user/tokens/9': { page: '/user/tokens/[id]' },
      '/user/tokens/10': { page: '/user/tokens/[id]' },
      '/user/tokens/11': { page: '/user/tokens/[id]' },
    };
  },
};

module.exports = nextConfig;
