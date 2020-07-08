import React from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Img from "gatsby-image"

import { graphql } from "gatsby"

export default ({ data }) => (
  <React.Fragment>
    <Hero />
    <Intro />

    <Img fluid={data.imgMain.childImageSharp.fluid} />
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
