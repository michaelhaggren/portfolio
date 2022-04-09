/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  domains: ['media.giphy.com'],
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
