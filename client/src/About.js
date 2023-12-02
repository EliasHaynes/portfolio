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

export default About;

const Container = styled.div `
    width: 100%;
    height:100%;
`

const AboutMe = styled.div `
    width:33&;
    height:33%;
`

