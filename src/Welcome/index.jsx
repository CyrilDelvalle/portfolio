import React from 'react'
import { Section, HelloMessageContainer, HelloMessage, NameContainer,Name, TitleContainer, Title, SubTitleContainer, SubTitle  } from './style'

const Welcome = () => {
  return (
    <Section id='welcome'>
      <HelloMessageContainer>
        <HelloMessage>Bonjour, je suis</HelloMessage>
      </HelloMessageContainer>
      <NameContainer>
        <Name>Cyril Delvalle</Name>
      </NameContainer>
      <TitleContainer>
        <Title>Développeur web</Title>
      </TitleContainer>
      <SubTitleContainer>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SubTitle>
      </SubTitleContainer>
    </Section>
  )
}

export default Welcome