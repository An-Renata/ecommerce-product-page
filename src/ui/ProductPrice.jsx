import styled from "styled-components";

const Price = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: "${(props) =>
      props.prevPrice > 0 ? "$" + props.prevPrice.toFixed(2) : ""}";
    text-decoration: line-through;
    position: absolute;
    top: 35px;
    font-size: 1.4rem;
    color: var(--color-grayish-blue);
  }
`;

const Discount = styled.span`
  color: var(--color-primary-orange);
  background-color: var(--color-primary-pale-orange);
  margin-left: 15px;
  border-radius: 7px;
  font-size: 1.4rem;
  padding: 2px 8px;
  font-weight: 700;
`;

function ProductPrice() {
  const discount = 20;
  const currentPrice = 125;
  const previousPrice = 250;

  return (
    <>
      <Price prevPrice={previousPrice}>
        <span>${currentPrice.toFixed(2)}</span>{" "}
        {discount > 0 && <Discount>{discount}%</Discount>}
      </Price>
    </>
  );
}

export default ProductPrice;
