import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

const FooterContent = styled.p``

const Footer = ({ name }) => (
  <FooterContainer>
    <FooterContent>
      <small>© {name} {new Date().getFullYear()}</small>
    </FooterContent>
  </FooterContainer>
)

export default Footer
