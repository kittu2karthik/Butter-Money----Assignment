import styled from "styled-components";
import Logo from "./Logo";
import UsersControls from "../features/users/UsersControls";

const HeaderElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
  background-color: var(--color-brand-500);

  flex-wrap: wrap;
  gap: 1.6rem;
  padding: 1.6rem 3.6rem;
  border-radius: var(--border-radius-lg);

  h1 {
    font-size: 2.8rem;
    color: var(--color-grey-900);
  }

  @media (max-width: 768px) {
    padding: 1.6rem 2rem;
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: 1.2rem;
    padding: 1.2rem 1.6rem;

    h1 {
      font-size: 2.2rem;
    }
  }
`;

function Header({ onIsAddUserOpen }) {
  return (
    <HeaderElement>
      <Logo />
      <UsersControls onAddUser={() => onIsAddUserOpen(true)} />
    </HeaderElement>
  );
}

export default Header;
