import { DefaultSeo } from 'next-seo';
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
      <Component {...pageProps} />
    </>
  );
};

export default App;
