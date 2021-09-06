import { ReactElement } from "react";
import styled from "styled-components";

function ContactForm(): ReactElement {
  return (
    <ContactFormContainer>
      <FormContainer>
        <h1> contact us</h1>

        <SubmitButton type="submit">click</SubmitButton>
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

const ContactFormContainer = styled.div`
  flex: 1;
`;

const FormContainer = styled.form`
  padding: 5rem;
`;

export default ContactForm;
