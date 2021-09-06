import { ReactElement } from "react";
import styled from "styled-components";

function ImageSection(): ReactElement {
  return <ImageSectionContainer />;
}

const ImageSectionContainer = styled.div`
  min-height: 40rem;
  display: flex;
  background-color: silver;
`;

export default ImageSection;
