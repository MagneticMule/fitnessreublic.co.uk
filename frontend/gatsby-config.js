const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Fitness Republic UK',
    siteUrl: 'https://www.fitnessrepublic.co.uk',
    author: 'Thomas Sweeney',
    description: 'Fitness Republic is the premiere family run gym in Ashby De La Zouch, England',
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fitness Republic UK',
        short_name: 'fruk',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
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
