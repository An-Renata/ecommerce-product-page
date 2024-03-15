import styled from "styled-components";

const Span = styled.span`
  display: inline-block;
  color: var(--color-primary-orange);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 20px;
`;
function ProductDescription() {
  return (
    <>
      <hgroup>
        <Span>Sneaker Company</Span>
        <Heading>Fall limited edition sneakers</Heading>
      </hgroup>
      <p
        style={{
          color: "var(--color-dark-grayish-blue)",
        }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </>
  );
}

export default ProductDescription;
