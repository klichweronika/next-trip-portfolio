import { ReactElement } from "react";
import styled from "styled-components";

function Footer(): ReactElement {
  return (
    <FooterContainer>
      <FooterBox>
        <ShortcutBox>icon</ShortcutBox>

        <ShortcutBox>
          <Paragraph>contact us</Paragraph>
        </ShortcutBox>

        <ShortcutBox>icon</ShortcutBox>

        <ShortcutBox>icon</ShortcutBox>
      </FooterBox>

      <FooterBox>
        <Paragraph>all rights reserved</Paragraph>
      </FooterBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 6rem;
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

export default Footer;
