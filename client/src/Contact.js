import React from "react";
import styled from "styled-components";

function Contact() {

    return (
        <Container>
            <h2>Contact Me</h2>
            <Form>
                <InputContainer>
                    <label for="name"></label>
                    <Input id="name" placeholder="Name"></Input>
                    <label for="email"></label>
                    <Input id="email" placeholder="Email"></Input>
                    <label for="message"></label>
                </InputContainer>
                <TextAreaContainer>
                  <TextArea id="message" placeholder="Message"></TextArea>  
                </TextAreaContainer>
            
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border: 5px solid purple;
`;

const Form = styled.form`
    width: 50%;
    height: 40%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const InputContainer = styled.div`
    margin-bottom: 10px;
    display:flex;
    flex-direction: row;
`;

const Input = styled.input`
    background-color: black;
    border: black;
    border-bottom: 1px solid orangered;
    margin-right: 5%;

`;

const Submit = styled.button`

`;

const TextAreaContainer = styled.div`

`;

const TextArea = styled.textarea`
    background-color: black;
    border: black;
    border-bottom: 1px solid orangered;
`;

export default Contact;