import axios from "axios";
import { GET_ORDERS, ORDER_ERROR} from "./types";

// get owners

export const getOrders = () => async(dispatch) =>{
    try {
        const res = await axios.get("http://localhost:5000/api/orders");
    
        dispatch({
          type: GET_ORDERS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: ORDER_ERROR,
          payload: { msg:err.data.error.message, status: err.response.status },
        });
      }
}
