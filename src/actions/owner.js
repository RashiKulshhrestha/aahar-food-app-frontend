import axios from "axios";
import { GET_OWNERS, OWNER_ERROR} from "./types";

// get owners

export const getOwners = () => async(dispatch) =>{
    try {
        const res = await axios.get("http://localhost:5000/api/owners");
    
        dispatch({
          type: GET_OWNERS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: OWNER_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
}
