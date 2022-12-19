import styled from "styled-components";
import { Font, FontSize, Text } from "../utils";

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
display: flex;
-moz-box-align: center;
align-items: center;
position: relative;
margin: .625rem 0rem 2.5rem;
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
    top: .5rem;
    width: 18.75rem;
    height: 0.06rem;
    margin-left: 1.25rem;
    background-color: ${Text.grey100};
}

`;

export const MainContent = styled.div`
    display: flex;
    gap: 5rem;
    width: 100%;
`;

export const ContentText = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        color: ${Text.slate};
        margin: 0;
    }
`;
export const ContentPic = styled.div`
    width: 40%;
`;

export const Skills = styled.ul`
    gap: 0rem .625rem;
    padding: 0rem;
    overflow: hidden;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, minmax(8.75rem, 12.5rem));
`;

export const Skill = styled.li`
    position: relative;
    margin-bottom: .6rem;
    padding-left: 1.25rem;
    font-family: ${Font.fontMono};
    font-size: ${FontSize.basic};
    color: ${Text.slate};

    &:before {
        content: "▹";
        position: absolute;
        left: 0rem;
        color: ${Text.green100};
        font-size: ${FontSize.basic};
        line-height: .75rem;
    }
`;

export const PicContainer = styled.div`

`;