import React from "react"
import { Link as PageLink } from "gatsby"
import styled from "styled-components"

import Nav from "./nav"

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00a86b;
  padding: 20px;
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

const Banner = ({ title, sections, team }) => {
  return (
    <>
      <BannerContainer>
        <PageLink to="/">
          <BannerHeading>Jade</BannerHeading>
        </PageLink>
        <BannerHeading>{title}</BannerHeading>
        <Nav sections={sections} team={team} />
      </BannerContainer>
    </>
  )
}

export default Banner
