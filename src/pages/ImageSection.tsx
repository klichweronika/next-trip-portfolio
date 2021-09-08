import { ReactElement } from "react";
import styled from "styled-components";

function ImageSection(): ReactElement {
  return <ImageSectionContainer></ImageSectionContainer>;
}

const ImageSectionContainer = styled.div`
  min-height: 20rem;
  display: flex;
`;

export default ImageSection;
