import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import './UserRegister.css';

const UserRegister = ({ setAlert, register, isAuthenticated }) =>  {
    const [formData, setFormdata] = useState({
        name: "",
        email:"",
        mobile: "",
        password: "",
        confPassword:""
    });
    const onChange = (e) =>{
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== confPassword) {
          setAlert("Password do not match", "danger");
        } else {
          register({ name, email, mobile, password });
        }
      };
      const { name, email, mobile, password, confPassword } = formData;
      if (isAuthenticated) {
        return <Redirect to="/user" />;
      }
    return(
        <div className= "signup-container">
            <header>
                <div className="signup-header">Signup</div>
                <Link to="/" >
                    <button className="close-window"></button>
                </Link>
            </header>
            <main>
                <div className="login-banner">Already have an account?<Link to ="/login">Login</Link></div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        className="input-field"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}>
                    </input>
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
                        placeholder="Mobile no.- 0123456789"
                        type="text"
                        name="mobile"
                        value={mobile}
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
                    <input
                        className="input-field"
                        placeholder="Confirm Password"
                        type="password"
                        name="confPassword"
                        value={confPassword}></input>
                    <input
                        className="signup-btn"
                        type="submit"
                        value="Signup"/>
                    <div>--------------------------or--------------------------</div>
                    <Link to="/partner-with-us">
                        <button className="ownersignup-btn">Partner with us</button>
                    </Link>
                </form>
            </main>
        </div>
    )
    
}
UserRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  const mapStateProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  export default connect(mapStateProps, { setAlert, register })(UserRegister);