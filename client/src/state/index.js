import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: "dark"
};

export const globalSlice = createSlice({
  name: "global",
  initialState, 
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    }
  }
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;

/* 
createSlice is a higher order function that accepts an initial state, an object
of reducer functions and a slice name. It automatically generates action creators 
and action types that correspond to the reducers and state.

In Redux Toolkit, the createSlice method helps to create a slice of the redux-store. 
This function aims to reduce the boilerplate required to add data to redux in the 
common way. Internally, it uses createAction and createReducer.

Also you can make use of de-structuring to define the slice and export its action 
creators and reducers. Although if preferred, you can just directly export the
slice object itself, instead of de-structuring and export.

Think of reducers just as functions that changes global state,
in this case a fn that changes the mode from dark to light and vice versa
*/