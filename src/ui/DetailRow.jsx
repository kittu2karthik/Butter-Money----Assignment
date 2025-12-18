import styled from "styled-components";

const DetailRowElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 600;
    color: var(--color-grey-500);
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  p {
    color: var(--color-grey-900);
    font-size: 1.6rem;
  }
`;

function DetailRow({ label, value, ...props }) {
  return (
    <DetailRowElement {...props}>
      <label>{label}</label>
      <p>{value}</p>
    </DetailRowElement>
  );
}

export default DetailRow;
