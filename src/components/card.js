import React from "react"
import styled from "styled-components"

const Card = ({ title, author, date }) => {
  return (
    <div>
      <h3>Citation</h3>
      <h5>Author: {author}</h5>
      <h5>Title: {title} </h5>
      <h5>Date: {date}</h5>
    </div>
  )
}

export default Card
