import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Banner = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 5rem;
`

const Subheading = styled.h2`
  text-align: center;
`

const Header = ({ siteTitle }) => (
  <Banner>
    <Heading>Jade</Heading>
    <Subheading>A deployment environment for JAMstack applications.</Subheading>
    <br />
<<<<<<< HEAD
    <Subheading>Coming soon..</Subheading>
=======
    <Subheading>Testing CDN</Subheading>
>>>>>>> 3e648660c7b363d9233ee5c475357884b096f659
  </Banner>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
