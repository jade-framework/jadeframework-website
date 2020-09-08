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

const Article = styled.article`
  margin-left: 20%;
  padding: 0 25px;
  max-width: 60%;
  width: 60%;
  margin-bottom: 10%;
  & > * {
    margin: 0.8rem 0;
  }
  @media (max-width: 800px) {
    margin-left: 10%;
    max-width: 80%;
    width: 80%;
  }
  & h2 {
    font-size: 2.75rem;
    line-height: 3rem;
    margin-top: 5.5rem;
  }
  & h3 {
    font-size: 1.65rem;
    color: black;
    margin-top: 2.5rem;
  }
  & h4 {
    margin-top: 2.5rem;
    line-height: 1.4rem;
    font-size: 1.4rem;
    color: var(--color-jade);
  }
  & h5 {
    margin-top: 2rem;
    line-height: 1.2rem;
    font-size: 1.2rem;
    color: var(--color-jade);
  }
  & p {
    line-height: 1.4rem;
    text-align: justify;
  }
  & ul.bullets {
    margin-left: 3rem;
  }
  & ol {
    counter-reset: list-counter;
    margin-left: 3rem;
  }
  & li.list-item {
    line-height: 1.4rem;
    padding-left: 1ch;
    text-indent: -2ch;
  }
  & li + li {
    margin-top: 0.5rem;
  }
  & ul.bullets li::before {
    content: "•";
    padding-right: 1ch;
    color: var(--color-claret);
  }
  & ol li {
    counter-increment: list-counter;
    padding-left: 2.2ch;
    text-indent: -4ch;
  }
  & ol li::before {
    content: counter(list-counter) ".";
    padding-right: 2.6ch;
    color: var(--color-claret);
  }
  & img {
    display: block;
    margin: 0.5rem auto 0.5rem;
    width: 100%;
  }
`

const Banner = styled.div`
  background-color: #00a86b;
  padding: 10px 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-bottom: 20px;
  z-index: 1;
`

const BannerHeading = styled.h1`
  color: white;
  font-size: 1.5rem;
  text-align: center;
`

const CaseStudyPage = () => {
  const [stickyMenu, setStickyMenu] = useState(false)

  const handleWaypointEnter = () => setStickyMenu(false)
  const handleWaypointLeave = () => setStickyMenu(true)

  const sections = [
    { id: "section-1", title: "JAMstack" },
    { id: "section-2", title: "Jade Core" },
    { id: "section-3", title: "Evolution of Jade" },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <Waypoint
        onEnter={handleWaypointEnter}
        onLeave={handleWaypointLeave}
      ></Waypoint>
      <Banner className="banner case-study">
        <BannerHeading>Jade Case Study</BannerHeading>
      </Banner>

      {stickyMenu && <ContentMenu sections={sections} />}
      <Article className="case-study">
        {/* <SectionOne id={sections[0].id} title={sections[0].title} /> */}
        <SectionTwo id={sections[1].id} title={sections[1].title} />
        {/* <SectionThree id={sections[2].id} title={sections[2].title} /> */}
        {/* <SectionExample /> */}
      </Article>
    </Layout>
  )
}

export default CaseStudyPage
