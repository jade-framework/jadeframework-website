import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"
import Section from "../components/section"
import SectionOne from "../components/section-1"
import SectionTwo from "../components/section-2"
import SectionThree from "../components/section-3"
import SectionExample from "../components/section-example"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="banner case-study">
      <h1>Case Study</h1>
    </div>

    <Aside />
    <article class="case-study">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionExample />
    </article>
  </Layout>
)

export default IndexPage
