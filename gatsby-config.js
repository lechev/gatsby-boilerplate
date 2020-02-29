/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Nikolay Lechev",
    titleTemplate: "%s · Front-end Design and Development",
    description: "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
  ],
}
