import { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Locale } from "../common/Locale";
import { ValidationConstants } from "../common/Validation";

type ContactFormProps = {
  email: string;
  subject: string;
  comment: string;
};

function ContactForm(): ReactElement {
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormProps>();

  return (
    <ContactFormContainer>
      <FormContainer>
        <h1> {Locale.emailUs} </h1>

        <InputLabel>{Locale.email}</InputLabel>
        <Input
          placeholder={Locale.placeholderEmail}
          {...register("email", {
            required: true,
            pattern: ValidationConstants.EmailRegex,
            maxLength: ValidationConstants.MaximumInputSize,
          })}
          isValid={!errors.email}
        />
        <InputLabel>{Locale.subject}</InputLabel>
        <Input
          placeholder={Locale.placeholderSubject}
          {...register("subject", {
            required: true,
            maxLength: ValidationConstants.MaximumInputSize,
          })}
          isValid={!errors.subject}
        />

        <InputLabel>{Locale.comment}</InputLabel>
        <InputTextArea
          placeholder={Locale.placeholderComment}
          {...register("comment", {
            required: true,
            maxLength: ValidationConstants.MaximumTextAreaSize,
          })}
          isValid={!errors.comment}
        />

        <SubmitButton type="submit"> {Locale.sendButton} </SubmitButton>
      </FormContainer>
    </ContactFormContainer>
  );
}
const InputBase = () => {
  return `
    display: block;
    padding: 0.6rem;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    border-radius: 5px;
    `;
};

const SubmitButton = styled.button`
  display: block;
  background-color: #189ef8;
  padding: 0.6rem;
  width: 20rem;
  margin: auto;
  margin-top: 3rem;
  border: 1px solid #189ef8;
`;
const Input = styled.input<{ isValid: boolean }>`
  min-width: 38rem;
  border: ${(props) =>
    props.isValid ? "1px solid silver;" : "1px solid red;"};
  ${InputBase()}
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;
const InputTextArea = styled.textarea<{ isValid: boolean }>`
  min-width: 38rem;
  min-height: 12rem;

  border: ${(props) =>
    props.isValid ? "1px solid silver;" : "1px solid red;"};
  font-family: sans-serif;
  ${InputBase()}
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
