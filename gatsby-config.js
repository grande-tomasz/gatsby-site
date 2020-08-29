// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Custom Project',
    description: 'Gatsby Custom Project',
    author: 'Tomasz Grande',
    url: 'http://grande-tomasz.netlify.app',
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
        name: 'gatsby-site',
        short_name: 'gatsby-site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/gatsby-site.png',
        icons: [
          {
            src: '/images/gatsby-site.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: true,
      },
    },
  ],
};
