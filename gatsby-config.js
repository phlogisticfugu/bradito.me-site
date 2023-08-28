module.exports = {
  pathPrefix: `/bradito.me-site/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Brad Ito - personal site',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'bradito.me - personal site of Brad Ito',
        short_name: 'bradito.me',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
        cache_busting_mode: 'none',
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
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-offline',
      options: { // https://www.npmjs.com/package/gatsby-plugin-manifest
         workboxConfig: {
            globPatterns: ['**/icon-path*']
         }
      }
    },
  ],
};
