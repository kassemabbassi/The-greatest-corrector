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
      {
        source:'/في مجال العقيدة',
        destination:'/relation-with-creed',
      },
      {
        source:'/في علاقته بالكتب السماويّة',
        destination:'/relation-with-heavenly-books',
      },
      {
        source:"/صفات الله",
        destination:"/attributes-of-god",
      },
      {
        source:"/صنع الله",
        destination:"/creation-of-god",
      },
      {
        source:"/الرسل",
        destination:"/the-messengers",
      }
    ];
  }
 
};

export default nextConfig;