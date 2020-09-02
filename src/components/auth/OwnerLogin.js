import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authOwner";
import "./Login.css";

const OwnerLogin = ({ login, isAuthenticatedOwner }) => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  const { email, password } = formData;
  //Redirect if logged in
    if (isAuthenticatedOwner) {
      return <Redirect to="/owner" />;
    }
  return (
    <Fragment>
      <div className= "login-container">
                <header>
                    <div className="login-header">Login</div>
                    <Link to="/" >
                        <button className="close-window"></button>
                    </Link>
                </header>
                <main>
                    <div className="signup-banner">Don't have an account?<Link to ="/signup">Signup</Link></div>
                      <form onSubmit={(e) => onSubmit(e)}>
                          <input
                            className="input-field"
                            placeholder="Email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}>
                          </input>

                          <input
                            className="input-field"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => onChange(e)}>
                          </input>

                          <input type="submit" className="userlogin-btn" value="Login" />
                        </form>
                </main>
                <footer>&copy; <code>AaHar Pvt.Ltd.</code>,Agra,Uttar Pradesh</footer>
            </div>
    </Fragment>
  );
};
OwnerLogin.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticatedOwner: PropTypes.bool,
};

const mapStateProps = (state) => ({
  isAuthenticatedOwner: state.authOwner.isAuthenticatedOwner,
});
export default connect(mapStateProps, { login })(OwnerLogin);