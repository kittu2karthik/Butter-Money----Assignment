import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  /* Brand - Yellow */
  --color-brand-50: #FEFCE8;
  --color-brand-100: #FEF9C3;
  --color-brand-200: #FEF08A;
  --color-brand-500: #EAB308;
  --color-brand-600: #CA8A04;
  --color-brand-700: #A16207;
  --color-brand-800: #854D0E;
  --color-brand-900: #713F12;

  /* Grey - Slate */
  --color-grey-0: #ffffff;
  --color-grey-50: #f8fafc;
  --color-grey-100: #f1f5f9;
  --color-grey-200: #e2e8f0;
  --color-grey-300: #cbd5e1;
  --color-grey-400: #94a3b8;
  --color-grey-500: #64748b;
  --color-grey-600: #475569;
  --color-grey-700: #334155;
  --color-grey-800: #1e293b;
  --color-grey-900: #0f172a;

  /* Red / Error */
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  --error-color: #ef4444;

  /* Backdrop */
  --backdrop-color: rgba(0, 0, 0, 0.4);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 10px;

}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--color-brand-50);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
