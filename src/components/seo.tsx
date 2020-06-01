/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'];
  link?: HelmetProps['link'];
  title: HelmetProps['title'];
};

const SEO: FunctionComponent<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  link = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const standardMetaTags: HelmetProps['meta'] = [
    {
      name: 'description',
      content: metaDescription,
    },
  ];

  const openGraphMetaTags: HelmetProps['meta'] = [
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:image',
      content: `${site.siteMetadata.url}${site.siteMetadata.image}`,
    },
    {
      property: 'og:url',
      content: site.siteMetadata.url,
    },
  ];

  const twitterMetaTags: HelmetProps['meta'] = [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: site.siteMetadata.url,
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:image',
      content: `${site.siteMetadata.url}${site.siteMetadata.image}`,
    },
  ];

  return (
    <Helmet
      // base
      htmlAttributes={{
        lang,
      }}
      // bodyAttributes
      defaultTitle={`${site.siteMetadata.title}`}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      title={title}
      meta={[
        ...standardMetaTags,
        ...openGraphMetaTags,
        ...twitterMetaTags,
        ...meta,
      ]}
      link={link}
      // style
      // script
      // noscript
    />
  );
};

export default SEO;
