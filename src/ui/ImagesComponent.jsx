import styled, { css } from "styled-components";
import MainImage from "./MainImage";
import { imageData } from "../data/imageData";
import { useState } from "react";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";

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

const MainImageContainer = styled.div`
  position: relative;

  & span {
    padding: 10px;
    color: var(--color-primary-orange);
    border-radius: 50%;
    background-color: var(--color-white);
    opacity: 0.5;
    transition: all 0.2s;
    display: flex;
  }

  & span:hover {
    cursor: pointer;
    opacity: 1;
  }

  & span:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }

  /* second  span element */
  & span:nth-child(2) {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
`;
function ImagesComponent() {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  function handleClickLeft() {
    // Get the index of the selected image
    const index = imageData.indexOf(selectedImage);
    // If the index is set to 0, and user clicks again, show the last image
    if (index === 0) {
      setSelectedImage(imageData[imageData.length - 1]);
    } else {
      setSelectedImage(imageData[index - 1]);
    }
  }

  function handleClickRight() {
    const index = imageData.indexOf(selectedImage);
    if (index === imageData.length - 1) {
      setSelectedImage(imageData[0]);
    } else {
      setSelectedImage(imageData[index + 1]);
    }
  }
  return (
    <StyledImages>
      <MainImageContainer>
        {/* Arrows */}
        <span onClick={handleClickLeft}>
          <HiOutlineArrowLeft size={15} />
        </span>
        <span onClick={handleClickRight}>
          <HiOutlineArrowRight size={15} />
        </span>
        {/* .............. */}

        <MainImage selectedImage={selectedImage} />
      </MainImageContainer>
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
