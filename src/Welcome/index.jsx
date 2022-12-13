import React from 'react'
import { Section, Container, Row, HomeInfo, HelloTitle, Name, Profession, Typing, HomeImage, Description, AboutMe } from './style'

function Welcome() {
    return (
        <Section>
            <Container>
                <Row>
                    <HomeInfo>
                        <HelloTitle>Bonjour, je suis <Name>Cyril Delvalle</Name></HelloTitle>
                        <Profession>Je suis <Typing>web designer</Typing></Profession>
                        <Description>Passionné par le développement web, je vous propse mes services en tant que développeur et intégrateur web.</Description>
                        <AboutMe href="">En savoir plus</AboutMe>
                    </HomeInfo>
                    <HomeImage>
                        <img style={{ width: 300, height: 400 }} src={require("../assets/profil.jpg")} alt="" />
                    </HomeImage>
                </Row>
            </Container>
        </Section>
    )
}

export default Welcome