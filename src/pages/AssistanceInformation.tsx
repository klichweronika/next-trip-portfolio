import { ReactElement } from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../assets/icons/phone.svg";
import { Locale } from "../common/Locale";

function AssistanceInformation(): ReactElement {
  return (
    <>
      <AssistanceInformationContainer>
        <CallContainer>
          <IconPhoneBorder>
            <PhoneIcon />
          </IconPhoneBorder>

          <PhoneNumberLabel>{Locale.companyPhoneNumber}</PhoneNumberLabel>
        </CallContainer>

        <InformationContainer>
          <h1>{Locale.needAssistance}</h1>
          <Text>{Locale.pleaseCallUs}</Text>
        </InformationContainer>
      </AssistanceInformationContainer>
    </>
  );
}

const PhoneIcon = styled(Icon)`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 10px;
`;

const CallContainer = styled.div`
  text-align: -webkit-center;
`;

const AssistanceInformationContainer = styled.div`
  text-align: center;
  flex: 1;
`;

const IconPhoneBorder = styled.div`
  width: 10%;
  height: 10%;
  border: 2px solid #55baff;
  padding: 1em;
`;

const PhoneNumberLabel = styled.label`
  width: 100%;
  flex: 1;
  flex-direction: column;
  margin-top: 2rem;
  font-weight: bold;
`;

const InformationContainer = styled.div`
  text-align: left;
  padding: 1rem;
`;

export default AssistanceInformation;
