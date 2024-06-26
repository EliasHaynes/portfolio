import React from "react";
import styled from "styled-components";

function About() {
    return (
        <Container id="about-page">
            <AboutMeContainer>
                <AboutMeHeading>Who is Elias?</AboutMeHeading>
                {/* <ul>
                    <li>Im from Austin Tx</li>
                    <li>Began Web Dev as a hobby turned career</li>
                    <li>Road work currently</li>
                </ul> */}
                <AboutMeContent> Growing up I always had an attraction to technology. This led me to study Electronic Engineering throughout highschool. I had come to the realization that this wasnt the area I wanted to study within the tech field. After high school I experimented into a variety of career avenues to find my passion. I remembered back to a high school elective programming class I had taken. Looking back at it I hadnt realized how much I enjoyed it because I already had my presumed career avenue. After extensive research on the field and how to make the initial steps I began my self learning journey and quickly fell interested again. This is how I knew my love for programming is held true.</AboutMeContent>
                <AboutMeContent>After my early days of learning web development and my proof of commitment after completion of free courses I took the next big step and thus began my journey of a formal education within Austin Coding Academy. This is where I honed my skills and worked in a team setting. I worked on projects of all scopes from building API's to full fledged React projects </AboutMeContent>
                <AboutMeContent>Shortly, after my formal education I was contracted to work for Ripple Learning LLC where I worked in server-side logic and AI integration / calibration for specific use case.</AboutMeContent>
                
            </AboutMeContainer>
        </Container>
    )
}

const Container = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
`;

const AboutMeContainer = styled.div `
    display:flex;
    border: 8px outset orangered;
    width:60%;
    flex-direction: column;
    border-radius: 20px;
    background-color: black;
    color: white;
    box-shadow: 60px -16px rgb(143, 44, 9);
    @media(max-width: 768px) {
        box-shadow: 30px -10px rgb(143, 44, 9);
    }

`;

const AboutMeHeading = styled.h2`
    color: orangered;
    border: none;
`

const AboutMeContent = styled.p`
    font-size: 110%; 
`

export default About;



