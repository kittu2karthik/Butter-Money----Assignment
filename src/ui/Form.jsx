import styled from "styled-components";

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  min-width: 300px;
`;

function Form({ children, onSubmit, ...props }) {
  return (
    <FormElement onSubmit={onSubmit} {...props}>
      {children}
    </FormElement>
  );
}

export default Form;
