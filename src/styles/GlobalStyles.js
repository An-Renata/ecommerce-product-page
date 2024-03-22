import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-primary-orange: hsl(26, 100%, 55%);
  --color-primary-pale-orange: hsl(25, 100%, 94%);
  --color-very-dark-blue: hsl(220, 13%, 13%);
  --color-dark-grayish-blue: hsl(219, 9%, 45%);
  --color-light-grayish-blue: hsl(223, 64%, 98%);
  --color-white: hsl(0, 0%, 100%);
  --color-black-opacity-background: hsl(0, 0%, 0%, 0.75);
  --color-grayish-blue: hsl(220, 14%, 75%);
}

/* CSS reset */
html {
  font-size: 62.5%;
  font-family: "Kumbh Sans", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  /* font-family: "Poppins", sans-serif; */
  /* color: var(--color-grey-700); */
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  margin: 0 auto;
  max-width: 1400px;
}

button {
    cursor: pointer;
}

ul {
    list-style: none;
}
img {
    max-width: 100%;
}
`;

export default GlobalStyles;
