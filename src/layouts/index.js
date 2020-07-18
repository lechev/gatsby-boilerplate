import React from "react"
import { ThemeProvider } from "styled-components"

import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"
import PageTransition from "../components/transition"
import Cursor from "../components/cursor"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

export default ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Meta />
      <Header name="Playground" />
      
      <PageTransition location={location}>
        {children}
        <Cursor />
      </PageTransition>

      <Footer name="Nikolay Lechev" />
    </React.Fragment>
  </ThemeProvider>
)
