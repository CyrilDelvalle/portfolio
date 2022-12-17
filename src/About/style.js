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
gap: 0px 10px;
padding: 0px;
overflow: hidden;
list-style: none;

display: grid;
grid-template-columns: repeat(2, minmax(140px, 200px));
`;

export const Skill = styled.li`
position: relative;
margin-bottom: 10px;
padding-left: 20px;
font-family: ${Font.fontMono};
font-size: 13px;
color: ${Text.slate};

    &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: ${Text.green500};
        font-size: 14px;
        line-height: 12px;
    }
`;

export const PicContainer = styled.div`

`;