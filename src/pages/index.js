import React from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
// import { divide } from "lodash"
// import Img from "gatsby-image"

// import { graphql } from "gatsby"

export default ({ data }) => (
  <React.Fragment>
    <Hero title="Try and test. Often." />

    <Intro />
  </React.Fragment>
)

{/* <Img fluid={data.imgMain.childImageSharp.fluid} /> */}

// export const query = graphql`
// query {
//   imgMain: file(
//     sourceInstanceName: { eq: "images" }
//     relativePath: { eq: "main-image.jpg" }
//   ) {
//     childImageSharp {
//       fluid(maxWidth: 650) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `
