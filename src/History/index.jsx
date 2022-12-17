import React, { useEffect, useState } from "react";
import {
  Section,
  Title,
  MainContent,
  List,
  Panel,
  ButtonHistory,
  ButtonContainer,
  ButtonIndicator,
  PanelContainer,
  PanelTitle,
  PanelTask,
  PanelLifeTime,
  PanelLogo,
  PanelExperience,
  PanelExperiencesContainer,
} from "./style";
import experiences from "../data/experiences.json";

const History = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(
    experiences[currentIndex]
  );

  const { jobTitle, startDate, endDate, tasks } = currentExperience;

  useEffect(() => {
    setCurrentExperience(experiences[currentIndex]);
  }, [currentIndex]);
  return (
    <Section id="history">
      <Title>Historique</Title>
      <MainContent>
        <List>
          {experiences.map(({ society }, index) => {
            return (
              <ButtonContainer>
                <ButtonIndicator isSelected={index === currentIndex} />
                <ButtonHistory
                  onClick={() => setCurrentIndex(index)}
                  isSelected={index === currentIndex}
                >
                  {society}
                </ButtonHistory>
              </ButtonContainer>
            );
          })}
        </List>
        <Panel>
          <div>
            <PanelContainer>
              <PanelTitle>{jobTitle}</PanelTitle>
              <PanelLifeTime>{startDate + " - " + endDate}</PanelLifeTime>
              <PanelExperiencesContainer>
                {tasks.map((task) => {
                  return (
                    <PanelTask>
                      <PanelLogo>▹</PanelLogo>
                      <PanelExperience>{task}</PanelExperience>
                    </PanelTask>
                  );
                })}
              </PanelExperiencesContainer>
            </PanelContainer>
          </div>
        </Panel>
      </MainContent>
    </Section>
  );
};

export default History;
