import React from "react"
import styled from "styled-components"

import { rem } from "polished"
import { Link } from "gatsby"

const HeaderContainer = styled.header`
  margin: 3rem auto;
  max-width: ${rem(650)};
  padding: 0 1rem;

  a {
    text-shadow: none;
    background-image: none;
  }

  h3 {
    display: inline;
    font-size: ${rem(20)};
  }

  ul {
    list-style: none;
    float: right;
  }

  li {
    display: inline-block;
    
    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    a {
      color: ${props => props.theme.colorTeal};
    }
  }
`

const Navigation = styled.ul``

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ name }) => (
  <HeaderContainer>
    <Link to="/">
      <h3>{name}</h3>
    </Link>
    <Navigation>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </Navigation>
  </HeaderContainer>
)

export default Header
