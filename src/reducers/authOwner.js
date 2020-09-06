import {
    REGISTER_OWNER_SUCCESS,
    REGISTER_OWNER_FAIL,
    OWNER_LOADED,
    AUTH_OWNER_ERROR,
    LOGIN_OWNER_SUCCESS,
    LOGIN_OWNER_FAIL,
    LOGOUT_OWNER,
    GET_OWNER,
    NO_OWNER
   } from "../actions/types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticatedOwner: null,
    loading: true,
    owner: null,
  };
  
  const isAuthenticatedOwner=()=>{
    let token = localStorage.getItem("token");
    let userType = localStorage.getItem("user_type");

    return token !=null && userType !=null && userType === "owner";
  }
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case OWNER_LOADED:
      case GET_OWNER: 
        return {
          ...state,
          isAuthenticatedOwner: isAuthenticatedOwner(),
          loading: false,
          owner: payload,
        };
      case REGISTER_OWNER_SUCCESS:
      case LOGIN_OWNER_SUCCESS:
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user_type","owner");
        return {
          ...state,
          ...payload,
          isAuthenticatedOwner: isAuthenticatedOwner(),
          loading: false,
        };
      case REGISTER_OWNER_FAIL:
      case AUTH_OWNER_ERROR:
      case LOGIN_OWNER_FAIL:
      case LOGOUT_OWNER:
      case NO_OWNER:
        console.log("owner logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user_type");
        return {
          ...state,
          token: null,
          isAuthenticatedOwner: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  