// next.config.js
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/website-new',
    assetPrefix: '/website-new',
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
