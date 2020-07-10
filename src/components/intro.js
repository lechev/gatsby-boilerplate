import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};
`

const Intro = ({ data }) => (
  <Container id="intro">
    <Img fluid={data.imgMain.childImageSharp.fluid} />
  </Container>
)

Intro.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query IntroQuery {
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
    `}
    render={data => <Intro data={data} {...props} />}
  />
)
