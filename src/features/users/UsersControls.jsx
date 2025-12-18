import NavBar from "../../ui/NavBar";
import SearchBar from "../../ui/SearchBar";
import StyledSelect from "../../ui/StyledSelect";
import Button from "../../ui/Button";

import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "./usersSlice";

function UsersControls({ onAddUser }) {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.users);

  return (
    <NavBar>
      <SearchBar />
      <StyledSelect
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
        <option value="phone">Sort by Phone</option>
      </StyledSelect>
      <Button onClick={onAddUser}>Add User</Button>
    </NavBar>
  );
}

export default UsersControls;
