import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as SvgIcon,
} from "../assets/images/icons/arrow-down.svg"

import {
  ReactComponent as Underline,
} from "../assets/images/underline-animated.svg"

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

  a {
    animation: attention 8s ease infinite;

    &:hover {
      animation-play-state: paused;
    }
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

  span {
    margin-top: 7%;
    display: inline-block;
    line-height: 0;
  }

  svg {
    margin-top: 10%;
    stroke-dasharray: 616 618;
    stroke-dashoffset: -617;
    animation: svg_draw 1000ms ease 0ms forwards;
    animation-delay: 500ms;
  }

  p {
    margin-top: ${rem(18)};
    color: ${props => props.theme.colorIvory};
  }
`

const Hero = () => (
  <Container>
    <ContainerInner>
      <Content>
        <h1>
          Try and test.<br/>
          <span>
            Often.
            <Underline aria-label="Underline animation" />
          </span>
        </h1>
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
