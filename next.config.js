/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    transpilePackages: ['antd'],
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig