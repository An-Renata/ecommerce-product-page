import styled from "styled-components";

const Img = styled.img`
  border-radius: 10px;
`;

function MainImage() {
  return <Img src="../public/images/image-product-1.jpg" alt="product image" />;
}

export default MainImage;
