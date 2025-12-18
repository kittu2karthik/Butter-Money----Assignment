import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/users/usersSlice";

import Input from "./Input";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.users.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search users by name, email, or phone..."
        value={searchTerm}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </SearchContainer>
  );
}

export default SearchBar;
