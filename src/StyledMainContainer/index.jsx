import React from 'react'
import About from '../About'
import Welcome from '../Welcome'
import { Container } from "./style"

function StyledMainContainer() {
  return (
    <Container>
      <Welcome />
      <About />
    </Container>
  )
}

export default StyledMainContainer