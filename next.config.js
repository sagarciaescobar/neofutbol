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
      "/": { page: "/" },
      "/gallery": { page: "/gallery" },
    };
  },
};

module.exports = nextConfig;
