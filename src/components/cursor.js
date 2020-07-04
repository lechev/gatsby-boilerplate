import React from "react"
import styled from "styled-components"

import { rem } from "polished"

const CursorContainer = styled.div`
  .cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .cursor--small {
    width: ${rem(8)};
    height: ${rem(8)};
    left: ${rem(-4)};
    top: ${rem(-4)};
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

const Cursor = () => {
  return (
    <CursorContainer>
      <div class="cursor cursor--small"></div>
      <canvas class="cursor cursor--canvas" resize></canvas>
    </CursorContainer>
  )
}

export default Cursor
