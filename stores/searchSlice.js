import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addNewSearch: (state, action) => {
      if (state.value.length === 3) {
        state.value.pop();
      }
      state.value = [action.payload, ...state.value];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewSearch } = searchSlice.actions;

export default searchSlice.reducer;
