import axios from "axios";
import { setAlert } from "./alert";
import setAuthOwnerToken from '../util/setAuthOwnerToken';
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
} from "./types";

export const loadOwner = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthOwnerToken(localStorage.token);
  }
  
  try {
    const res = await axios.get("http://localhost:5000/api/authOwner");
    console.log("loadOwner");
    dispatch({
      type: OWNER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_OWNER_ERROR,
    });
  }
};

// register owner
export const register = ({ service_name,
  owner_name,
  email,
  mobile,
  password,
  address,
  city,
  postal_code 
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ service_name,
    owner_name,
    email,
    mobile,
    password,
    address,
    city,
    postal_code });
  try {
    const res = await axios.post("http://localhost:5000/api/owners", body, config);
    dispatch({
      type: REGISTER_OWNER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadOwner());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_OWNER_FAIL,
    });
  }
};

// login owner
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("http://localhost:5000/api/authOwner", body, config);
    console.log(email);
    dispatch(getOwner(email));
    dispatch({
      type: LOGIN_OWNER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadOwner());
    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_OWNER_FAIL,
    });
  }
};

// get Owner details
export const getOwner = (email) => async(dispatch) => {
  try {
    console.log(email);
    const res = await axios.get(`http://localhost:5000/api/owners/${email}`);
    console.log(res.data);
    
    dispatch({
      type: GET_OWNER,
      payload: res.data
    });
  }
  catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: NO_OWNER,
      });
    }
};
// logout

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_OWNER,
  });
};
