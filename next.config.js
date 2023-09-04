/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.digimoncard.io',
        port: '',
        pathname: '/images/cards/**',
      },
    ],
  },
}

module.exports = nextConfig
