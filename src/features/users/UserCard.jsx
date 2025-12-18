import styled from "styled-components";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

import Card from "../../ui/Card";
import Button from "../../ui/Button";

const StyledUserCard = styled(Card)`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    font-size: 1.8rem;
    color: var(--color-grey-900);
  }

  p {
    color: var(--color-grey-600);
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const Actions = styled.div`
  margin-top: auto;
  padding-top: 1.6rem;
  border-top: 1px solid var(--color-grey-100);
`;

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <StyledUserCard>
      <UserInfo>
        <h3>{user.name}</h3>
        <p>
          {" "}
          <MdOutlineAlternateEmail /> {user.email}
        </p>
        <p>
          <FaPhoneAlt /> {user.phone}
        </p>
      </UserInfo>
      <Actions>
        <Button onClick={() => navigate(`/user/${user.id}`)}>Read More</Button>
      </Actions>
    </StyledUserCard>
  );
}

export default UserCard;
