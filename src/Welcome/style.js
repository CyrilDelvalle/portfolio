import styled from "styled-components";
import { Font, Text } from "../colors";

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
padding: 0px 150px 0px 150px;
`;

export const HelloMessageContainer = styled.div`
transition-delay: 100ms;
`;
export const NameContainer = styled.div`
transition-delay: 200ms;
`;

export const TitleContainer = styled.div`
transition-delay: 300ms;
`;

export const SubTitleContainer = styled.div`
transition-delay: 400ms;
`;

export const HelloMessage = styled.h1`
margin: 0px 0px 30px 4px;
color: ${Text.green500};
font-family: ${Font.fontMono};
font-size: clamp(14px,5vw,16px);
font-weight: 400;
`;

export const Name = styled.h2`
margin: 0px;
font-size: clamp(40px, 8vw, 80px);
font-weight: 600;
color: ${Text.grey200};
line-height: 1.1;
font-family: ${Font.fontSans};
`;

export const Title = styled.h3`
margin-top: 5px;
color: ${Text.slate};
line-height: 0.9;
font-size: clamp(40px, 8vw, 80px);
font-family: ${Font.fontSans};
margin: 0;
`;

export const SubTitle = styled.p`
margin: 40px 0px 0px;
color: ${Text.slate};
font-family: ${Font.fontSans};
max-width: 480px;
`;
