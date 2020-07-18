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
  height: 100vh;
  padding-bottom: 15vh;
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  @media ${props => props.theme.xxlargeDown} {
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10vh;
  }

  @media ${props => props.theme.largeDown} {
    padding-bottom: 5vh;
    max-height: -webkit-fill-available;
    max-height: -moz-available;
  }
`

const Cta = styled.div`
  ${props => props.theme.gridCell(4)};

  @media ${props => props.theme.xxlargeDown} {
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

    @media ${props => props.theme.xxlargeDown} {
      width: ${rem(100)};
      height: ${rem(100)};
    }

    @media ${props => props.theme.smallDown} {
      width: ${rem(68)};
      height: ${rem(68)};
    }
  }
`

const Content = styled.div`
  ${props => props.theme.gridCell(8)};

  @media ${props => props.theme.xxlargeDown} {
    ${props => props.theme.gridCell(12)};
    margin-bottom: ${rem(60)};
  }

  @media ${props => props.theme.smallDown} {
    margin-bottom: ${rem(20)};
  }

  span {
    margin-top: 7.6%;
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

    @media ${props => props.theme.smallDown} {
      margin-top: ${rem(12)};
    }
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
        <p className={`-lead`}>This is a digital playground for personal experiments.</p>
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
