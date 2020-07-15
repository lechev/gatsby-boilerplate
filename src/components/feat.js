import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { rem } from "polished"

import {
  ReactComponent as SvgIcon,
} from "../assets/images/icons/arrow-right.svg"

const FeatContainer = styled.div.attrs({ className: `styled` })`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${rem(40)};
  border-radius: ${rem(10)};
  color: ${props => props.theme.colorGray};
  background-image: linear-gradient(90deg, ${props => props.theme.colorWhite} 0%, ${props => props.theme.colorIvory} 100%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.5);

  &.--video-container {
    background-color: #FFEEAC;
    background-image: linear-gradient(90deg, #FFF6D7 0%, #FFEEAC 20%, rgba(255, 238, 172, 0) 40%);
  }

  .about-page & {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), inset 0px 1px 0px rgba(255, 255, 255, 0.5);

    &.--video-container {
      background-color: #F1D34B;
      background-image: linear-gradient(90deg, #FFEC81 0%, #F1D34B 20%, rgba(242, 211, 75, 0) 40%);
    }
  }
`

const FeatContent = styled.div`
  ${props => props.theme.gridCell(6)};
  padding: ${rem(60)};
  display: flex;
  flex-wrap: wrap;

  .-copy {
    .title {
      display: flex;
      align-items: center;
      margin-bottom: ${rem(12)};
      color: ${props => props.theme.colorMetallic};

      img {
        margin-right: ${rem(10)};
      }
    }
  }

  .-cta {
    display: inline-block;
    margin-top: auto;
    padding: ${rem(25)} ${rem(60)} 0 0;
    border-top: 1px solid ${props => props.theme.colorGrayLight};
    color: ${props => props.theme.colorMetallic};

    a {
      padding: ${rem(5)} 0;

      svg {
        transition: transform .2s ease;
        display: inline-block;
        width: ${rem(14)};
        margin-left: ${rem(12)};
        fill: none;
      }

      &:hover {
        svg {
          transform: translateX(5px);
        }
      }
    }
  }
`

const FeatMedia = styled.div`
  ${props => props.theme.gridCell(6)};
  position: relative;
  overflow: hidden;

  .--video-container & {
    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 35%;
      background-image: linear-gradient(90deg, #FFEEAC 0%, rgba(255, 238, 172, 0) 100%);
    }
  }

  .about-page .--video-container & {
    &:after {
      background-image: linear-gradient(90deg, #F1D34B 0%, rgba(242, 211, 75, 0) 100%);
    }
  }

  video {
    display: block;
    width: auto;
    height: ${rem(375)};
    min-width: 100%;
  }
`

const Feat = ({
  icon,
  title,
  copy,
  cta,
  ctaLink,
  image,
  video,
  reverseCursor
}) => (
  <FeatContainer className={video ? `--video-container` : ``} >
    <FeatContent className={reverseCursor ? `js--reverse-cursor` : ``}>
      <div className="-copy">
        <div className="title">
          <img src={icon} alt="Icon" />
          <h2>{title}</h2>
        </div>
        <p>{copy}</p>
      </div>

      <div className="-cta">
        <a href={ctaLink} target="_blank" rel="noopener noreferrer nofollow">
          {cta}
          <SvgIcon />
        </a>
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
