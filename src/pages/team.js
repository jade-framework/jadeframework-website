import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import Banner from "../components/banner"

const TeamPage = () => {
  const team = { id: "section-team", title: "Our Team", num: 8 }

  return (
    <>
      <Layout>
        <SEO title="Team" />
        <Banner title="Team" />
        <Team {...team} />
      </Layout>
    </>
  )
}

export default TeamPage
