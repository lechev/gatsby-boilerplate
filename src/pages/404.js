import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import Meta from "../components/meta"

const Container = styled.section.attrs({ className: `styled` })`
  height: 100vh;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  padding: 16vh 8vw;

  @media ${props => props.theme.smallDown} {
    padding: 8vh 8vw;
  }

  > h1 {
    margin-bottom: ${rem(20)};
  }
`

const NotFoundPage = () => (
  <React.Fragment>
    <Meta title="Page not found" />

    <Container>
      <h1>Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </React.Fragment>
)

export default NotFoundPage
