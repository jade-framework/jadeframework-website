import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "./image-logo"

const Section = ({ sectionTitle, children }) => (
  <>
    <h2>{sectionTitle}</h2>
    {children}
  </>
)

Section.propTypes = {
  sectionTitle: PropTypes.string,
}

Section.defaultProps = {
  sectionTitle: ``,
}

export default Section
