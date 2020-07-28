module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Stellar by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Stellar by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'imRex',
        short_name: 'starter',
        start_url: '/',
        background_color: '#3a6073',
        theme_color: '#3a6073',
        display: 'minimal-ui',
        icon: 'src/assets/images/profile.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
