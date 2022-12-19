import styled from "styled-components";
import { Font, Text, FontSize, Transition } from "../utils";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0rem;
    padding: 6.25rem 9.375rem 0rem 9.375rem;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0.6rem 0rem 2.5rem;
    width: 100%;
    font-size: ${FontSize.title};
    white-space: nowrap;

    font-weight: 600;
    color: ${Text.grey100};
    line-height: 1.1;

    &:after{
        content: "";
    display: block;
    position: relative;
    top: 0.3rem;
    width: 18.75rem;
    height: 0.06rem;
    margin-left: 1.25rem;
    background-color: ${Text.grey100};
}

`;

export const MainContent = styled.div`
    display: flex;
    gap: 4rem;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
`;
export const Panel = styled.div``;
export const ButtonIndicator = styled.div`
    width: 0.1rem;
    height: 2.6rem;
    border-radius: 0.03rem;
    background-color: ${props => props.isSelected ? Text.green100 : Text.slate};
`;
export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.125rem;
`;
export const ButtonHistory = styled.button`
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${Transition.bezier};
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.6rem;
    padding: 0rem 1.25rem 0.125rem;
    border-left: .125rem solid #112240;
    background-color: transparent;
    color: ${props => props.isSelected ? Text.green100 : Text.slate};
    font-family: ${Font.fontMono};
    font-size: ${FontSize.basic};
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    border-style: none;
`;

export const PanelContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 0.625rem 0.3rem;
    color: ${Text.lightSlate};
`;

export const PanelTitle = styled.h3`
    margin-bottom: 0.125rem;
    font-size: ${FontSize.big};
    font-weight: 500;
    line-height: 1.3;
`;

export const PanelLifeTime = styled.p`
    color: ${Text.lightSlate};
    font-family: ${Font.fontMono};
    font-size: ${FontSize.basic};
`;


export const PanelExperiencesContainer = styled.ul`
    padding: 0rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PanelExperience = styled.li`
`;

export const PanelTask = styled.div`
    display: flex;
    gap: 1rem;
`;

export const PanelLogo = styled.div`
        display: flex;
        margin-top: .25rem;
        justify-content: center;
        color: ${Text.green100};
        font-size: ${FontSize.basic};
        line-height: .75rem;

`;