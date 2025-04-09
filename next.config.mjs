/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/في-علاقته-بنفسه',
        destination: '/relation-with-self',
      },
      {
        source: '/في علاقته بالآخرين(الأقران والمعلّمين)',
        destination: '/relation-with-others',
      },
      {
        source: '/في علاقته بالممتلكات العامة',
        destination: '/relation-with-public-property',
      },
    ];
  }
 
};

export default nextConfig;