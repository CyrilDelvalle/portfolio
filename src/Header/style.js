import styled from "styled-components";
import { Solid, Text } from "../colors";

export const Container = styled.header`
    height: 6rem;
    background-color: ${Solid.black900};
    width: 100%;
    align-items: center;
    position: fixed;
    top: 0px;
    border-bottom: 0.5px solid white;
    display: flex;
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    /* color: var(--lightest-slate); */
    /* font-family: var(--font-mono); */
    /* counter-reset: item 0; */
    padding: 0px 50px;
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

export const Link = styled.li`
    margin: 0px 0.5rem;
    font-size: 14px;
    font-size: 20px;
    line-height: 1.3;
`;

export const LinksContainer = styled.ol`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
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
    width: 42px;
    height: 42px;
    color: ${Text.green500};
`;

export const Resume = styled.div`
    transition-delay: 400ms;
`;


export const ResumeButton = styled.a`
    color: ${Text.green500};
    background-color: transparent;
    border: 1px solid  ${Text.green500};
    border-radius: 4px;
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all cubic-bezier(0.25, 0.46, 0.45, 1);
    margin-left: 15px;
    font-size: 13px;
`;