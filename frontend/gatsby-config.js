require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Fitness Republic UK',
    siteUrl: 'https://www.fitnessrepublic.co.uk',
    author: 'Thomas Sweeney',
    description: 'Fitness Republic is the premiere family run gym in Ashby De La Zouch, England',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [

            'Source Sans Pro\:100,200,300,500,700,900'

        ],
      },
    },
     {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `s1k3b826`,
        dataset: `production`,
        watchMode: `true`,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-background-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fitness Republic UK',
        short_name: 'fruk',
        start_url: '/',
        background_color: '#ccc',
        theme_color: '#FF7F00',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },

{
    resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-45461666-1',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },

  ],
}
