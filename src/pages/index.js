import React from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Cursor from "../components/cursor"

import Img from "gatsby-image"
import PageTransition from "gatsby-plugin-page-transitions"

import { graphql } from "gatsby"

export default ({ data }) => (
  <PageTransition
    // defaultStyle={{
    //   transform: `scale(1)`,
    //   transition: `transform .2s ease`,
    // }}
    // transitionStyles={{
    //   entering: { transform: `scale(1)` },
    //   entered: { transform: `scale(1)` },
    //   exiting: { transform: `scale(0.8)` },
    // }}
    transitionTime={500}
  >
    <React.Fragment>
      <Hero />
      <Intro />

      <Img fluid={data.imgMain.childImageSharp.fluid} />
    </React.Fragment>

    <Cursor />
  </PageTransition>
)


export const query = graphql`
query {
  imgMain: file(
    sourceInstanceName: { eq: "images" }
    relativePath: { eq: "main-image.jpg" }
  ) {
    childImageSharp {
      fluid(maxWidth: 650) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
