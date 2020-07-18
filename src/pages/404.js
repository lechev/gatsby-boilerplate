import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import Meta from "../components/meta"

const Container = styled.section.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()};
  height: 100vh;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  padding-top: ${rem(200)};
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
