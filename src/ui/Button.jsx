import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-grey-900);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  width: 100%;w
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-brand-600);
  }

  &:focus {
    outline: none;
    box-shadow: var(--shadow-sm);
  }

  &:disabled {
    background-color: var(--color-grey-300);
    color: var(--color-grey-600);
    cursor: not-allowed;
  }
`;

function Button({ children, ...props }) {
  return <ButtonElement {...props}>{children}</ButtonElement>;
}

export default Button;
