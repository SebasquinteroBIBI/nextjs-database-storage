/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        reactStrictMode: true
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
}
module.exports = nextConfig
