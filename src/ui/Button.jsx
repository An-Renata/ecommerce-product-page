import styled, { css } from "styled-components";

const btnType = {
  counter: css`
    background-color: var(--color-light-grayish-blue);
    color: var(--color-primary-orange);
  `,

  addCart: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    justify-content: center;
    flex-grow: 1;
    border-radius: 10px;
    background-color: var(--color-primary-orange);
    color: var(--color-white);
  `,

  removeCart: css`
    background-color: transparent;
    color: var(--color-primary-orange);
  `,
  checkout: css`
    padding: 8px 0;
    border-radius: 10px;
    background-color: var(--color-primary-orange);
    color: var(--color-white);
  `,
};

const Button = styled.button`
  border: none;
  height: inherit;

  /* Based on the prop named "type" add additional styles */
  ${(props) => btnType[props.type]}/* ${(props) => btnType[props.type]} */
`;

export default Button;
