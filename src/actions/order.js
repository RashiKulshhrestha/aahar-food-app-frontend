import axios from "axios";
import {GET_ORDERS, ORDER_ERROR} from "./types";

// get orders

export const getOrders = (email) => async(dispatch) =>{
    try {
        const res = await axios.get(`http://localhost:5000/api/orders/${email}`);
        console.log(res.data);
        dispatch({
          type: GET_ORDERS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: ORDER_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status },
        });
      }
}
