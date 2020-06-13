import React from "react"
import styled from "styled-components"

import { rem } from "polished"
import { Link } from "gatsby"

import {
  ReactComponent as LogoSvg,
} from "../assets/images/playground-logo.svg"

const HeaderContainer = styled.header.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};

  color: ${props => props.theme.colorIvory};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  padding-top: ${rem(60)};
`

const HeaderInner = styled.section`
  ${props => props.theme.gridGrid()};
  align-items: center;
`

const Logo = styled.div`
  ${props => props.theme.gridCell(4)};

  svg {
    display: block;
    width: auto;
    height: ${rem(40)};
  }
`

const Navigation = styled.div`
  ${props => props.theme.gridCell(8)};

  span {
    font-size: ${rem(32)};
    line-height: ${rem(16)};
    padding-right: ${rem(10)};
    vertical-align: middle;
  }

  a {
    font-weight: ${props => props.theme.fwPrimaryBold};
    color: ${props => props.theme.colorWhite};
  }

  @media ${props => props.theme.mediumDown} {
    display: none;
  }
`

const Header = ({ name }) => (
  <HeaderContainer>
    <HeaderInner>
      <Logo>
        <Link to="/">
          <LogoSvg aria-label="{name}" />
        </Link>
      </Logo>
      <Navigation>
        <p>
          <span role="img" aria-label="Wave emoji">👋</span>
           Hi and welcome to this website, <Link className={`do-unstyle`} to="/">learn more about it</Link>.
        </p>
      </Navigation>
    </HeaderInner>
  </HeaderContainer>
)

export default Header
