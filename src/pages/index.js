import { Fragment } from 'react';
import NextSeo from 'components/next-seo';
import Header from 'components/header/header';
import styles from 'styles/Home.module.css';

const Home = () => {
  return (
    <Fragment>
      <NextSeo />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </Fragment>
  );
};
export default Home;
