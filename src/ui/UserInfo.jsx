import styled from "styled-components";
import Cart from "./Cart";
import { HiOutlineShoppingCart } from "react-icons/hi";

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
  return (
    <div>
      <StyledUser>
        {/* Cart emoji */}
        <Cart quantity={2}>
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
    </div>
  );
}

export default UserInfo;
