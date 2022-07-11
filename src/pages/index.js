import { Fragment } from 'react';
import NextSeo from 'components/next-seo';

const Home = () => {
  return (
    <Fragment>
      <NextSeo />
      <h1 className="text-3xl font-bold underline">Hello world! with TailwindCSS</h1>
    </Fragment>
  );
};
export default Home;
