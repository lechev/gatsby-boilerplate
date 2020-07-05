import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as SvgIcon,
} from "../assets/images/icons/arrow-down.svg"

const Container = styled.section.attrs({ className: `styled` })``

const ContainerInner = styled.div`
  ${props => props.theme.gridContainer()};
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: flex-end;
  min-height: 100vh;
  height: 100vh;
  padding-bottom: 15vh;
`

const Cta = styled.div`
  ${props => props.theme.gridCell(4)};

  @media ${props => props.theme.mediumDown} {
    ${props => props.theme.gridCell(12)};
  }

  svg {
    fill: none;
    width: ${rem(122)};
    height: ${rem(122)};
  }
`

const Content = styled.div`
  ${props => props.theme.gridCell(8)};

  @media ${props => props.theme.mediumDown} {
    ${props => props.theme.gridCell(12)};
  }

  p {
    margin-top: ${rem(18)};
    color: ${props => props.theme.colorIvory};
  }
`

const Hero = ({ title }) => (
  <Container>
    <ContainerInner>
      <Content>
        <h1>{title}</h1>
        <p className={`-lead`}>This is a digital playground for Kollegorna experiments.</p>
      </Content>
      <Cta>
        <a href="#intro">
          <SvgIcon aria-label="Arrow down" />
        </a>
      </Cta>
    </ContainerInner>
  </Container>
)

export default Hero
