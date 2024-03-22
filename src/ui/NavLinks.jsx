import styled, { css } from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Link = styled.a`
  cursor: pointer;
  padding-bottom: 30px;
  transition: all 0.2s;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  color: var(--color-dark-grayish-blue);

  &:hover {
    border-bottom: 3px solid var(--color-primary-orange);
    color: var(--color-dark-blue);
  }

  /* Logo Link is different from other links */
  ${(props) =>
    props.type === "logo" &&
    css`
      cursor: pointer;
      border-bottom: none;
      padding-bottom: 0;
      width: 40%;
      &:hover {
        border-bottom: none;
      }
    `}
`;

function NavLinks() {
  return (
    <UnorderedList>
      <Link type="logo" href="#">
        <img src="../images/logo.svg" alt="company logo" />
      </Link>
      <li>
        <Link href="#">Collections</Link>
      </li>
      <li>
        <Link href="#">Men</Link>
      </li>
      <li>
        <Link href="#">Women</Link>
      </li>
      <li>
        <Link href="#">About</Link>
      </li>
      <li>
        <Link href="#">Contact</Link>
      </li>
    </UnorderedList>
  );
}

export default NavLinks;
