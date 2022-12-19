import styled from "styled-components";
import { Font, Text, FontSize, Transition } from "../utils";

export const Section = styled.section`
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0rem;
  padding: 6.25rem 9.375rem 0rem 9.375rem;
`;

export const Title = styled.h2`
font-size: ${FontSize.title};
margin: 0rem 0rem .625rem;
  font-weight: 600;
  color: ${Text.lightSlate};
  line-height: 1.1;
`;

export const Message = styled.p`
    color: ${Text.slate};
    font-family: ${Font.fontSans};
    font-size: ${FontSize.big};
    line-height: 1.3;
`;

export const Email = styled.a`
    color: ${Text.green100};
    background-color: transparent;
    border: 0.06rem solid ${Text.green100};
    border-radius: .25rem;
    padding: 1.25rem 1.75rem;
    font-size: ${FontSize.basic};
    font-family: ${Font.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Transition.bezier};
    margin-top: 3.125rem;
`;