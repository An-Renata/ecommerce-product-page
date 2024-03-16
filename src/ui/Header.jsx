import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// eslint-disable-next-line react/prop-types
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
