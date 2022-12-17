import styled from "styled-components";
import { Font, Text } from "../utils";

export const Section = styled.section`
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    height: 100vh;
    padding: 0px;
    padding: 100px 150px 0px 150px;
`;

export const Title = styled.h2`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;

    font-weight: 600;
    color: ${Text.grey100};
    line-height: 1.1;

    &:after{
        content: "";
    display: block;
    position: relative;
    top: 5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: ${Text.grey100};
}

`;

export const MainContent = styled.div`
    display: flex;
    gap: 64px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
`;
export const Panel = styled.div``;
export const ButtonIndicator = styled.div`
    width: 3px;
    height: 42px;
    border-radius: 8px;
    background-color: ${props => props.isSelected ? Text.green100 : Text.slate};
`;
export const ButtonContainer = styled.div`
    display: flex;
    gap: 2px;
`;
export const ButtonHistory = styled.button`
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    display: flex;
    -moz-box-align: center;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0px 20px 2px;
    border-left: 2px solid #112240;
    background-color: transparent;
    color: ${props => props.isSelected ? Text.green100 : Text.slate};
    font-family: ${Font.fontMono};
    font-size: 13px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    border-style: none;
`;

export const PanelContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 5px;
    color: ${Text.lightSlate};
`;

export const PanelTitle = styled.h3`
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
`;

export const PanelLifeTime = styled.p`
    color: ${Text.lightSlate};
    font-family: ${Font.fontMono};
    font-size: 13px;
`;


export const PanelExperiencesContainer = styled.ul`
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* font-size: var(--fz-lg); */
`;

export const PanelExperience = styled.li`
    /* padding-left: 30px;
margin-bottom: 10px; */

/* &:before {
        content: "▹";
        position: relative;
        left: -30px;
        color: ${Text.green100};
        font-size: 14px;
        line-height: 12px;
    } */
`;

export const PanelTask = styled.div`
    display: flex;
    gap: 16px;
`;

export const PanelLogo  = styled.div`
        display: flex;
        /* align-items: center; */
        margin-top: 4px;
        justify-content: center;
        color: ${Text.green100};
        font-size: 14px;
        line-height: 12px;

`;