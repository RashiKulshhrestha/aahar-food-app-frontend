import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Home.css';


class HomePage extends Component{
    render(){
        return (
            <div className = "home-container">
                <div className="logo-heading">
                    <img src = "favicon.png" alt="Aahar" height="100px" width="100px"></img>
                    <div className="heading">
                        <div className="aahar-header">AaHar</div>
                        <div className="tagline">Serves Home Food...</div>
                    </div>
               </div>
                <div className="auth">
                    <Link to = "/signup" className="auth-btn">Signup</Link>
                    <Link to = "/login" className="auth-btn">Login</Link>
                </div>
            </div>
        )
    }
}
export default HomePage;