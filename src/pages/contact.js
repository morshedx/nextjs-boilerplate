import { Fragment } from 'react';
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
          <h1 className={styles.title}>This is Contact Page</h1>
        </main>
      </div>
    </Fragment>
  );
};
export default Contact;
