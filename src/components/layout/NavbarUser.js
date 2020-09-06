import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/authUser";
import "./navbar.css";
// eslint-disable-next-line
const NavbarUser = ({ logout }) => {
  return (
      <nav className="navbar-bg-user">
        <Fragment>
              <div className="logo-heading">
                  <img src = "favicon.png" alt="Aahar" height="70px" width="70px"></img>
                  <div className="heading">
                      <Link to="/">
                        <div className="aahar">AaHar</div>
                      </Link>
                  </div>
              </div>
              <ul>
                <li className="li-nav">
                  <Link to="/my-order">
                    <i class="fas fa-utensils"></i>
                    <span> Your Orders</span>
                  </Link>
                </li>
                <li className="li-nav">
                <a onClick={logout} href="#">
                  <i className="fas fa-sign-out-alt"></i>{" "}
                  <span className="hide-sm">Logout</span>
                </a>
                </li>
              </ul>
        </Fragment>
      </nav>
    );
  };

NavbarUser.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavbarUser;
