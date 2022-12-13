import React from 'react'
import { Section, Container, HelloTitle, ServiceContainerList, ServiceContainer, ServiceIconContainer, ServiceTitleContainer, ServiceDescriptionContainer } from './style'

const toto = ['A', 'B', 'C', 'D', 'E', '']

const Service = ({ elem }) => {
    return (<ServiceContainer>
        <ServiceIconContainer></ServiceIconContainer>
        <ServiceTitleContainer></ServiceTitleContainer>
        <ServiceDescriptionContainer></ServiceDescriptionContainer>
        {elem}
    </ServiceContainer>);
}

function Services() {
    return (
        <Section>
            <Container>
                <HelloTitle>About</HelloTitle>
                <ServiceContainerList>
                    {
                        toto.map((elem) => {
                            return <Service elem={elem} />
                        })
                    }
                </ServiceContainerList>
            </Container>
        </Section>
    )
}

export default Services