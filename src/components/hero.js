import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as LogoSvg,
} from "../assets/images/nikolay-lechev-logo.svg"

import {
  ReactComponent as LinesSvg,
} from "../assets/images/lines.svg"

import {
  ReactComponent as ElementsSvg,
} from "../assets/images/elements.svg"

import { Link } from "gatsby"

const Container = styled.section.attrs({ className: `styled` })``

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16vh 8vw;

  @media ${props => props.theme.smallDown} {
    padding: 8vh 8vw;
    height: auto;
  }
`

const Logo = styled.div`
  margin-bottom: ${rem(47)};

  svg {
    display: block;
    width: auto;
    height: ${rem(52)};
  }

  @media ${props => props.theme.smallDown} {
    margin-bottom: ${rem(39)};
  }

  @media ${props => props.theme.xsmallDown} {
    margin-bottom: ${rem(29)};

    > svg {
      height: ${rem(38)};
    }
  }
`

const Content = styled.div`
  max-width: ${rem(704)};

  @media ${props => props.theme.xxlargeDown} {
    max-width: ${rem(565)}
  }
`

const Footer = styled.div`
  margin-top: auto;

  @media ${props => props.theme.smallDown} {
    margin-top: ${rem(100)};
  }

  @media ${props => props.theme.xxsmallDown} {
    margin-top: ${rem(60)};
  }
`

const LinkGroup = styled.ul`
  margin-top: ${rem(12)};

  > li {
    display: inline-block;

    &:not(:first-of-type) {
      margin-left: ${rem(26)};
    }
  }

  @media ${props => props.theme.smallDown} {
    > li {
      display: block;

      &:not(:first-of-type) {
        margin-left: 0;
        margin-top: ${rem(12)};
      }
    }
  }
`

const Scribble = styled.span`
  pointer-events: none;
  position: absolute;
  bottom: 5vh;
  right: 0;

  > svg {
    width: ${rem(300)};
  }

  @media ${props => props.theme.xxlargeDown} {
    bottom: -10vh;

    > svg {
      width: ${rem(200)};
    }
  }

  @media ${props => props.theme.smallDown} {
    bottom: -8vh;

    > svg {
      width: ${rem(120)};
    }
  }
`

const ScribbleTwo = styled.span`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 10vw;

  > svg {
    width: ${rem(335)};
  }

  @media ${props => props.theme.xxlargeDown} {
    > svg {
      width: ${rem(280)};
    }
  }

  @media ${props => props.theme.smallDown} {
    display: none;
  }
`

const Hero = () => (
  <Container>
    <ContainerInner>
      <Logo>
        <LogoSvg aria-label="Nikolay Lechev" />
      </Logo>
      <Content>
        <h1>
          Hello <span role="img" aria-label="Wave emoji">👋</span> I'm Nikolay, a <span>product designer</span> who can <span>code</span>. I help startups shape, build, and scale their <span>digital products</span>.
        </h1>
      </Content>

      <Footer>
        <h2>Want to talk?</h2>
        <LinkGroup>
          <li>
            <a href="mailto:hello@nikolaylechev.com">hello@nikolaylechev.com</a>
          </li>
          <li>
            <Link to="https://dribbble.com/iamlechev" target="_blank">Dribbble</Link>
          </li>
          <li>
            <Link to="https://twitter.com/iamlechev" target="_blank">Twitter</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/nikolay-lechev-6927b1a5/" target="_blank">Linkedin</Link>
          </li>
        </LinkGroup>
      </Footer>

      <Scribble>
        <LinesSvg aria-label="Lines Scribble" />
      </Scribble>

      <ScribbleTwo>
        <ElementsSvg aria-label="Elements Scribble" />
      </ScribbleTwo>
    </ContainerInner>
  </Container>
)

export default Hero
