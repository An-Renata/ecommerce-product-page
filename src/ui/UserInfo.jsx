import styled from "styled-components";
import Cart from "./Cart";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useProduct } from "../context/ProductContext";
import { useRef } from "react";
import CartSummary from "./CartSummary";

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: relative;
`;

const AvatarImg = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 50%;
  transition: all 0.2s;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--color-primary-orange);
    border-radius: 50%;
  }
`;

function UserInfo() {
  const { isHoverCart, handleOnClick, addProduct } = useProduct();
  // Based on the cart position, set the position of the cart summary below the cart
  const ref = useRef();
  let pos;

  // Set the position of the cart summary
  if (isHoverCart) {
    pos = ref.current.getBoundingClientRect();
  }

  return (
    <div>
      <StyledUser ref={ref}>
        {/* Cart emoji */}
        <Cart onClick={handleOnClick} quantity={addProduct.quantity}>
          <HiOutlineShoppingCart
            size={25}
            style={{ display: "flex", alignItems: "center" }}
          />
        </Cart>

        <AvatarImg src="../images/image-avatar.png" alt="avatar"></AvatarImg>
      </StyledUser>

      {isHoverCart && <CartSummary pos={pos} />}
    </div>
  );
}

export default UserInfo;
