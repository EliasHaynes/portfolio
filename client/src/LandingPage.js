import React,{useState} from "react";
import styled from "styled-components";

function LandingPage() {

    return (
        <Container>
            <LandingHeader>Hello Im Elias</LandingHeader>
            <LandingHeader>Backend Developer</LandingHeader>
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    width:100%;
`;

const LandingHeader = styled.h1`
    margin-left: 15%;
`;

export default LandingPage;