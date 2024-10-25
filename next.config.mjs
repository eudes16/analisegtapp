/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    crossOrigin: 'use-credentials',
    experimental: {
        serverActions: {
            allowedOrigins: ['xbl.io',],
        },
    },
    images: {
        domains: [
            'store-images.s-microsoft.com',
            'images-eds.xboxlive.com',
            "store-images.microsoft.com",
            "images-eds-ssl.xboxlive.com",
        ],
    },
};

export default nextConfig;
