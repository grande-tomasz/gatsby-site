/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: HelmetProps['meta'] | object;
  link?: HelmetProps['link'] | object;
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
            link
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
      content: `${site.siteMetadata.link}/thumbnail.jpg`,
    },
    {
      property: 'og:url',
      content: site.siteMetadata.link,
    },
  ];

  const twitterMetaTags: HelmetProps['meta'] = [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: site.siteMetadata.link,
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
      content: `${site.siteMetadata.link}/thumbnail.jpg`,
    },
  ];

  const defaultLinkTags: HelmetProps['link'] = [
    {
      rel: 'canonical',
      href: 'http://mysite.com/example',
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
        ...(meta as any),
      ]}
      link={[...defaultLinkTags, ...(link as any)]}
      // style
      // script
      // noscript
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  link: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
