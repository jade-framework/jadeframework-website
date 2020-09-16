import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./styles/reset.css"
import GlobalStyles from "./styles/global"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 4rem 0 1rem 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
      <Footer>
        <span>© {new Date().getFullYear()}, Deployed with </span>
        &nbsp;
        <a href="https://jadeframework.dev">Jade</a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
