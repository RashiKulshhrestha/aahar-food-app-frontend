import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    render(){
        return(
            <div className= "signup-container">
                <header>
                    <div className="signup-header">Signup</div>
                    <button className="close-window"></button>
                </header>
                <main>
                    <div className="login-banner">Already have an account?<Link to ="/login">Login</Link></div>
                    <form>
                        <input className="input-field" placeholder="Name" type="text"></input>
                        <input className="input-field" placeholder="Email" type="text"></input>
                        <input className="input-field" placeholder="Mobile no.- +91-0123456789" type="text"></input>
                        <input className="input-field" placeholder="Password" type="password"></input>
                        <input className="input-field" placeholder="Confirm Password" type="password"></input>
                        <button className="signup-btn">Signup</button>
                        <div>--------------------------or--------------------------</div>
                        <Link to="/partner-with-us">
                            <button className="ownersignup-btn">Partner with us</button>
                        </Link>
                    </form>
                </main>
            </div>
        )
    }
}
export default Signup;