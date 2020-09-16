import React from "react"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
  cursor: pointer;
`

const Icon = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    width: 2rem;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`

const NavIcon = () => (
  <Container>
    <Icon />
  </Container>
)

export default NavIcon
