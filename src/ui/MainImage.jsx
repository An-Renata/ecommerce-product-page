import styled from "styled-components";

const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

// eslint-disable-next-line react/prop-types
function MainImage({ selectedImage }) {
  // eslint-disable-next-line react/prop-types
  return <Img src={selectedImage.srcLarge} alt={selectedImage.alt} />;
}

export default MainImage;
