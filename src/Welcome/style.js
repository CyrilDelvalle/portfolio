import styled from "styled-components";
import { Font, Text, FontSize } from "../utils";

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
padding: 0rem 9.3rem 0rem 9.3rem;
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
    margin: 0rem 0rem 1.875rem .25rem;
    color: ${Text.green500};
    font-family: ${Font.fontMono};
    font-size: ${FontSize.Title};
    font-weight: 400;
`;

export const Name = styled.h2`
    margin: 0rem;
    font-size: ${FontSize.title};
    font-weight: 600;
    color: ${Text.grey200};
    line-height: 1.1;
    font-family: ${Font.fontSans};
`;

export const Title = styled.h3`
    margin-top: .5rem;
    color: ${Text.slate};
    line-height: 0.9;
    font-size: ${FontSize.title};
    font-family: ${Font.fontSans};
    margin: 0;
`;

export const SubTitle = styled.p`
    margin: 2.5rem 0rem 0rem;
    color: ${Text.slate};
    font-family: ${Font.fontSans};
    max-width: 30rem;
`;
