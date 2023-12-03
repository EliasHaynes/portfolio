import React from "react";
import styled from "styled-components";

function Resume() {
    return (
        <Container>
            <h2>My Resume</h2>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
`;

export default Resume;