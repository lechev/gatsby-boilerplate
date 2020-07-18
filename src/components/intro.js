import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Feat from "./feat"

import DesignIcon from "../assets/images/icons/pen-ruller.svg"
import CodeIcon from "../assets/images/icons/terminal.svg"

import { StaticQuery, graphql } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};
`

const Intro = ({ data }) => (
  <Container id="intro">
    <Feat
      title={`Design`}
      icon={DesignIcon}
      copy={`Design it like you mean it. In Figma. But feel free to use Sketch. Oh and don’t use Photoshop it sucks somewhat, sometimes, most of the times.`}
      cta={`View in Figma`}
      ctaLink={`https://www.kollegorna.se/`}
      image={data.imgDisplay.childImageSharp.fluid}
      reverseCursor
      accent
    />

    <Feat
      title={`Code`}
      icon={CodeIcon}
      copy={`Playground caters to your needs. If you want to dump a design on it or a gatsby plugin to test out — go right ahead old sport.`}
      cta={`Go to the repo`}
      ctaLink={`https://www.kollegorna.se/`}
      image={data.imgKeyboard.childImageSharp.fluid}
      reverseCursor
    />
  </Container>
)

Intro.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query IntroQuery {
        imgKeyboard: file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "keyboard.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 728) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imgDisplay: file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "display.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 728) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Intro data={data} {...props} />}
  />
)
