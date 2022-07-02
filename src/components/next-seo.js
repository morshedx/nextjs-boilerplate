import { NextSeo } from 'next-seo';

const Seo = () => {
  return (
    <NextSeo
      title="MotionView – Largest Xiaomi Online Shop in Bangladesh"
      description="A short description goes here."
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon-32x32.jpg',
        },
      ]}
    />
  );
};

export default Seo;
