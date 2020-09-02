import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders } from "../../actions/order";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Orders = ({ getOrders, order: { orders, loading } }) => {
  useEffect(() => {
    getOrders();
  }, [getOrders]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">orders</h1>
      <p className="lead">
        list of orders
      </p>
      <div className="posts">
        {orders.map((order) => (
          <div>
            <Link to={`/order/${order._id}`}><h4>{order.service_name}</h4></Link>
            <div>{order.description}</div>
          </div>
        ))}
      </div>
     </Fragment>
  )
}

Orders.propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    order: state.order,
});
export default connect(mapStateToProps, { getOrders })(Orders);
