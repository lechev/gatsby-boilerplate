import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const HeaderContainer = styled.header`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;

  a {
    text-shadow: none;
    background-image: none;
  }

  h3 {
    display: inline;
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
