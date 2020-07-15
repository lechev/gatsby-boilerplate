import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as LogoSvg,
} from "../assets/images/playground-symbol.svg"

const FooterContainer = styled.footer`
  .about-page & {
    width: calc(100% - ${rem(20)});
    margin: 0 auto;
    background-color: ${props => props.theme.colorWhite};
    color: ${props => props.theme.colorMetallic};

    @media ${props => props.theme.smallDown} {
      width: 100%;
    }
  }
`

const FooterContent = styled.main`
  ${props => props.theme.gridContainer()};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${rem(85)};
  padding-bottom: ${rem(65)};

  @media ${props => props.theme.smallDown} {
    padding-top: ${rem(45)};
    padding-bottom: ${rem(35)};
  }

  .-logo {
    ${props => props.theme.gridCell(4)};

    @media ${props => props.theme.xxlargeDown} {
      ${props => props.theme.gridCell(6)};
    }

    svg {
      display: block;
      width: ${rem(45)};
      height: auto;

      > path {
        fill: currentColor;
      }

      @media ${props => props.theme.smallDown} {
        width: ${rem(35)};
      }
    }
  }

  .-copyright {
    ${props => props.theme.gridCell(8)};

    font-size: ${rem(14)};

    @media ${props => props.theme.smallDown} {
      ${props => props.theme.gridCell(6)};

      text-align: right;
      font-size: ${rem(12)};
    }
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
