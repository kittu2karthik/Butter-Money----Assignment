import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { fetchUsersAsync } from "../features/users/usersSlice";

import UserDetails from "../features/users/UserDetails";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import PageContainer from "../ui/PageContainer";
import ErrorMessage from "../ui/ErrorMessage";

function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users, localUsers, isLoading, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersAsync());
    }
  }, [dispatch, users.length]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  const allUsers = [...(users || []), ...localUsers];
  const user = allUsers.find((u) => String(u.id) === id);

  if (!user) {
    return (
      <PageContainer
        style={{
          maxWidth: "800px",
          margin: " 0 auto",
          padding: " 3.2rem 2.4rem",
        }}
      >
        <h2>User not found</h2>
        <Button onClick={() => navigate("/")}>Back to Users</Button>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      style={{
        maxWidth: "800px",
        margin: " 0 auto",
        padding: " 3.2rem 2.4rem",
      }}
    >
      <Button style={{ marginBottom: "2.4rem" }} onClick={() => navigate("/")}>
        &larr; Back
      </Button>

      <UserDetails user={user} />
    </PageContainer>
  );
}

export default UserPage;
