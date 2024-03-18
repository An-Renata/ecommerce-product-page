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
        <Cart onClick={handleOnClick} quantity={addProduct}>
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
      {isHoverCart && <CartSummary pos={pos} />}
    </div>
  );
}

export default UserInfo;
