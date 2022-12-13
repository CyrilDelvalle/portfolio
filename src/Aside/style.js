import styled from "styled-components";
import { Solid, Text } from "../colors";

export const Container = styled.div`
    width: 14rem;
    background-color: ${Solid.black800};
    border-right: 1px solid black;
    z-index: 10;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    left: 0;
    /* position: fixed;
    height: 100%; */
`;

export const Menu = styled.ul`
    /* margin-top: 3rem; */
    padding-left: 0;
`;

export const MenuElement = styled.li`
    /* list-style: none; */
    /* color: ${Text.grey100}; */
    margin-bottom: 1rem;
    display: block;
    cursor: pointer;
`;

export const NavToggler = styled.div`
    height: 3rem;
    width: 3.5rem;
    border: 1px solid black;
    cursor: pointer;
    position: fixed;
    left: 300px;
    top: 20px;
    border-radius: 5px;
    background: red;
    display: none;
    align-items: center;
    justify-content: center;
`;

export const NavTogglerElement = styled.span`
    height: 2px;
    width: 18px;
    background-color: green;
    display: inline-block;
    position: relative;

    &:before {
        content: '';
        height: 2px;
        width: 18px;
        background: black;
        position: absolute;
        top: -6px;
        left: 0px;
    }
    &:after {
        content: '';
        height: 2px;
        width: 18px;
        background: black;
        position: absolute;
        top: 6px;
        left: 0px;
    }
`;


export const Link = styled.a`
    font-size: 1.3rem;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.isSelected ? Text.green500 : Text.grey100};
    display: flex;
    gap: 1rem;
    color: black;
    padding: 0.5rem 1rem;
    
    color: ${props => props.isSelected ? Text.green500 : Text.grey100};
`;

export const Logo = styled.a`
    position: absolute;
    color: ${Text.grey100};
    top: 3rem;
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: .5rem;
`;