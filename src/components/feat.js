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
  border-radius: ${rem(10)};
  margin-bottom: ${rem(40)};
  color: ${props => props.theme.colorGray};
  background-image: linear-gradient(90deg, ${props => props.theme.colorWhite} 0%, ${props => props.theme.colorIvory} 100%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.5);

  @media ${props => props.theme.xxlargeDown} {
    margin-bottom: ${rem(20)};
  }

  @media ${props => props.theme.mediumDown} {
    background-image: linear-gradient(180deg, ${props => props.theme.colorWhite} 0%, ${props => props.theme.colorIvory} 100%);
  }

  &.--accent {
    background-color: ${props => props.theme.colorYellow};
    background-image: linear-gradient(90deg, ${props => props.theme.colorYellowLight} 0%, ${props => props.theme.colorYellow} 100%);

    @media ${props => props.theme.mediumDown} {
      background-image: linear-gradient(180deg, ${props => props.theme.colorYellowLight} 0%, ${props => props.theme.colorYellow} 100%);
    }
  }

  &.--video-container {
    background-color: #FFF967;
    background-image: linear-gradient(90deg, ${props => props.theme.colorYellowLight} 0%, #FFF967 20%, rgba(255, 249, 103, 0) 40%);

    @media ${props => props.theme.mediumDown} {
      background-image: linear-gradient(180deg, ${props => props.theme.colorYellowLight} 0%, #FFF967 20%, rgba(255, 249, 103, 0) 40%);
    }
  }

  .about-page & {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
  }
`

const FeatContent = styled.div`
  ${props => props.theme.gridCell(6)};
  padding: ${rem(60)};
  display: flex;
  flex-wrap: wrap;

  @media ${props => props.theme.mediumDown} {
    ${props => props.theme.gridCell(12)};
    padding: ${rem(30)};
  }

  @media ${props => props.theme.smallDown} {
    padding: ${rem(30)} ${rem(20)} ${rem(20)};
  }

  .-copy {
    margin-bottom: ${rem(30)};

    .title {
      display: flex;
      align-items: center;
      margin-bottom: ${rem(12)};
      color: ${props => props.theme.colorMetallic};

      img {
        margin-right: ${rem(10)};

        @media ${props => props.theme.mediumDown} {
          width: ${rem(28)};
        }
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
  border-radius: 0 ${rem(10)} ${rem(10)} 0;
  clip-path: content-box;
  min-height: 100%;

  @media ${props => props.theme.mediumDown} {
    ${props => props.theme.gridCell(12)};
    border-radius: 0 0 ${rem(10)} ${rem(10)};
    align-self: center;
  }

  .about-page & {
    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 35%;
      background-image: linear-gradient(90deg, #FFF967 0%, rgba(255, 249, 103, 0) 100%);

      @media ${props => props.theme.mediumDown} {
        width: 100%;
        height: 15%;
        background-image: linear-gradient(180deg, #FFF967 0%, rgba(255, 249, 103, 0) 100%);
      }
    }
  }

  .gatsby-image-wrapper {
    min-height: 100%;
  }

  video {
    display: block;
    width: auto;
    min-width: 100%;
    height: 100%;
    min-height: ${rem(375)};

    @media ${props => props.theme.mediumDown} {
      height: auto;
      min-height: 0;
      width: 100%;
    }
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
  reverseCursor,
  accent
}) => (
  <FeatContainer className={
    `${reverseCursor ? `js--reverse-cursor` : ``} ${accent ? `--accent` : ``} ${video ? `--video-container` : ``}`
  }>
    <FeatContent>
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
        <video playsInline muted autoPlay="autoplay" loop="loop" aria-hidden="true">
          <source src={video} type="video/mp4" />
        </video>
      )}

      {image && (
        <Img
          fluid={image}
          imgStyle={{
            objectPosition: `center left`,
          }}
        />
      )}
    </FeatMedia>
  </FeatContainer>
)

export default Feat
