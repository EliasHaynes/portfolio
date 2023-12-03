import React from "react";
import styled from "styled-components";

function About() {
    return (
        <Container>
            <h1>Who Am I?</h1>
            <AboutMe>
                <ul>
                    <li>Im from Austin Tx</li>
                    <li>Began Web Dev as a hobby turned career</li>
                    <li>Road work currently</li>
                </ul>
            </AboutMe>
        </Container>
    )
}

const Container = styled.div `
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
`;

const AboutMe = styled.div `
    display:flex;
    
    width:33&;

`;

export default About;



