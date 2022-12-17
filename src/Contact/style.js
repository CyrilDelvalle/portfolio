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
font-size: clamp(40px, 5vw, 60px);
margin: 0px 0px 10px;
  font-weight: 600;
  color: ${Text.lightSlate};
  line-height: 1.1;
`;

export const Message = styled.p`
    color: ${Text.slate};
font-family: ${Font.fontSans};
font-size: 20px;
line-height: 1.3;
`;

export const Email = styled.a`
    color: ${Text.green500};
    background-color: transparent;
    border: 1px solid ${Text.green500};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    font-family: ${Font.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition:  all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    margin-top: 50px;
`;