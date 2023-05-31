/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'freepnglogos.com',
        },
    ],
    // env: {
    //     api-key: 'my-value',
    //   },
    },
}

module.exports = nextConfig
