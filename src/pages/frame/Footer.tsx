import { ReactElement } from "react";
import styled from "styled-components";
import { Locale } from "../../common/Locale";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icons/n.svg";

function Footer(): ReactElement {
  return (
    <FooterContainer>
      <FooterBox>
        <ShortcutBox>
          <CompanyIconStyled />
        </ShortcutBox>

        <ShortcutBox>
          <Link>{Locale.contactUs}</Link>
        </ShortcutBox>

        <ShortcutBox>
          <Link>{Locale.privacyPolicy}</Link>
        </ShortcutBox>

        <ShortcutBox>
          <FacebookIconStyled />
          <InstagramIconStyled />
        </ShortcutBox>
      </FooterBox>
    </FooterContainer>
  );
}

const IconBase = () => {
  return `
    width: 5%;
    height: 5%;
  `;
};

const FooterContainer = styled.div`
  width: 100%;
  min-height: 3.2rem;
  background-color: #08315f;
  color: white;
  margin-top: auto;
`;

const FooterBox = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  height: 3rem;
  align-items: baseline;
`;

const Link = styled.p`
  cursor: pointer;
`;

const ShortcutBox = styled.div`
  flex: 1;
  margin: auto;
  text-align: center;
`;

const CompanyIconStyled = styled(CompanyIcon)`
  ${IconBase()}
  margin-right: 30px;
`;

const FacebookIconStyled = styled(FacebookIcon)`
  ${IconBase()}
  margin-right: 30px;
  cursor: pointer;
`;

const InstagramIconStyled = styled(InstagramIcon)`
  ${IconBase()}
  cursor: pointer;
`;

export default Footer;
