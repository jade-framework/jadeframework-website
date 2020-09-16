import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image-logo"

import styled from "styled-components"

const Banner = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Subheading = styled.h2`
  text-align: center;
  margin-top: 1rem;
`

const ImageContainer = styled.div`
  width: 10rem;
`

const Header = ({ siteTitle }) => (
  <Banner>
    <ImageContainer>
      <Image imageAlt="Jade logo" imageName="jade_logo-full.png" />
    </ImageContainer>
    <Subheading>A deployment environment for JAMstack applications</Subheading>
  </Banner>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
