import { DefaultSeo } from 'next-seo';
import Layout from 'layout';
import 'styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
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
