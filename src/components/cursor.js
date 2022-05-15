import React from "react"
import styled from "styled-components"

import { rem } from "polished"

const CursorContainer = styled.div`
  .cursor--small {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    width: ${rem(8)};
    height: ${rem(8)};
    left: ${rem(-4)};
    top: ${rem(-4)};
    border-radius: 50%;
    z-index: 99;
    background: ${props => props.theme.colorBlack};

    // Hacks for touch devices
    @media (hover: none) and (pointer: coarse) {
      display: none;
    }

    @media (hover: none) and (pointer: fine) {
      display: none;
    }

    @media (hover: hover) and (pointer: coarse) {
      display: none;
    }
  }

  .cursor--canvas {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    z-index: 100;

    // Hacks for touch devices
    @media (hover: none) and (pointer: coarse) {
      display: none;
    }

    @media (hover: none) and (pointer: fine) {
      display: none;
    }

    @media (hover: hover) and (pointer: coarse) {
      display: none;
    }
  }
`

const Cursor = () => {
  return (
    <CursorContainer>
      <div className={`cursor--small`}></div>
      <canvas className={`cursor--canvas`} resize="true"></canvas>
    </CursorContainer>
  )
}

export default Cursor
