import styled from "styled-components";
import Button from "./Button";
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { useProduct } from "../context/ProductContext";

const StyledAddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 45px;
`;

const QuantityCounter = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-light-grayish-blue);
  border-radius: 10px;
  padding: 0 10px;
  height: inherit;
  color: var(--color-very-dark-blue);
  font-weight: 600;
  font-size: 1.4rem;

  & span {
    padding: 0 40px;
  }
`;

function AddToCart() {
  const {
    quantity,
    handleIncrement,
    handleDecrement,
    handleAddToCart,
    isLoading,
  } = useProduct();

  return (
    <StyledAddToCart>
      <QuantityCounter>
        <Button
          type="counter"
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          <HiOutlineMinus size={15} />
        </Button>

        <span>{quantity}</span>

        <Button type="counter" onClick={handleIncrement}>
          <HiOutlinePlus size={15} />
        </Button>
      </QuantityCounter>

      <Button type="addCart" onClick={handleAddToCart} disabled={isLoading}>
        {!isLoading && (
          <>
            {" "}
            <HiOutlineShoppingCart size={15} />
            Add to cart
          </>
        )}

        {isLoading && "Adding items.."}
      </Button>
    </StyledAddToCart>
  );
}

export default AddToCart;
