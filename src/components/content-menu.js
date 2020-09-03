import React from "react"

import { Link, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"

const Aside = styled.aside`
  position: fixed;
  top: calc(50% - 3rem);
  width: 300px;
  opacity: 1;
  transition: 0.2s ease-in-out;
`

const List = styled.ul`
  font-size: 0.9rem;
  margin-left: 1rem;
`

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 2rem;
  cursor: pointer;
`

const ListItemLink = styled.a``

const ContentMenu = ({ sections }) => {
  console.log("sections", sections)
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
