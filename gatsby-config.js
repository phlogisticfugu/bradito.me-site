module.exports = {
  pathPrefix: `/bradito.me-site/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Brad Ito - personal site',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-D12TFQCZTV'
        ],
        pluginConfig: {
          head: true
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
