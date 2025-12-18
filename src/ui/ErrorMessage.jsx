import styled from "styled-components";

const ErrorElement = styled.p`
  text-align: center;
  color: var(--error-color);
  font-size: 1.6rem;
  margin-top: 3.2rem;
  font-weight: 500;
  padding: 1.6rem;
  background-color: var(--color-red-100);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-red-700);
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
`;

function ErrorMessage({ children }) {
  return <ErrorElement>{children}</ErrorElement>;
}

export default ErrorMessage;
