import React from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Cursor from "../components/cursor"

import PageTransition from "gatsby-v2-plugin-page-transitions"

export default () => (
  <React.Fragment>
    <PageTransition
      defaultStyle={{
        transition: `transform 500ms ease`,
        transform: `translate3d(0, 2.5vh, 0) scale(0.95)`,
      }}
      transitionStyles={{
        entering: { transform: `translate3d(0, 0, 0) scale(1)` },
        entered: { transform: `translate3d(0, 0, 0) scale(1)` },
      }}
      transitionTime={0}
    >
      <Hero />
      <Intro />
    </PageTransition>
    <Cursor />
  </React.Fragment>
)
