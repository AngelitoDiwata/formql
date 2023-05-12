/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    transpilePackages: ['antd']
}

module.exports = nextConfig