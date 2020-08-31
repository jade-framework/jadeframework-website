import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "./image-logo"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li>
          {" "}
          <a href="#!">
            {" "}
            <img
              src="../images/jade-logo.png"
              alt="Jade Logo"
              class="bp-mark"
            />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#!" class="active-link link-with-padding">
            {" "}
            Case Study{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#!" class="link-with-padding">
            {" "}
            Our Team{" "}
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#!">
            {" "}
            <i class="fab fa-github"></i>{" "}
          </a>{" "}
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
