import UserCard from "./UserCard";
import ListContainer from "../../ui/ListContainer";

function UserList({ users }) {
  if (users.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "3.2rem" }}>
        No users found.
      </p>
    );
  }

  return (
    <ListContainer>
      {users.map((user) => (
        <UserCard key={user.id || user.email} user={user} />
      ))}
    </ListContainer>
  );
}

export default UserList;
