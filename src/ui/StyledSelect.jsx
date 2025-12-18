import styled from "styled-components";

const SelectElement = styled.select`
  border: 1px solid var(--color-brand-500);
  background-color: var(--color-brand-50);
  border-radius: 5px;
  padding: 0.8rem 1.6rem;
  box-shadow: none;
  color: var(--color-brand-600);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: black;
  }
`;

function StyledSelect({ children, ...props }) {
  return <SelectElement {...props}>{children}</SelectElement>;
}

export default StyledSelect;
