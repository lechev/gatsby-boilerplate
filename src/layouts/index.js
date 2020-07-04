import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { rem } from "polished"

import Meta from "../components/meta"
import Header from "../components/header"
import Footer from "../components/footer"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

const Main = styled.main``

const CursorElements = styled.div`
  .cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .cursor--small {
    width: ${rem(5)};
    height: ${rem(5)};
    left: ${rem(-2.5)};
    top: ${rem(-2.5)};
    border-radius: 50%;
    z-index: 99;
    background: ${props => props.theme.colorWhite};
  }

  .cursor--canvas {
    width: 100vw;
    height: 100vh;
    z-index: 100;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Meta />
      <Header name="Playground" />

      <Main>
        {children}
      </Main>

      <Footer name="Kollegorna" />

      <CursorElements>
        <div class="cursor cursor--small"></div>
        <canvas class="cursor cursor--canvas" resize></canvas>
      </CursorElements>
    </React.Fragment>
  </ThemeProvider>
)
