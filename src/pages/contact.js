import React from "react"
import styled from "styled-components"

import Meta from "../components/meta"

const Container = styled.section.attrs({ className: `styled` })``

export default () => (
  <Container>
    <Meta title="Contact" />
    <h1>Contact</h1>
    <p>A contact page is here dudes and dudetes.</p>
  </Container>
)
