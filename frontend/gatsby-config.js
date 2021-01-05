const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Fitness Republic UK',
    author: 'Thomas Sweeney',
    description: 'Fitness Republix is the premiere family run gym in Ashby De La Zouch, England',
  },
  plugins: [
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
    resolve: 'gatsby-plugin-gdpr-tracking',
      options: {
        // logging to the console, if debug is true
        debug: true,
        googleAnalytics: {
            // The property ID; the tracking code won't be generated without it.
            trackingId: 'UA-45461666-1',
            // Defines it google analytics should be started with out the cookie consent
            autoStart: false, // <--- default
            // Setting this parameter is optional
            anonymize: true, // <--- default
            // Name of the cookie, that enables the tracking if it is true
            controlCookieName: 'gdpr-analytics-enabled', // <--- default
            cookieFlags: 'secure;samesite=none' // <--- default
        }
      }
    },
  ],
}
