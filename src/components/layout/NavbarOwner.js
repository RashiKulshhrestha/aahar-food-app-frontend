import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/authOwner";
import "./navbar.css";
// eslint-disable-next-line
const NavbarOwner = ({ logout }) => {
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
                  <Link to="/add-menu">
                  <i class="fas fa-plus-circle"></i>
                    <span> Add Menu</span>
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

NavbarOwner.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavbarOwner;
