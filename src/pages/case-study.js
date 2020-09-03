import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentMenu from "../components/content-menu"
import SectionOne from "../components/section-1"
import SectionTwo from "../components/section-2"
import SectionThree from "../components/section-3"
import SectionExample from "../components/section-example"

const Banner = styled.div`
  background-color: #00a86b;
  padding: 60px 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-bottom: 200px;
  z-index: 1;
`

const BannerHeading = styled.h1`
  color: white;
  font-size: 5.725rem;
  text-align: center;
`

const CaseStudyPage = () => {
  const [stickyMenu, setStickyMenu] = useState(false)

  const handleWaypointEnter = () => setStickyMenu(false)
  const handleWaypointLeave = () => setStickyMenu(true)

  const sections = [
    { id: "section-1", title: "Krunal's" },
    { id: "section-2", title: "Jer's" },
    { id: "section-3", title: "Edmond's" },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>
      <Banner className="banner case-study">
        <BannerHeading>Case Study</BannerHeading>
      </Banner>

      {stickyMenu && <ContentMenu sections={sections} />}
      <article className="case-study">
        <SectionOne id={sections[0].id} title={sections[0].title} />
        <SectionTwo id={sections[1].id} title={sections[1].title} />
        <SectionThree id={sections[2].id} title={sections[2].title} />
        <SectionExample />
      </article>
    </Layout>
  )
}

export default CaseStudyPage
