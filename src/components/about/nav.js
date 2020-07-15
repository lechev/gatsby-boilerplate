import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { rem } from "polished"

import {
  ReactComponent as SvgIcon,
} from "../../assets/images/icons/arrow-left.svg"

const Container = styled.header.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};

  padding-top: ${rem(55)};

  @media ${props => props.theme.smallDown} {
    padding-top: ${rem(20)};
  }

  a {
    display: flex;
    align-items: center;
    font-size: ${rem(16)};
    padding: ${rem(5)} 0;

    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }
  }

  svg {
    margin-right: ${rem(12)};
    fill: none;
    width: ${rem(14)};
    transition: transform .2s ease;
  }
`

const Nav = () => (
  <Container>
    <Link to="/">
      <SvgIcon />
      Back home
    </Link>
  </Container>
)

export default Nav
