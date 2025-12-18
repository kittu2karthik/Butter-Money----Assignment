import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFilteredUsers } from "../hooks/useFilteredUsers";
import { fetchUsersAsync } from "../features/users/usersSlice";

import UserList from "../features/users/UserList";
import AddUserForm from "../features/users/AddUserForm";

import Spinner from "../ui/Spinner";
import Modal from "../ui/Modal";
import Header from "../ui/Header";
import PageContainer from "../ui/PageContainer";
import ErrorMessage from "../ui/ErrorMessage";

function UsersPage() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const filteredUsers = useFilteredUsers(users);

  return (
    <PageContainer>
      <Header onIsAddUserOpen={setIsAddUserOpen} />

      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && <UserList users={filteredUsers} />}
      {isAddUserOpen && (
        <Modal onClose={() => setIsAddUserOpen(false)}>
          <AddUserForm onSuccess={() => setIsAddUserOpen(false)} />
        </Modal>
      )}
    </PageContainer>
  );
}

export default UsersPage;
