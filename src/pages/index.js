import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

import { rem } from "polished"
// import { graphql } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })``

const ContainerInner = styled.div`
  ${props => props.theme.gridContainer()};

  display: flex;
  min-height: 100vh;
  height: 100vh;
  align-items: flex-end;
  justify-content: flex-end;
`

const Content = styled.div`
  ${props => props.theme.gridCell(8)};
  
  padding-bottom: 15vh;

  @media ${props => props.theme.mediumDown} {
    ${props => props.theme.gridCell(12)};
  }

  p {
    margin-top: ${rem(18)};
    color: ${props => props.theme.colorIvory};
  }
`

export default ({ data }) => (
  <Container>
    <ContainerInner>
      <Content>
        <h1>Try and test. Often.</h1>
        <p class="-lead">This is a digital playground for Kollegorna experiments.</p>
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
