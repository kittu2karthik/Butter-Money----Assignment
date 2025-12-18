import styled from "styled-components";

const InputElement = styled.input`
  border: 1px solid var(--color-brand-500);
  background-color: var(--color-brand-50);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: none;
  color: var(--color-brand-500);

  &:focus {
    outline: none;
    border-color: var(--color-brand-500);
    box-shadow: none;
  }

  &::placeholder {
    color: var(--color-brand-600);
  }
`;

function Input({ children, ...props }) {
  return <InputElement {...props}>{children}</InputElement>;
}

export default Input;
