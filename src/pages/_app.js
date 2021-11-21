import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import 'styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://motionview.com.bd',
          site_name: 'MotionView',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
