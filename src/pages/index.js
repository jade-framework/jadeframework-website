import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentMenu from "../components/content-menu"
import SectionAbstract from "../components/section-abstract"
import SectionUsage from "../components/section-usage"
import SectionJamstack from "../components/section-1"
import SectionCore from "../components/section-core"
import SectionLaunch from "../components/section-launch"
import SectionEvolution from "../components/section-evolution"
import SectionFuture from "../components/section-future"
import SectionBiblio from "../components/section-biblio"

const Container = styled.div`
  @media (max-width: 800px) {
    margin-left: 0;
  }
`

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Article = styled.article`
  @media (max-width: 800px) {
    max-width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 0;
  }
  & h2 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-top: 2.5rem;
  }
  & h3 {
    font-size: 1.65rem;
    color: black;
    margin-top: 2rem;
  }
  & h4 {
    margin-top: 1.5rem;
    line-height: 1.4rem;
    font-size: 1.4rem;
    color: var(--color-jade);
  }
  & h5 {
    margin-top: 1rem;
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
    margin-bottom: 1rem;
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
    color: var(--color-jade);
  }
  & ol li {
    counter-increment: list-counter;
    padding-left: 2.2ch;
    text-indent: -4ch;
  }
  & ol li::before {
    content: counter(list-counter) ".";
    text-indent: -1ch;
    padding-right: 1ch;
    color: var(--color-jade);
  }
  & img {
    display: block;
    margin: 0.5rem auto 0.5rem;
    max-width: 100%;
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
    { id: "section-abstract", title: "Abstract", num: 1 },
    { id: "section-usage", title: "Using Jade", num: 2 },
    { id: "section-jamstack", title: "What is the JAMstack", num: 3 },
    { id: "section-launch", title: "Launching a JAMstack web app", num: 4 },
    { id: "section-core", title: "Jade Core", num: 5 },
    { id: "section-evolution", title: "Evolution of Jade", num: 6 },
    { id: "section-future", title: "Future work", num: 7 },
    { id: "section-biblio", title: "Bibliography", num: 8 },
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
      <Container>
        <ArticleContainer>
          <Article className="case-study">
            <SectionAbstract {...sections[0]} />
            <SectionUsage {...sections[1]} />
            <SectionJamstack {...sections[2]} />
            <SectionLaunch {...sections[3]} />
            <SectionCore {...sections[4]} />
            <SectionEvolution {...sections[5]} />
            <SectionFuture {...sections[6]} />
            <SectionBiblio {...sections[7]} />
          </Article>
        </ArticleContainer>
      </Container>
    </Layout>
  )
}

export default CaseStudyPage
