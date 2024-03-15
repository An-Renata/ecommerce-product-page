import styled, { css } from "styled-components";

const Cart = styled.button`
  border: none;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    color: var(--color-primary-orange);
  }
  /* Quantity of the products in the cart shows when product is added to cart */
  ${(props) =>
    props.quantity &&
    css`
      &::before {
        content: "${props.quantity}";

        position: absolute;
        top: 5px;
        left: 35px;

        padding: 2px 9px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-primary-orange);
        color: white;
        border-radius: 15px;
        font-size: 1rem;
      }
    `}
`;

Cart.defaultProps = {
  quantity: 0,
};

export default Cart;
