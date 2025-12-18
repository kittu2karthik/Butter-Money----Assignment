import styled from "styled-components";

const NavBarElement = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: auto;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

function NavBar({ children }) {
  return <NavBarElement>{children}</NavBarElement>;
}

export default NavBar;
