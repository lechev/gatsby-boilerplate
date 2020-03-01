import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { rem } from "polished"
import { graphql } from "gatsby"

import logoSvgUrl, {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const Container = styled.section.attrs({ className: `styled` })`
  .-svg-logo {
    display: block;
    margin: ${rem(20)} ${rem(5)};
    width: ${rem(60)};
    height: ${rem(60)};
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
