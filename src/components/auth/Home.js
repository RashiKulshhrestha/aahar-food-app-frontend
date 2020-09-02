import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const HomePage = () => {
    // if (isAuthenticated) {
    //   return <Redirect to="/user" />;
    // }
    return (
        <div className = "home-container">
            <div className="logo-heading">
                <img src = "favicon.png" alt="Aahar" height="100px" width="100px"></img>
                <div className="heading">
                    <div className="aahar-header">AaHar</div>
                    <div className="tagline">Serves Home Food...</div>
                </div>
            </div>
            <i className="fas fa-users"></i>
        <Link to="/profiles">Developers</Link>
            <div className="auth">
                <Link to = "/user-register" className="auth-btn">Signup</Link>
                <Link to = "/user-login" className="auth-btn">Login</Link>
            </div>
        </div>
    )
};

// HomePage.propTypes = {
//     isAuthenticated: PropTypes.bool,
//   };
//   const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//   });
  export default HomePage;