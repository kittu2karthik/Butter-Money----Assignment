import styled from "styled-components";
import Input from "./Input";

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const ErrorText = styled.span`
  color: var(--error-color);
  font-size: 1.2rem;
`;

function FormField({ label, id, error, ...props }) {
  return (
    <StyledFormGroup>
      {label && <label htmlFor={id}>{label}</label>}
      <Input id={id} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </StyledFormGroup>
  );
}

export default FormField;
