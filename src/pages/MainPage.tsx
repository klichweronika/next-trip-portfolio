import { ReactElement } from "react";
import styled from "styled-components";
import AssistanceInformation from "./AssistanceInformation";
import ContactForm from "./ContactForm";
import ImageSection from "./frame/ImageSection";

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
  min-height: 20rem;
  flex: 1;
`;

export default MainPage;
