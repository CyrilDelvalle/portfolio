import styled from "styled-components";
import { Solid, Text } from "../colors";

export const Section = styled.div`
    background-color: ${Solid.black900};
    min-height: 100vh;
    display: flex;
    /* width: 100%; */
    top: 0;
    padding: 0 2rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`;
export const ServiceContainerList = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
`;
export const ServiceContainer = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 1rem;
    border: 1px solid ${Text.grey100};
`;

export const HelloTitle = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
    color: ${Text.grey100};
`;
export const Profession = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
    color: ${Text.grey100};
`;
export const Name = styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: green;
`;
export const Typing = styled.span`
    color: green;
`;
export const HomeImage = styled.div`
    &:after {

    }
`;

export const Description = styled.p`
    font-size: 1.5rem;
    color: ${Text.grey100};
`;

export const AboutMe = styled.button`
    font-weight: 500;
    padding: 1rem 2rem;
    background-color: green;
    color: white;
    border-radius: 2.5rem;
    border: 2px solid white;
    cursor: pointer;
    border: none;

    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

export const ServiceIconContainer = styled.div``;
export const ServiceTitleContainer = styled.div``;
export const ServiceDescriptionContainer = styled.div``;