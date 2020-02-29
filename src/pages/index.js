import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import logoSvgUrl, {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const Container = styled.section`
  .-svg-logo {
    margin: 20px 5px;
    width: 60px;
    height: 60px;
  }
`
export default ({ data }) => (
  <Container>
    <h1>Hello Gatsby</h1>
    <p>What a world.</p>
    <Img fluid={data.imgMain.childImageSharp.fluid} />

    <LogoSvg aria-label="Logo inlined" className="-svg-logo" />

    <img src={logoSvgUrl} alt="Logo via Img tag" className="-svg-logo" />
  </Container>
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
