import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeaderWrapper = styled.header`
  display: flex;
  margin: 0 auto;
  max-width: 1296px;
  padding: 2rem 1.0875rem 2rem;
  width: 100%;

  @media screen and (max-width: 480px) {
    display: block;
  }
`

const ImageWrapper = styled.div`
  width: 25%;
  margin-bottom: 1rem;

  @media screen and (max-width: 1080px) {
    margin: 0 2rem 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    margin: 0 auto 2rem;
  }
`

const CopyWrapper = styled.div`
  width: 75%;
  padding: 1rem 4rem;

  @media screen and (max-width: 1080px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 1.5rem;
    text-align: center;
    margin: 0 auto;
  }
`

const HeaderImage = styled(Img)`
  border-radius: 43% 57% 41% 59% / 60% 41% 59% 40%;
`

const Small = styled.p`
  font-size: 0.85em;
  color: #aaa;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <ImageWrapper>
          <HeaderImage fluid={data.logo.childImageSharp.fluid} />
        </ImageWrapper>
        <CopyWrapper>
          <h1>Unbokeh</h1>
          <p>
            Hazy blurred backgrounds for design, inspiration, and wicked
            wallpapers.
          </p>
          <p>Hand-picked with new photos every week.</p>
          <Small>
            Sourced from{' '}
            <a
              target="_blank"
              href="https://unsplash.com?utm_source=unbokeh&utm_medium=referral"
            >
              Unsplash
            </a>{' '}
            &amp; free to use under the{' '}
            <a target="_blank" href="https://unsplash.com/license">
              Unsplash license
            </a>
            . Created by{' '}
            <a target="_blank" href="https://ericnmurphy.com/">
              Eric Murphy
            </a>
            . Want to advertise here? Get in touch at{' '}
            <a href="mailto:hi@ericnmurphy.com">hi@ericnmurphy.com</a> and I'll
            see if it's a good fit.
          </Small>
        </CopyWrapper>
      </HeaderWrapper>
    )}
  />
)

export default Header
