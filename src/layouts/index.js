import React from "react"
import styled, { ThemeProvider } from "styled-components"

import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"
import Cursor from "../components/cursor"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

const Main = styled.main``

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Meta />
      <Header name="Playground" />

      <Main>
        {children}
      </Main>

      <Footer name="Kollegorna" />

      <Cursor />
    </React.Fragment>
  </ThemeProvider>
)
