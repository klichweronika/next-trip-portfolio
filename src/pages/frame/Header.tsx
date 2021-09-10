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
`;

const ContactUs = styled.a`
  cursor: pointer;
  margin-right: 4px;
  display: flex;
  color: #2f79ce;
  text-transform: uppercase;
  padding: 10px;
  div {
    margin-right: 10px;
  }
`;

const Logo = styled.img`
  max-width: 7rem;
  padding: 1%;
`;

export default Header;
