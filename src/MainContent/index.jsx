import React from 'react'
import { Section } from './styled'
import Welcome from '../Welcome'
import About from '../About'
import Services from "../Services"

function MainContent({ page }) {

    console.log(page)
    return (
        <Section>
            {page === "home" && <Welcome />}
            {page === "about" && <About />}
            {page === "services" && <Services />}
        </Section>
    )
}

export default MainContent