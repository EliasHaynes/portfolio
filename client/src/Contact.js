import React from "react";
import styled from "styled-components";

const key = process.env.ACCESS_KEY;

function Contact() {
  
  return (
    <Container id="contact-page">
      <h2>Contact Me</h2>


      <Form  action="https://api.web3forms.com/submit" method="POST">
        {/* Configuration of Emailing */}
        <input
          type="hidden"
          name="access_key"
          value="fe7a83d6-edc8-47be-a9b7-3cbd0e80bc76"
        />
        <input type="hidden" name="from_name" value="Portfolio Contact" />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <InputContainer>
          {/* Form Inputs */}
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
        </InputContainer>
        <TextArea name="message" placeholder="Message" required></TextArea>

        <Submit type="submit">Get in Touch!</Submit>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`;

const Form = styled.form`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  background-color:black;
  box-shadow: 60px -16px orangered;
border-radius: 20px;
@media(max-width: 768px) {
  box-shadow: 20px -10px orangered;
  width: 85%;
  margin-top: 10%;
}
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  @media(max-width: 760px) {
    flex-flow: column nowrap;
  }
`;

const Input = styled.input`
  background-color: black;
  border: black;
  border-bottom: 1px solid orangered;
  margin-right: 5%;
  color: white;
  @media(max-width: 760px) {
    display:flex;
    margin-top: 10%;
  }
`;

const Submit = styled.button`
  margin-top: 5%;
  background-color: black;
  color: orangered;
  border: 1px solid orangered;
  border-radius: 20px;
  box-shadow: 5px -5px orangered;
`;

const TextArea = styled.textarea`
  background-color: black;
  border: black;
  border-bottom: 1px solid orangered;
  color: white;
`;

export default Contact;
