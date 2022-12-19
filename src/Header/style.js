import styled from "styled-components";
import { FontSize, Solid, Text, Transition } from "../utils";

export const Container = styled.header`
    height: 6rem;
    background-color: ${Solid.black900};
    width: 100%;
    align-items: center;
    position: fixed;
    top: 0rem;
    display: flex;

    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(.625rem);
    transition:  ${Transition.bezier};
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 0rem 3.115rem;
    z-index: 12;
    color: ${Text.grey200};
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Links = styled.div`
    display: flex;
    align-items: center;
`;

export const LinkLi = styled.li`
    margin: 0rem 0.5rem;
    font-size: ${FontSize.basic};
    font-size: ${FontSize.big};
    line-height: 1.3;

    cursor: pointer;
`;

export const LinksContainer = styled.ol`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
    margin: 0rem;
    list-style: none;
`;

export const LinkAction = styled.a`
    padding: 0.5rem;
    color: ${Text.grey200};
    text-decoration: none;

    &:hover {
        color: ${Text.green500}
    }
    &:focus {
        color: ${Text.green500}
    }
`;

export const Home = styled.a`
    width: 2.625rem;
    height: 2.625rem;
    color: ${Text.green500};
`;

export const Resume = styled.div`
    transition-delay: 400ms;
`;


export const ResumeButton = styled.a`
    color: ${Text.green500};
    background-color: transparent;
    border: 0.06rem solid  ${Text.green500};
    border-radius: .25rem;
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Transition.bezier};
    margin-left: 1rem;
    font-size: ${FontSize.basic};
`;