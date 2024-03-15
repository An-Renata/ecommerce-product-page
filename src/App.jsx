import styled, { css } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

import { HiOutlineShoppingCart } from "react-icons/hi";
import NavLinks from "./ui/NavLinks";
import UserInfo from "./ui/UserInfo";
import Main from "./ui/Main";

const StyledApp = styled.div`
  padding: 0 100px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-grayish-blue);
`;

//! MAIN WINDOW

//* REACT COMPONENT
function App() {
  let quantity = 2;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {/* Navigation bar */}
        <NavBar>
          <NavLinks />

          <UserInfo />
        </NavBar>

        {/* Main page */}
        <Main>
          {/* <div>
            <div style={{ padding: "0 80px" }}>
              <img
                style={{ borderRadius: "10px" }}
                src="../public/images/image-product-1.jpg"
                alt="product image"
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                }}
              >
                <img
                  src="../public/images/image-product-1-thumbnail.jpg"
                  alt="product"
                  style={{ width: "20%", borderRadius: "10px" }}
                />
                <img
                  src="../public/images/image-product-2-thumbnail.jpg"
                  alt="product"
                  style={{ width: "20%", borderRadius: "10px" }}
                />
                <img
                  src="../public/images/image-product-3-thumbnail.jpg"
                  alt="product"
                  style={{ width: "20%", borderRadius: "10px" }}
                />
                <img
                  src="../public/images/image-product-4-thumbnail.jpg"
                  alt="product"
                  style={{ width: "20%", borderRadius: "10px" }}
                />
              </div>
            </div>
          </div> */}
          <header
            style={{
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                color: "var(--color-primary-orange)",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "1.2rem",
              }}
            >
              Sneaker Company
            </p>
            <h1
              style={{
                textTransform: "capitalize",
                fontSize: "4rem",
                lineHeight: "1",
                marginBottom: "20px",
              }}
            >
              Fall limited edition sneakers
            </h1>

            <p
              style={{
                color: "var(--color-dark-grayish-blue)",
              }}
            >
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <p
              style={{
                fontWeight: "600",
                fontSize: "2.5rem",
                marginBottom: "30px",
              }}
            >
              $125.00
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                height: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  backgroundColor: "var(--color-light-grayish-blue)",
                  borderRadius: "10px",
                  padding: "0 10px",
                  height: "inherit",
                  color: "var(--color-very-dark-blue)",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                }}
              >
                <img src="../public/images/icon-minus.svg" />
                <p>2</p>
                <img src="../public/images/icon-plus.svg" />
              </div>

              {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
              {/* button place */}
              <Button>
                <HiOutlineShoppingCart size={15} />
                Add to cart
              </Button>
            </div>
          </header>
        </Main>
      </StyledApp>
    </>
  );
}

export default App;
