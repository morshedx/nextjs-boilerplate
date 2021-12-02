import { Fragment } from 'react';
import { Heading } from '@chakra-ui/react';
import NextSeo from 'components/next-seo';
import Header from 'components/header/header';
import styles from 'styles/Home.module.css';

const Contact = () => {
  return (
    <Fragment>
      <NextSeo />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading as="h1" className={styles.title}>
            This is Contact Page
          </Heading>
        </main>
      </div>
    </Fragment>
  );
};
export default Contact;
