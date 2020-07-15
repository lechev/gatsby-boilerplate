import React from "react"
import styled from "styled-components"

import { rem } from "polished"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};

  padding-top: ${rem(90)};
  padding-bottom: ${rem(180)};
`

const ContainerInner = styled.div`
  ${props => props.theme.gridCell(8)};
`

const Hero = () => (
  <Container>
    <ContainerInner>
      <h1>About.</h1>
      <p className={`-lead`}>This is a Kollegorna personal development project. It’s built inhouse and it’s only reason to exist is for experimental purposes.</p>
    </ContainerInner>
  </Container>
)

export default Hero
