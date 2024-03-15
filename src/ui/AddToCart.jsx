import styled from "styled-components";
import Button from "./Button";
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
} from "react-icons/hi";

const StyledAddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 45px;
`;

const QuantityCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: var(--color-light-grayish-blue);
  border-radius: 10px;
  padding: 0 10px;
  height: inherit;
  color: var(--color-very-dark-blue);
  font-weight: 600;
  font-size: 1.4rem;
`;

function AddToCart() {
  return (
    <StyledAddToCart>
      <QuantityCounter>
        <Button type="counter">
          <HiOutlineMinus size={15} />
        </Button>

        <p>2</p>

        <Button type="counter">
          <HiOutlinePlus size={15} />
        </Button>
      </QuantityCounter>

      <Button type="addCart">
        <HiOutlineShoppingCart size={15} />
        Add to cart
      </Button>
    </StyledAddToCart>
  );
}

export default AddToCart;
