/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_API: 'https://xdr.veganblessing.com/graphql',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xdr.veganblessing.com',
      },
    ],
  },
}

module.exports = nextConfig
