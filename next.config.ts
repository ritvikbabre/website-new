import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Replace 'your-repo-name' with your actual repository name
    basePath: '/website-new',
    assetPrefix: '/website-new',
    // Disable server-side features since we're deploying to GitHub Pages
    typescript: {
        ignoreBuildErrors: true,
    }
}

export default nextConfig

