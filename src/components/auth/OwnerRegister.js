import React from 'react';
import './ownerRegister.css';
import { Link } from 'react-router-dom';

class OwnerSignup extends React.Component{
    constructor(){
        super();
        // this.state={
        //     company:"",
        //     ownerName: "",
        //     mobileNumber:"",
        //     emailId : "",
        //     password:"",
        //     Address:{
        //         line1:"",
        //         line2:"",
        //     },
        //     city:"",
        //     zipCode:""
        // }
        this.state={
            isLoading:false,
            owner: ""
        }
    }
    // getOwners(){
        
    // }
    postData(e){
        var owner = {};
        this.setState={
            isLoading :true
        }
        fetch("https/api/abc",{
            Method: "POST",
            body: JSON.stringify(owner)

        }).then( function (data){
            this.setState={
                isLoading:false
            }
        })
    }
    render(){
        return(
            <div className="owner-signup-container">
                <section className="tag-box">
                        <header>
                            <div className="logo-heading">
                                    <img src = "favicon.png" alt="Aahar" height="70px" width="70px"></img>
                                    <div className="heading">
                                        <div className="aahar">AaHar</div>
                                        <div className="aahar-tagline">Serves Home Food...</div>
                                    </div>
                            </div>
                        </header>
                        <div className="partner-tagline">
                            <h3>"Join us to serve HOME FOOD</h3>
                            <h3>to our Customers"</h3>
                        </div>
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Delivery-Boy-Clipart-Png.png" alt="delivery-boy" height="400px" width="360px"/>
                    </section>
                    <section className="form">
                        <h1>Partner with us</h1>
                        <form className="form-input">
                            <label className="owner-signup-label">1.Tiffin Service Name</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">2.Owner Name</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">3.Mobile Number</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">4.Owner Email ID</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">5.Password</label>
                            <input className="owner-signup-input" type="password"></input>
                            <label className="owner-signup-label">6.Confirm Password</label>
                            <input className="owner-signup-input" type="password"></input>
                            <label className="owner-signup-label">7.Address</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">8.City</label>
                            <input className="owner-signup-input" type="text"></input>
                            <label className="owner-signup-label">9.zip/Postal Code</label>
                            <input className="owner-signup-input" type="text"></input>
                        </form>
                        <Link to="/owner-signup"><button id="owner-signup-btn" onClick={this.postData}>Signup</button></Link>
                    </section>
            </div>
        )
    }
}
export default OwnerSignup;