import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
// eslint-disable-next-line
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
      <div className="logo-heading">
              <img src = "favicon.png" alt="Aahar" height="70px" width="70px"></img>
              <div className="heading">
                  <div className="aahar">AaHar</div>
                  <div className="aahar-tagline">Serves Home Food...</div>
              </div>
      </div>
      </li>
      <li>
        <i class="fas fa-book-reader"></i>
        <Link to="/posts">Orders</Link>
      </li>
      
      <li>
        
      
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
      
    
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <i class="fas fa-id-card"></i>
        <Link to="/user-register">Register</Link>
      </li>
      <li>
        <i class="fas fa-sign-in-alt"></i>
        <Link to="/user-login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
