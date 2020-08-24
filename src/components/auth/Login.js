import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    onChange(){
        var checkBox = document.getElementById("myCheck");
        var ownerlogin = document.getElementById("ownerlogin-btn");
        var userlogin = document.getElementById("userlogin-btn");
        if(checkBox.checked === true){
            ownerlogin.style.display = "block";
            userlogin.style.display = "none";
        }
        else{
            userlogin.style.display = "block";
            ownerlogin.style.display = "none";
        }
    }
    render(){
        return(
            <div className= "login-container">
                <header>
                    <div className="login-header">Login</div>
                    <Link to="/" >
                        <button className="close-window"></button>
                    </Link>
                </header>
                <main>
                    <div className="signup-banner">Don't have an account?<Link to ="/signup">Signup</Link></div>
                    <form>
                        <input className="input-field" placeholder="Email" type="text"></input>
                        <input className="input-field" placeholder="Password" type="password"></input>
                        <input type="checkbox" id="myCheck" onClick={this.onChange}></input>
                        <div className="service-provider">As a Service Provider</div>
                        <Link to ="/user">
                                <button className="userlogin-btn" id="userlogin-btn">Login</button>
                        </Link>
                        <Link to ="/owner">
                                <button className="ownerlogin-btn" id="ownerlogin-btn">Login</button>
                        </Link>
                    </form>
                </main>
                <footer>&copy; <code>AaHar Pvt.Ltd.</code>,Agra,Uttar Pradesh</footer>
            </div>
        )
    }
}
export default Login;