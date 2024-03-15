import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 0;
`;

// eslint-disable-next-line react/prop-types
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
