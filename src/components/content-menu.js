import React from "react"

import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"

const Aside = styled.aside`
  position: fixed;
  top: calc(50% - 12rem);
  width: 300px;
  opacity: 1;
  transition: 0.2s ease-in-out;
  @media (max-width: 1200px) {
    display: none;
  }
`

const List = styled.ul`
  font-size: 0.9rem;
  margin-left: 1rem;
`

const ListItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.8rem;
  cursor: pointer;
`

const ListItemLink = styled.a``

const ContentMenu = ({ sections }) => {
  return (
    <Aside>
      <List>
        {sections.map((section, idx) => (
          <ListItem key={section.id}>
            <Link
              activeClass="active"
              to={section.id}
              spy={true}
              smooth={true}
              offset={-270}
              duration={500}
            >
              {section.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Aside>
  )
}

export default ContentMenu
