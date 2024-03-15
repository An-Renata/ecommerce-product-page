import styled from "styled-components";

const Price = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Discount = styled.span`
  margin-left: 15px;
  color: var(--color-primary-orange);
  background-color: var(--color-primary-pale-orange);
  border-radius: 7px;
  font-size: 1.4rem;
  padding: 2px 8px;
  font-weight: 700;
`;

function ProductPrice() {
  let discount = 20;
  const previousPrice = 250;
  return (
    <>
      <Price>$125.00 {discount > 0 && <Discount>{discount}%</Discount>}</Price>
      {previousPrice && <div>${previousPrice}</div>}
    </>
  );
}

export default ProductPrice;
