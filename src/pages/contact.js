import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default() => (
  <div style={{ color: `yellow`}}>
    <Link to="/">Home</Link>
    <Header headerText="Contact"/>
    <p>Such wow. Very React.</p>
  </div>
)
