import { ReactElement } from "react";
import styled from "styled-components";
import { Locale } from "../../common/Locale";
import LogoImage from "../../assets/images/logo.png";

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="logo" />
      <ContactUs>
        <div>{Locale.callUs}</div>
        <div>{Locale.companyPhoneNumber}</div>
      </ContactUs>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  background-color: #eeeeee;
  box-sizing: border-box;
  align-items: center;
  padding: 0rem 4rem;

  @media (max-width: 600px) {
    display: block;
  }
`;

const ContactUs = styled.a`
  cursor: pointer;
  margin-right: 4px;
  display: flex;
  color: #2f79ce;
  text-transform: uppercase;
  padding: 10px;

  @media (max-width: 745px) {
    display: block;
    text-align: center;
  }
  div {
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  max-width: 7rem;
  padding: 1%;

  @media (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;

export default Header;
