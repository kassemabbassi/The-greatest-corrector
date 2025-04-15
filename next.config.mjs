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
      ,{
        source:"/الصوم، الحج، والزكاة",
        destination:"/Fasting-Pilgrimage-and-Almsgiving"
      }
      ,
      {
        source:"/الوضوء والتيمم",
        destination:"/Ablution-and-dry-ablution"
      },
      {
        source:"/الصلوات، مبطلاتها، وقضاء الفوائت",
        destination:"/Prayer-its-invalidators-and-missed-prayers" 
      },
      {
        source: "/آداب الطريق، الزيارة، الاستئذان، والأكل",
        destination: "/Etiquette-in-Daily-Life"
      },
      {
        source: "/صلة الرحم",
        destination: "/Maintaining-family-ties"
      },
      {
        source: "/العمل والجد",
        destination: "/Work-and-diligence"
      },
      {
        source:"/قيم الأمانة، التعاون، الصدق، والإخلاص",
        destination:"/integrity-cooperation-honesty-sincerity"
      },
      {
        source: "/مفهوم الخشوع",
        destination: "/understanding-Khushu"
      },
      {
        source: "/آداب التلاوة",
        destination: "/quran-recitation-etiquette"
      },
    ];
  }
 
};

export default nextConfig;