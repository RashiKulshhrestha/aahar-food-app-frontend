import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
   } from "../actions/types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticatedUser: null,
    loading: true,
    user: null,
  };
  
  const isAuthenticatedUser=()=>{
    let token = localStorage.getItem("token");
    let userType = localStorage.getItem("user_type");

    return token !=null && userType !=null && userType === "user";
  }
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticatedUser: isAuthenticatedUser(),
          loading: false,
          user: payload,
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user_type", "user");
        return {
          ...state,
          ...payload,
          isAuthenticatedUser: true,
          loading: false,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        console.log("user logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user_type");
        return {
          ...state,
          token: null,
          isAuthenticatedUser: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  