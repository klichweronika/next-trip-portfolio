import { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Axios from "axios";
import { Api } from "../common/ApiAdress";
import { Locale } from "../common/Locale";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
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
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>();

  const [confirmedHuman, setConfirmedHuman] = useState<boolean | undefined>(
    undefined
  );

  const handleReCaptchaVerify = useCallback(
    (token) => {
      setConfirmedHuman(true);
    },
    [setConfirmedHuman]
  );

  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    try {
      if (!confirmedHuman) return;

      const result = await Axios.post<ContactFormProps>(
        Api.contactMessageApi,
        data
      );

      alert(
        `API response status: ${result.status} for data: ${JSON.stringify(
          result.data
        )}.`
      );
    } catch (error) {
      alert(`Error occured while we were trying to send your request.`);
    }
  };

  return (
    <ContactFormContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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

        <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
        <SubmitButton type="submit"> {Locale.sendButton} </SubmitButton>
      </FormContainer>
    </ContactFormContainer>
  );
}

const InputBase = () => {
  return `
    display: block;
    padding: 10px;
    margin-right: 10rem;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    border-radius: 5px;
      @media (max-width: 1030px) {
      width: 50%
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
  min-width: 100%;
  border: ${(props) =>
    props.isValid ? "1px solid silver;" : "1px solid red;"};
  ${InputBase()}
`;

const InputTextArea = styled.textarea<{ isValid: boolean }>`
  min-width: 100%;
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
  color: white;
  background-color: #189ef8;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  padding: 0.6rem;
  width: 15rem;
  border-radius: 25px;
  margin: auto;
  margin-top: 3rem;
  border: 1px solid #189ef8;

  &:hover {
    background-color: #157ec4;
  }
`;

export default ContactForm;
