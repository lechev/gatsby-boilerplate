import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"
import { rem } from "polished"
import { Link } from "gatsby"

import Meta from "../components/meta"
import Cursor from "../components/cursor"

import PageTransition from "gatsby-plugin-page-transitions"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};

  margin-top: ${rem(300)};
`

export default () => (
  <PageTransition
    // defaultStyle={{
    //   transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
    //   left: '100%',
    //   position: 'absolute',
    //   width: '100%',
    //   height: '100%',
    // }}
    // transitionStyles={{
    //   entering: { left: '0%' },
    //   entered: { left: '0%' },
    //   exiting: { left: '100%' },
    // }}
    transitionTime={500}
  > 
    <Helmet htmlAttributes={{ class: `about-page` }} />
    
    <Container>
      <Meta title="About" />
      <h1>About</h1>
      <p>Such wow. Very React.</p>
      <Link to="/">Back</Link>
    </Container>

    <Cursor />
  </PageTransition>
)
