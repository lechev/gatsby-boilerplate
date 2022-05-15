import React from "react"
import { ThemeProvider } from "styled-components"

import Meta from "../components/meta"
import Cursor from "../components/cursor"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Meta />

      {children}
      <Cursor />
    </React.Fragment>
  </ThemeProvider>
)
