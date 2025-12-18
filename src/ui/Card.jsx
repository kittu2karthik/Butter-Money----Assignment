import styled from "styled-components";

const CardElement = styled.div`
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-500);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

function Card({ children, ...props }) {
  return <CardElement {...props}>{children}</CardElement>;
}

export default Card;
