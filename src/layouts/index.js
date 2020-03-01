import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { rem } from "polished"

import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

const Main = styled.main`
  margin: 3rem auto;
  max-width: ${rem(650)};
  padding: 0 1rem;
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Meta />
      <Header name="Snape" />

      <Main>
        {children}
      </Main>

      <Footer name="Severus Snape" />
    </React.Fragment>
  </ThemeProvider>
)
