/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/في-علاقته-بنفسه',
        destination: '/relation-with-self',
      },
    ];
  }
};

export default nextConfig;