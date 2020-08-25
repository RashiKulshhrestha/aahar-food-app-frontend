import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserRegister.css';

const UserRegister = () =>  {
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
    const { name, email, mobile, password, confPassword } = formData;
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== confPassword) {
          console.log("Password do not match", "danger");
        } else {
          //register
          try {
            const user = {
              name,
              email,
              mobile,
              password,
            };
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
      
            const body = JSON.stringify(user);
      
            const res = await axios.post("/api/users", body, config);
      
            console.log(res.data);
      
        }
        catch (err) {
            console.log(err.response.data);
        }
      
      };
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
                        value={confPassword}
                        onChange={(e) => onChange(e)}>
                    </input>
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

export default UserRegister;