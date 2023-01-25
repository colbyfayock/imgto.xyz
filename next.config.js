/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // TODO: add TS to Cloudinary Provider
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig