import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { rem } from "polished"

const FeatContainer = styled.div.attrs({ className: `styled` })`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(40)};
  border-radius: ${rem(10)};
  color: ${props => props.theme.colorMetallic};
  background-image: linear-gradient(90deg, ${props => props.theme.colorWhite} 0%, ${props => props.theme.colorIvory} 100%);

  &.--video-container {
    background-color: #FFEEAC;
    background-image: linear-gradient(90deg, #FFF6D7 0%, #FFEEAC 20%, rgba(255, 238, 172, 0) 40%);
  }
`

const FeatContent = styled.div`
  ${props => props.theme.gridCell(5)};
`

const FeatMedia = styled.div`
  ${props => props.theme.gridCell(7)};
  overflow: hidden;
  position: relative;

  .--video-container & {
    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 25%;
      background-image: linear-gradient(90deg, #FFEEAC 0%, rgba(255, 238, 172, 0) 100%);
    }
  }

  video {
    display: block;
    width: auto;
    min-height: 100%;
    transform: translateX(-15%);
  }
`

const Feat = ({ icon, title, copy, image, video }) => (
  <FeatContainer className={video ? `--video-container` : ``} >
    <FeatContent>
      <div className="-copy">
        <img src={icon} alt="Icon" />
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </FeatContent>

    <FeatMedia>
      {video && (
        <video playsinline autoplay="autoplay" muted loop="loop" aria-hidden="true">
          <source src={video} type="video/mp4" />
        </video>
      )}

      {image && (
        <Img fluid={image} />
      )}
    </FeatMedia>
  </FeatContainer>
)

export default Feat
