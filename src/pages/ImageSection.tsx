import { ReactElement } from "react";
import styled from "styled-components";
import MainSectionImage from "../assets/images/main-section-image.jpg";

function ImageSection(): ReactElement {
  return (
    <ImageSectionContainer>
      <BackgroundImage src={MainSectionImage} alt="sea" />
    </ImageSectionContainer>
  );
}

const ImageSectionContainer = styled.div`
  min-height: 10rem;
  display: flex;
`;

const BackgroundImage = styled.img`
  flex: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default ImageSection;
