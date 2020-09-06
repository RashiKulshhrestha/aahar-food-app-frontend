import React from "react";
import { useParams } from "react-router-dom";


const Order = () => {
  let {id} = useParams();  
    return (  
      <div>
        <div>Orders</div>
        <div>Owner Id: {id}</div>
      </div>
    );
  };
    

export default Order;