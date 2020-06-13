import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

// import { graphql } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })`
  overflow: hidden;
  min-height: 100vh;
  height: 100vh;
  background: ${props => props.theme.colorBlack};
  color: ${props => props.theme.colorWhite};
`

export default ({ data }) => (
  <Container>
    <h1>Hello Gatsby</h1>
    <p>What a world.</p>
    {/* <Img fluid={data.imgMain.childImageSharp.fluid} /> */}
  </Container>
)

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
