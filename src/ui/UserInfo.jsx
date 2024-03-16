import styled, { css } from "styled-components";
import Cart from "./Cart";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useProduct } from "../context/ProductContext";
import { useRef, useState } from "react";

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
  border-radius: 50%;
  transition: all 0.2s;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--color-primary-orange);
    border-radius: 50%;
  }
`;

const CartSummary = styled.div`
  position: absolute;
  color: var(--color-dark-grayish-blue);
  width: 200px;
  border: 1px solid red;
  ${(props) =>
    props?.pos?.y &&
    css`
      top: ${props.pos.y + 80}px;
    `};
`;

function UserInfo() {
  const { isHoverCart, handleOnMouseOver, handleOnMouseLeave } = useProduct();
  // const [box, setBox] = useState({});
  const ref = useRef();
  let pos;

  if (isHoverCart) {
    pos = ref.current.getBoundingClientRect();
  }

  return (
    <div>
      <StyledUser ref={ref}>
        {/* Cart emoji */}
        <Cart
          onMouseEnter={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        >
          <HiOutlineShoppingCart
            size={25}
            style={{ display: "flex", alignItems: "center" }}
          />
        </Cart>
        <AvatarImg
          src="../public/images/image-avatar.png"
          alt="avatar"
        ></AvatarImg>
      </StyledUser>
      {isHoverCart && <CartSummary pos={pos}>Cart is empty</CartSummary>}
    </div>
  );
}

export default UserInfo;
