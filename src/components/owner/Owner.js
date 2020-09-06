import React from "react";
import OrdersList from "../order/OrderList";
import NavbarOwner from "../layout/NavbarOwner";

const Owner = () => {
    return (  
      <div>
        <NavbarOwner/>
        <OrdersList/>
       </div>
    );
  };
    

export default Owner;