import React from "react"
import styled from "styled-components"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};
`

const Intro = () => (
  <Container id="intro">
    Test
  </Container>
)

export default Intro
