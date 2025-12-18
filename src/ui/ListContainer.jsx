import styled from "styled-components";

const ListElement = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.4rem;
  margin-top: 3.2rem;
`;

function ListContainer({ children }) {
  return <ListElement>{children}</ListElement>;
}

export default ListContainer;
