import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRouteOwner = ({
  component: Component,
  authOwner: { isAuthenticatedOwner, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticatedOwner && !loading ? (
        <Redirect to="/owner-login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRouteOwner.propTypes = {
  authOwner: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authOwner: state.authOwner,
});
export default connect(mapStateToProps)(PrivateRouteOwner);
