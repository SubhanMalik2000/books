import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/fetchUser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    searchTerm:"",
    loading: false,
    error: null,
  },
  reducers:{
    updateSearchTerm:(state, action)=>{
      state.searchTerm = action.payload;
    }
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {updateSearchTerm} = userSlice.actions
