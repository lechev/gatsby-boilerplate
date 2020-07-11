import React from "react"
import styled from "styled-components"

import PageTransition from "gatsby-v2-plugin-page-transitions"

import { Helmet } from "react-helmet"
import { rem } from "polished"
import { Link } from "gatsby"

import Meta from "../components/meta"
import Cursor from "../components/cursor"

const Container = styled.section.attrs({ className: `styled` })`
  width: calc(100% - ${rem(80)});
  margin: ${rem(60)} auto 0;
  border-radius: ${rem(20)} ${rem(20)} 0 0;
  background-color: ${props => props.theme.colorWhite};
  color: ${props => props.theme.colorMetallic};
  min-height: 100vh;

  a {
    color: ${props => props.theme.colorMetallic} !important;
  }
`
const ContainerInner = styled.div`
  ${props => props.theme.gridContainer()};
`

export default () => (
  <React.Fragment>
    <PageTransition
      defaultStyle={{
        transition: 'transform 500ms ease, opacity 500ms ease',
        transform: 'translate3d(0, 25vh, 0)',
        opacity: 0.5,
      }}
      transitionStyles={{
        entering: { transform: 'translate3d(0, 0, 0)', opacity: 1, },
        entered: { transform: 'translate3d(0, 0, 0)', opacity: 1, },
        exiting: { transform: 'translate3d(0, 25vh, 0)', opacity: 0.5, },
      }}
      transitionTime={500}
    > 
      
      <Container>
        <Helmet htmlAttributes={{ class: `about-page` }} />
        <Meta title="About" />

        <ContainerInner>
          <h1>About</h1>
          <p>Such wow. Very React.</p>
          <Link to="/">Back</Link>
        </ContainerInner>
      </Container>
    </PageTransition>

    <Cursor />
  </React.Fragment>
)
