import { combineReducers } from "redux";
import alert from "./alert";
import authUser from "./authUser";
import authOwner from "./authOwner";
import owner from "./owner";


export default combineReducers({
  alert,
  authUser,
  authOwner,
  owner
});