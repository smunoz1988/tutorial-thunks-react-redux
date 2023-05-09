import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    error: undefined,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: {
        
    },
  });
  
  
  export default userSlice.reducer;