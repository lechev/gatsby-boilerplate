import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as LogoSvg,
} from "../assets/images/playground-symbol.svg"

const FooterContainer = styled.footer`
  .about-page & {
    width: calc(100% - ${rem(80)});
    margin: 0 auto;
    background-color: ${props => props.theme.colorWhite};
    color: ${props => props.theme.colorMetallic};
  }
`

const FooterContent = styled.main`
  ${props => props.theme.gridContainer()};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${rem(100)};
  padding-bottom: ${rem(65)};

  .-logo {
    ${props => props.theme.gridCell(4)};

    svg {
      display: block;
      width: ${rem(45)};
      height: auto;

      > path {
        fill: currentColor;
      }
    }
  }

  .-copyright {
    ${props => props.theme.gridCell(8)};

    font-size: ${rem(14)};
  }
`

const Footer = ({ name }) => (
  <FooterContainer>
    <FooterContent>
      <div className={`-logo`}>
        <LogoSvg aria-label="Playground logo symbol" />
      </div>
      <div className={`-copyright`}>
        <small>© {name} {new Date().getFullYear()}</small>
      </div>
    </FooterContent>
  </FooterContainer>
)

export default Footer
