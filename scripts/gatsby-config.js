module.exports = {
  siteMetadata: {
    title: `KnowGraphs`,
    description: `The overall objective of KnowGraphs is to scale KGs to be accessible to a wide audience of users across multiple domains including companies of all sizes and even end users.`,
    author: `@KnowGraphs`,
  },
  plugins: [
    // RDF processing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rdfData`,
        path: `${__dirname}/../data`,
      },
    },
    `gatsby-transformer-rdf`,

    // mdx processing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/../pages`,
      },
    },
    `gatsby-plugin-mdx`,

    // svg inlining
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    // sass support
    `gatsby-plugin-sass`,

    // styled-jsx support
    `gatsby-plugin-styled-jsx`,

    // default gatsby plugins
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#50b4c8`,
        theme_color: `#50b4c8`,
        display: `minimal-ui`,
        icon: `../images/kg-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
