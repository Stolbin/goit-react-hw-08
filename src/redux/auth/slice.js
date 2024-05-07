import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logout, login, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  userData: {
    name: null,
    email: null,
  },
  isSignedIn: false,
  token: null,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(logout.fulfilled, (state) => {
        state.userData = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isSignedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refreshUser.pending,
          logout.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )

      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refreshUser.rejected,
          logout.rejected
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
