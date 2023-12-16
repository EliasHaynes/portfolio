import React from "react";
import styled from "styled-components";

function About() {
    return (
        <Container>
            <AboutMeContainer>
                <AboutMeHeading>Who is Elias?</AboutMeHeading>
                {/* <ul>
                    <li>Im from Austin Tx</li>
                    <li>Began Web Dev as a hobby turned career</li>
                    <li>Road work currently</li>
                </ul> */}
                <AboutMeContent> Growing up I always had an attraction to technology. This led me to study Electronic Engineering throughout highschool. I had come to the realization that this wasnt the area i wanted to study within the tech field. After high school I dabbled into a variety of career avenues to find my passion, one day I remembered back to a high school elective programming class I had taken. This class I enjoyed but I never considered it as my path because i already had my presumed career avenue. After some research on the field and how to make the initial steps i began my self learning journey and quickly fell interested again. This is how i knew my love for programming is held true.</AboutMeContent>
                <AboutMeContent>After my early days of learning web development and my proof of commitment after completion of free courses i toke the next big step and thus began my journey of a formal education within Austin Coding Academy. This is where i honed my skills and worked in a team setting. I worked on projects of all scopes from building API's to full fledged React projects </AboutMeContent>
                <AboutMeContent>Shortly, after my formal education I was contracted to work for Ripple Learning LLC where i worked in server-side logic and AI integration / calibration for specific use case.</AboutMeContent>
                
            </AboutMeContainer>
        </Container>
    )
}

const Container = styled.div `
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width: 100%;
`;

const AboutMeContainer = styled.div `
    display:flex;
    border: 2px solid orangered;
    width:60%;
    flex-direction: column;
    border-radius: 20px;
    margin-right: 10%;
`;

const AboutMeHeading = styled.h2`
    color: orangered;
`

const AboutMeContent = styled.p`
    font-size: 110%; 
`

export default About;



