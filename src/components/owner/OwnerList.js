import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOwners } from "../../actions/owner";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

const Owners = ({ getOwners, owner: { owners, loading } }) => {
  useEffect(() => {
    getOwners();
  }, [getOwners]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">owners</h1>
      <p className="lead">
        list of owners
      </p>
      <div className="posts">
        {owners.map((owner) => (
          <div>
            <Link to={`/order/${owner._id}`}><h4>{owner.service_name}</h4></Link>
            <div>{owner.description}</div>
          </div>
        ))}
      </div>
     </Fragment>
  )
}

Owners.propTypes = {
    getOwners: PropTypes.func.isRequired,
    owner: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    owner: state.owner,
});
export default connect(mapStateToProps, { getOwners })(Owners);
