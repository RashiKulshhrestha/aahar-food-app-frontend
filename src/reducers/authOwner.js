import {
    REGISTER_OWNER_SUCCESS,
    REGISTER_OWNER_FAIL,
    OWNER_LOADED,
    AUTH_OWNER_ERROR,
    LOGIN_OWNER_SUCCESS,
    LOGIN_OWNER_FAIL,
    LOGOUT_OWNER,
   } from "../actions/types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    owner: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case OWNER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          owner: payload,
        };
      case REGISTER_OWNER_SUCCESS:
      case LOGIN_OWNER_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case REGISTER_OWNER_FAIL:
      case AUTH_OWNER_ERROR:
      case LOGIN_OWNER_FAIL:
      case LOGOUT_OWNER:
      localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  