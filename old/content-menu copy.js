import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"
import styled from "styled-components"

const Aside = styled.aside`
  position: fixed;
  top: calc(50% - 3rem);
  width: 300px;
  opacity: 1;
  transition: 0.2s ease-in-out;
`

// const List = styled.Scrollspy`
//   font-size: 0.9rem;
//   margin-left: 1rem;
// `

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 2rem;
`

const ListItemLink = styled.a``

const ContentMenu = ({ titles, ids }) => {
  console.log("ids", ids)
  return (
    <Aside>
      <Scrollspy items={ids}>
        {titles.map((title, idx) => (
          <ListItem key={idx}>
            <Scroll type="id" element={title}>
              <a href="#section-1">{title}</a>
            </Scroll>
            {/* <a href={`#${ids[idx]}`}>{title}</a> */}
          </ListItem>
        ))}
      </Scrollspy>
    </Aside>
  )
}

export default ContentMenu
