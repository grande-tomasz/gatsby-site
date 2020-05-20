import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage: () => JSX.Element = () => (
  <Layout>
    <SEO
      title="Page two"
      description="Page two description"
      meta={[
        {
          name: 'twitter:image:alt',
          content: 'Page two description',
        },
      ]}
    />
    <h1>Hi from the page 2</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
