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
      '/user/tokens/1': { page: '/user/tokens/1' },
      '/user/tokens/2': { page: '/user/tokens/2' },
      '/user/tokens/3': { page: '/user/tokens/3' },
      '/user/tokens/4': { page: '/user/tokens/4' },
      '/user/tokens/5': { page: '/user/tokens/5' },
      '/user/tokens/6': { page: '/user/tokens/6' },
      '/user/tokens/7': { page: '/user/tokens/7' },
      '/user/tokens/8': { page: '/user/tokens/8' },
      '/user/tokens/9': { page: '/user/tokens/9' },
      '/user/tokens/10': { page: '/user/tokens/10' },
      '/user/tokens/11': { page: '/user/tokens/11' },
      '/user/tokens/12': { page: '/user/tokens/12' },
      '/user/tokens/13': { page: '/user/tokens/13' },
      '/user/tokens/14': { page: '/user/tokens/14' },
      '/user/tokens/15': { page: '/user/tokens/15' },
      '/user/tokens/16': { page: '/user/tokens/16' },
      '/user/tokens/17': { page: '/user/tokens/17' },
    };
  },
};

module.exports = nextConfig;
