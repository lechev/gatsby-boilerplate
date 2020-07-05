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
    font-weight: ${props => props.theme.fwPrimarySemibold};
    color: ${props => props.theme.colorWhite};
    position: relative;
    padding: ${rem(10)} 0;

    &:after {
      content: "";
      position: absolute;
      top: calc(100% - ${rem(5)});
      left: 0;
      height: ${rem(2)};
      width: 100%;
      background: ${props => props.theme.colorWhite};
      opacity: 0.5;
      transition: transform .4s ease, opacity .6s ease;
    }

    &:hover {
      &:after {
        transform: scale(0) translateY(-25px);
        opacity: 0;
      }
    }
  }

  @media ${props => props.theme.mediumDown} {
    display: none;
  }
`

const Header = ({ name }) => (
  <HeaderContainer>
    <HeaderInner>
      <Logo>
        <LogoSvg aria-label="{name}" />
      </Logo>
      <Navigation>
        <p>
          <span role="img" aria-label="Wave emoji">👋</span>
           Welcome to this website, you can learn more <Link className={`do-unstyle`} to="/">about it here</Link>.
        </p>
      </Navigation>
    </HeaderInner>
  </HeaderContainer>
)

export default Header
