import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import NavLinks from "./ui/NavLinks";
import UserInfo from "./ui/UserInfo";
import Main from "./ui/Main";
import ImagesComponent from "./ui/ImagesComponent";
import Header from "./ui/Header";
import ProductDescription from "./ui/ProductDescription";
import ProductPrice from "./ui/ProductPrice";
import AddToCart from "./ui/AddToCart";
import { ProductProvider } from "./context/ProductContext";

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

//* REACT COMPONENT
function App() {
  return (
    <ProductProvider>
      <GlobalStyles />
      <StyledApp>
        {/* Navigation bar */}
        <NavBar>
          <NavLinks />

          <UserInfo />
        </NavBar>

        {/* Main page */}
        <Main>
          {/* Images container */}
          <ImagesComponent />

          {/* Information about the product */}
          <Header>
            <ProductDescription />
            <ProductPrice />
            <AddToCart />
          </Header>
        </Main>
      </StyledApp>
    </ProductProvider>
  );
}

export default App;
