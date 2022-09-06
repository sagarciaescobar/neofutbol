/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
     '/': {page:'/'},
     '/gallery': {page:'/gallery'},
    }
  }
};

module.exports = nextConfig;
