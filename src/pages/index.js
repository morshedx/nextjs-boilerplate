import { Fragment } from 'react';
import NextSeo from 'components/next-seo';
import Select from 'components/ui/select';

const Home = () => {
  return (
    <Fragment>
      <NextSeo />
      <h1 className="text-3xl font-bold underline">Hello world! with TailwindCSS</h1>
      <Select />
    </Fragment>
  );
};
export default Home;
