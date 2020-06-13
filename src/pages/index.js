import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

import { rem } from "polished"
// import { graphql } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })`
  background: ${props => props.theme.colorBlack};
`

const ContainerInner = styled.div`
  min-height: 100vh;
  height: 100vh;
  ${props => props.theme.gridContainer()};
  color: ${props => props.theme.colorWhite};
  padding-top: ${rem(100)};
`

const Content = styled.div`
  ${props => props.theme.gridCell(8)};
`

export default ({ data }) => (
  <Container>
    <ContainerInner>
      <Content>
        <h1>Try and test. Often.</h1>
        <p>This is a digital playground for Kollegorna experiments.</p>
      </Content>
    </ContainerInner>
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
