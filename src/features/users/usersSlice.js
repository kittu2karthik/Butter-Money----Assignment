import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/api";

const loadUsersFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("localUsers");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch {
    return [];
  }
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

const initialState = {
  users: [],
  searchTerm: "",
  sortBy: "name",
  localUsers: loadUsersFromStorage(),
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    addLocalUser(state, action) {
      state.localUsers.push(action.payload);
      try {
        localStorage.setItem("localUsers", JSON.stringify(state.localUsers));
      } catch {
        console.log("Failed to save to localStorage");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, setSortBy, addLocalUser } = usersSlice.actions;
export default usersSlice.reducer;
