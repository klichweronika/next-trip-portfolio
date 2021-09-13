import { ReactElement } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Locale } from "../common/Locale";
import { ValidationConstants } from "../common/Validation";
import { ErrorType, HandleError } from "../common/forms/Errors";

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

        <InputLabel>
          {" "}
          {Locale.email} <Required>*</Required>{" "}
        </InputLabel>
        <Input
          placeholder={Locale.placeholderEmail}
          {...register("email", {
            required: true,
            pattern: ValidationConstants.EmailRegex,
            maxLength: ValidationConstants.MaximumInputSize,
          })}
          isValid={!errors.email}
        />
        {errors.email?.ref && HandleError(errors.email.type as ErrorType)}

        <InputLabel>
          {" "}
          {Locale.subject} <Required>*</Required>{" "}
        </InputLabel>
        <Input
          placeholder={Locale.placeholderSubject}
          {...register("subject", {
            required: true,
            maxLength: ValidationConstants.MaximumInputSize,
          })}
          isValid={!errors.subject}
        />
        {errors.subject?.ref && HandleError(errors.subject.type as ErrorType)}

        <InputLabel>
          {" "}
          {Locale.comment} <Required>*</Required>{" "}
        </InputLabel>
        <InputTextArea
          placeholder={Locale.placeholderComment}
          {...register("comment", {
            required: true,
            maxLength: ValidationConstants.MaximumTextAreaSize,
          })}
          isValid={!errors.comment}
        />
        {errors.comment && HandleError(errors.comment.type as ErrorType)}

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

const Required = styled.span`
  color: red;
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;

const FormContainer = styled.form`
  padding: 5rem;
`;

const Input = styled.input<{ isValid: boolean }>`
  min-width: 38rem;
  border: ${(props) =>
    props.isValid ? "1px solid silver;" : "1px solid red;"};
  ${InputBase()}
`;

const InputTextArea = styled.textarea<{ isValid: boolean }>`
  min-width: 38rem;
  min-height: 12rem;

  border: ${(props) =>
    props.isValid ? "1px solid silver;" : "1px solid red;"};
  font-family: sans-serif;
  ${InputBase()}
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

const SubmitButton = styled.button`
  display: block;
  background-color: #189ef8;
  margin-bottom: 1.5rem;
  padding: 0.1rem;
  width: 20rem;
  border-radius: 25px;
  margin: auto;
  margin-top: 3rem;
  border: 1px solid #189ef8;
`;

export default ContactForm;
