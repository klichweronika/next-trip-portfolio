import ImageSection from "./ImageSection";
import { ReactElement } from "react";
import AssistanceInformation from "./AssistanceInformation";
import ContactForm from "./ContactForm";
import styled from "styled-components";

function MainPage(): ReactElement {
  return (
    <>
      <FormSection>
        <AssistanceInformation />
        <ContactForm />
      </FormSection>

      <ImageSection />
    </>
  );
}

const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30rem;
  flex: 1;
`;

export default MainPage;
