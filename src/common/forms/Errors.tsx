import { ReactElement } from "react";
import styled from "styled-components";
import { Locale } from "../Locale";

export type ErrorType = "pattern" | "required" | "maxLength";

export const HandleError = (errorType: ErrorType): ReactElement => {
  switch (errorType) {
    case "required":
      return <Error>{Locale.requiredInfo}</Error>;
    case "pattern":
      return <Error>{Locale.invalidFormat}</Error>;
    case "maxLength":
      return <Error>{Locale.tooManyCharacters}</Error>;
    default:
      return <Error>{Locale.unknownDataError}</Error>;
  }
};

export const Error = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 13px;
`;
