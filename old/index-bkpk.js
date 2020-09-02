import React from "react"

import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import Aside from "../src/components/aside"
import Section from "../src/components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="banner case-study">
      <h1>Case Study</h1>
    </div>

    <Aside />

    <article class="case-study">
      <Section sectionTitle="Abstract">
        <p>Jade is a ... </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Section>
      <Section sectionTitle="What is the JAMstack">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Section>
      <Section sectionTitle="Jade Core App">
        <p>The core app...</p>
        <ul class="bullets">
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
        <p>
          In the following sections, we will explore how we built a system...
        </p>
        <h3 id="subtitle-2-1" data-title="Subtitle 2-1">
          Subtitle 2-1
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 id="h4-2-1" data-title="h4 2-1">
          Sub Subtitle 2-1
        </h4>
        <p>
          To make it <span class="emphasize">easy</span> for frontend developers
          to...jade.
        </p>
        <h5 id="h5-2-1" data-title="h5 2-1">
          Sub Sub Subtitle 2-1
        </h5>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Section>
    </article>
  </Layout>
)

export default IndexPage
