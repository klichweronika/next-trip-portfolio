import { ReactElement } from "react";
import styled from "styled-components";

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <ContactUs>
        <div>call us</div>
        <div>phone number</div>
      </ContactUs>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: silver
  box-sizing: border-box;
  padding: 0 5rem;

`;

const ContactUs = styled.a`
  margin-right: 5px;
  display: flex;
  padding: 5px;
  div {
    margin-right: 5px;
  }
`;

export default Header;
