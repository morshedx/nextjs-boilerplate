import { DefaultSeo } from 'next-seo';
import Layout from 'components/layout';
import 'styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Next js Boilerplate with tailwindcss"
        description="This is an nextjs Boilerplate with tailwindcss"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://motionview.com.bd',
          site_name: 'MotionView',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
