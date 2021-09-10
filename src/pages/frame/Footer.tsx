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

      <FooterBox>
        <Paragraph>{Locale.allRightsReserved}</Paragraph>
      </FooterBox>
    </FooterContainer>
  );
}

const IconBase = () => {
  return `
    width: 3%;
    height: 3%;
  `;
};

const FooterContainer = styled.div`
  width: 100%;
  min-height: 4rem;
  background-color: #08315f;
  margin-top: auto;
`;

const FooterBox = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  height: 2rem;
  align-items: baseline;
`;

const Link = styled.p`
  cursor: pointer;
`;

const Paragraph = styled.a`
  margin-top: auto;
  margin: auto;
  text-align: center;
`;

const ShortcutBox = styled.div`
  flex: 1;
  margin-top: auto;
  text-align: center;
`;

const CompanyIconStyled = styled(CompanyIcon)`
  ${IconBase()}
  margin-right: 20px;
`;

const FacebookIconStyled = styled(FacebookIcon)`
  ${IconBase()}
  margin-right: 20px;
`;

const InstagramIconStyled = styled(InstagramIcon)`
  ${IconBase()}
`;

export default Footer;
