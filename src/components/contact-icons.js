import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-regular-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const Icons = styled.div`
  font-size: ${props => (props.size ? props.size : "2.4rem")};
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${props => (props.margin ? props.margin : "1.4rem")};
  transition: color 0.5s;

  &:hover {
    color: var(--color-secondary);
  }
`
const ContactIcons = ({ margin, size, resume, web, linkedin }) => (
  <Icons size={size}>
    <a href={resume} target="_blank" rel="noreferrer">
      <Icon margin={margin} icon={faFile} />
    </a>

    <a href={web} target="_blank" rel="noreferrer">
      <Icon margin={margin} icon={faGlobe} />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Icon margin="0" icon={faLinkedinIn} />
    </a>
  </Icons>
)

export default ContactIcons
