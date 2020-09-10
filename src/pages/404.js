import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1>Page not found</h1>
    <p>
      The page you've requested has either not been loaded or the route you've
      used is invalid.
    </p>
  </Layout>
)

export default NotFoundPage
