import styled from "styled-components";

const Button = styled.button`
  background-color: purple;
  color: white;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: black;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: black;
    cursor: not-allowed;
  }
`;

export default Button;
