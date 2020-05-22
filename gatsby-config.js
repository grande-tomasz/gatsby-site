/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'Gatsby',
    url: 'http://mysite.com',
    image: '/thumbnail.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: process.env.GOOGLE_TAGMANAGER_ID,
    //   },
    // },
  ],
};
