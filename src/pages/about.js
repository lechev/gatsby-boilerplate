import React from "react"
import styled from "styled-components"

import Meta from "../components/meta"

const Container = styled.section.attrs({ className: `styled` })``

export default () => (
  <Container>
    <Meta title="About" />
    <h1>About</h1>
    <p>Such wow. Very React.</p>
  </Container>
)
