import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const FooterContainer = styled.footer`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

const FooterContent = styled.main`
  .-svg-logo {
    display: block;
    margin: ${rem(20)} ${rem(5)};
    width: ${rem(60)};
    height: ${rem(60)};
  }
`

const Footer = ({ name }) => (
  <FooterContainer>
    <FooterContent>
      <LogoSvg aria-label="Playground logo symbol" className={`-svg-logo`} />
      <small>© {name} {new Date().getFullYear()}</small>
    </FooterContent>
  </FooterContainer>
)

export default Footer
