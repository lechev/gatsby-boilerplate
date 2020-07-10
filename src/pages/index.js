import React from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Cursor from "../components/cursor"

import Img from "gatsby-image"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import { graphql } from "gatsby"

export default ({ data }) => (
  <React.Fragment>
    <PageTransition
      defaultStyle={{
        transition: 'transform 500ms ease, opacity 500ms ease',
        transform: 'translate3d(0, 2.5vh, 0) scale(0.95)',
        opacity: 0.5,
      }}
      transitionStyles={{
        entering: { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1, },
        entered: { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1, },
        exiting: { transform: 'translate3d(0, 2.5vh, 0) scale(0.95)', opacity: 0.5, },
      }}
      transitionTime={500}
    >
      <Hero />
      <Intro />

      <Img fluid={data.imgMain.childImageSharp.fluid} />    
    </PageTransition>
    <Cursor />
  </React.Fragment>
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
