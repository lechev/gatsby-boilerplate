import React from "react"
import styled from "styled-components"

import { Helmet } from "react-helmet"
import { rem } from "polished"

import Meta from "../components/meta"
import Nav from "../components/about/nav"
import Hero from "../components/about/hero"
import Intro from "../components/about/intro"

const PageContainer = styled.section`
  width: calc(100% - ${rem(20)});
  margin: ${rem(60)} auto 0;
  border-radius: ${rem(20)} ${rem(20)} 0 0;
  background-color: ${props => props.theme.colorWhite};
  color: ${props => props.theme.colorMetallic};
  min-height: 100vh;

  @media ${props => props.theme.smallDown} {
    width: 100%;
    margin-top: ${rem(30)};
    border-radius: ${rem(15)} ${rem(15)} 0 0;
  }
`

export default () => (
  <React.Fragment>
    <Helmet htmlAttributes={{ class: `about-page` }} />
    <Meta title="About" />
    <PageContainer>
      <Nav />
      <Hero />
      <Intro />
    </PageContainer>
  </React.Fragment>
)
