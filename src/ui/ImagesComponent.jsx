import styled, { css } from "styled-components";
import MainImage from "./MainImage";
import { imageData } from "../data/imageData";
import { useState } from "react";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

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
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.5;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

function ImagesComponent() {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  return (
    <StyledImages>
      <MainImage selectedImage={selectedImage} />
      <ImageThumbnailsContainer>
        {/* Images thumbnails */}
        {imageData?.map((image) => (
          <Thumbnails
            src={image.src}
            alt={image.alt}
            key={image.src}
            selected={image === selectedImage}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ImageThumbnailsContainer>
    </StyledImages>
  );
}

export default ImagesComponent;
