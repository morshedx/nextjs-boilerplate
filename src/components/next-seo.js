import { NextSeo } from 'next-seo';

import React from 'react';

const Seo = () => {
  return (
    <NextSeo
      title="MotionView – Largest Xiaomi Online Shop in Bangladesh"
      description="A short description goes here."
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://motionview.com.bd/wp-content/uploads/2021/06/cropped-mi-32x32.jpg',
        },
      ]}
    />
  );
};

export default Seo;
