import { ReactElement } from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../assets/icons/phone.svg";
import { Locale } from "../common/Locale";

function AssistanceInformation(): ReactElement {
  return (
    <>
      <AssistanceInformationContainer>
        <Space space={5.9} />

        <CallContainer>
          <IconPhoneBorder>
            <PhoneIcon />
          </IconPhoneBorder>

          <Space space={0.5} />

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

const Space = styled.div<{ space: number }>`
  padding: ${(props) => `${props.space}rem;`};

  @media (max-width: 745px) {
    padding: 1rem;
  }
`;

const Text = styled.p`
  font-size: 14px;
`;

const CallContainer = styled.div`
  text-align: -webkit-center;
`;

const AssistanceInformationContainer = styled.div`
  text-align: center;
  flex: 1;
`;

const IconPhoneBorder = styled.div`
  width: 5%;
  height: 5%;
  border-radius: 100%;
  border: 2px solid #65baff;
  padding: 0.5rem;
`;

const PhoneNumberLabel = styled.label`
  width: 100%;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

const InformationContainer = styled.div`
  text-align: left;
  padding: 0 5rem;

  @media (max-width: 745px) {
    margin: auto;
    text-align: center;
    padding: 20px;
  }
`;

export default AssistanceInformation;
