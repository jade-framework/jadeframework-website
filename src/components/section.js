import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Section = ({ sectionTitle, children, id }) => (
  <section id={id}>
    <h2>{sectionTitle}</h2>
    {children}
  </section>
)

Section.propTypes = {
  sectionTitle: PropTypes.string,
}

Section.defaultProps = {
  sectionTitle: ``,
}

export default Section
