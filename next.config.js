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
      "/user/tokens/[id]": { page: "/user/tokens/[id]" },
    };
  },
};

module.exports = nextConfig;
