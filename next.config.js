/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploads-ssl.webflow.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
