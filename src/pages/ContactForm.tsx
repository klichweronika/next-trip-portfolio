import { ReactElement } from "react";
import styled from "styled-components";

function ContactForm(): ReactElement {
  return (
    <ContactFormContainer>
      <FormContainer>
        <h1>email us</h1>

        <InputLabel> email us</InputLabel>
        <Input placeholder="send us a message" />
        <InputLabel>email us </InputLabel>
        <Input placeholder="send us a message" />

        <InputLabel> send us a message</InputLabel>
        <InputTextArea placeholder="write to us" />

        <SubmitButton type="submit">ok </SubmitButton>
      </FormContainer>
    </ContactFormContainer>
  );
}

const SubmitButton = styled.button`
  display: block;
  background-color: #189ef8;
  padding: 0.6rem;
  width: 20rem;
  margin: auto;
  margin-top: 3rem;
  border: 1px solid #189ef8;
`;
const Input = styled.input`
  min-width: 25rem;
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;
const InputTextArea = styled.textarea`
  min-width: 25rem;
  min-height: 10rem;
`;

const FormContainer = styled.form`
  padding: 5rem;
`;
const InputLabel = styled.label`
  line-height: 2.5;
  text-align: left;
  display: block;
  margin-top: 1.5rem;
  color: #868686;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

export default ContactForm;
