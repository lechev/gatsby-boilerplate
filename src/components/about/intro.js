import React from "react"
import styled from "styled-components"

import { rem } from "polished"

import Feat from "../feat"
import SwedenVideo from "../../assets/videos/sweden.mp4"
import PixelsIcon from "../../assets/images/icons/pixels.svg"

const Container = styled.section`
  ${props => props.theme.gridContainer()};
  padding-bottom: ${rem(40)};

  @media ${props => props.theme.xxlargeDown} {
    padding-bottom: ${rem(20)};
  }
`

const Intro = () => (
  <Container>
    <Feat
      title={`Kollegorna`}
      icon={PixelsIcon}
      copy={`What is Kollegorna you might ask – well simple enough: a Swedish digital agency building first-rate digital products and services.`}
      cta={`Learn more`}
      ctaLink={`https://www.kollegorna.se/`}
      video={SwedenVideo}
    />
  </Container>
)

export default Intro
