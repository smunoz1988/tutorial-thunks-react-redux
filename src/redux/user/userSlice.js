import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

const url = "https://randomuser.me/api/?results=5";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw isRejectedWithValue(error);
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;
