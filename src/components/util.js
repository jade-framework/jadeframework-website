import React from "react"

export const createAnchor = (title, link) => (
  <a href={link} target="_blank" rel="noreferrer">
    {title}
  </a>
)
