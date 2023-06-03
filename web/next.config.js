/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.25',
        port: '3333',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
