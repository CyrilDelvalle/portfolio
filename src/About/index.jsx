import React from 'react'
import { Section, Container, Row, HomeInfo, HelloTitle, Name, Profession, Typing, HomeImage, Description, AboutMe } from './style'

function About() {
    return (
        <Section>
            <Container>
                <Row>
                    <HomeInfo>
                        <HelloTitle>About</HelloTitle>
                    </HomeInfo>
                </Row>
            </Container>
        </Section>
    )
}

export default About