/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about/aboutUs',
        permanent: true, // HTTP 301 (good for SEO)
      },
    ];
  },
  images: {
    domains: ['v0.blob.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
