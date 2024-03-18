import { HiOutlineTrash } from "react-icons/hi";
import styled, { css } from "styled-components";

import Button from "./Button";
import { useProduct } from "../context/ProductContext";

const StyledCartSummary = styled.div`
  position: absolute;
  color: var(--color-dark-grayish-blue);
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: var(--color-white);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  border-radius: 10px;
  & h2 {
    border-bottom: 1px solid var(--color-grayish-blue);
    font-size: 1.4rem;
    padding-bottom: 20px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & div > div {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-items: flex-start;
  }

  ${(props) =>
    props?.pos &&
    css`
      top: ${props.pos.y + 50}px;
      left: ${props.pos.x - 100}px;
    `};
`;

function CartSummary({ pos }) {
  const { addProduct } = useProduct();

  return (
    <StyledCartSummary pos={pos}>
      <h2>Cart</h2>

      <div>
        <img
          src={addProduct.img}
          style={{ width: "10%", height: "10%", borderRadius: "5px" }}
        />
        <div>
          <h3>{addProduct.title}</h3>
          <p>
            ${addProduct.price.toFixed(2)} x {addProduct.quantity}
          </p>
          <p>${(addProduct.price * addProduct.quantity).toFixed(2)}</p>
        </div>
        <Button>
          <HiOutlineTrash size={15} />
        </Button>
      </div>
      <Button type="addCart">Checkout</Button>
    </StyledCartSummary>
  );
}

export default CartSummary;
