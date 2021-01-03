const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Fitness Republic UK',
    author: 'Thomas Sweeney',
    description: 'Fitness Republix is the premiere family run gym in Ashby De La Zouch, England',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
