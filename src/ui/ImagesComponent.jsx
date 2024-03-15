import styled from "styled-components";
import MainImage from "./MainImage";
import { imageData } from "../data/imageData";

const StyledImages = styled.div`
  padding: 0 80px;
`;

const ImageThumbnailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const Thumbnails = styled.img`
  width: 20%;
  border-radius: 10px;
`;

function ImagesComponent() {
  return (
    <StyledImages>
      <MainImage />

      <ImageThumbnailsContainer>
        {/* Images thumbnails */}
        {imageData?.map((image) => (
          <Thumbnails src={image.src} alt={image.alt} key={image.src} />
        ))}
      </ImageThumbnailsContainer>
    </StyledImages>
  );
}

export default ImagesComponent;
