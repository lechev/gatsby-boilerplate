/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

const lang = `en`
const name = `Nikolay Lechev`
const shortName = `Nikolay Lechev`
const title = `Product Designer and Developer`
const titlePattern = `[SITE_NAME] · [PAGE_TITLE]`
const description = `I’m Nikolay, a product designer who can code. I help startups shape, build, and scale their digital products.`
const colorMain = `#333333`
const colorBg = `#fbe8de`
const socialImage = `/meta-images/social.jpg`
const icon = `/meta-images/icon-transparent.png` // favicon, ms tile
const iconBgColor = colorBg
const iconWithBg = `/meta-images/icon-with-bg.png` // apple touch, webmanifest
const favIcon = icon
const maskIcon = `/meta-images/mask-icon.svg` // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
const maskIconColor = colorMain
const fbAppId = ``
const twitterHandle = `@iamlechev`
const robotsNoFollow = false
const robotsNoIndex = false

module.exports = {
  siteMetadata: {
    lang,
    name,
    title,
    titlePattern,
    description,
    socialImage,
    fbAppId,
    twitterHandle,
    icon,
    iconBgColor,
    favIcon,
    maskIcon,
    maskIconColor,
    robotsNoFollow,
    robotsNoIndex,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: lang,
        name: name,
        short_name: shortName,
        description: description,
        theme_color: colorMain,
        background_color: colorBg,
        icon: `static${iconWithBg}`,
        include_favicon: false, // carried out via `components/meta` instead
        start_url: `/`,
        display: `minimal-ui`,
        cache_busting_mode: `name`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`node_modules`],
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        prettier: true,
        svgo: true, // configured in .svgo.yml file
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
