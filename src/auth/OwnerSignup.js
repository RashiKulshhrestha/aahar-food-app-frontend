import React from 'react';
import './ownersignup.css';
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
                <header>
                    <div className="logo-heading">
                            <img src = "favicon.png" alt="Aahar" height="100px" width="100px"></img>
                            <div className="heading">
                                <div className="aahar">AaHar</div>
                                <div className="aahar-tagline">Serves Home Food...</div>
                            </div>
                    </div>
                </header>
                <main>
                    <section>
                        <h3>Join us to serve HOME FOOD</h3>
                        <h3>to our Customers</h3>
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/01/Delivery-Boy-Clipart-Png.png" alt="delivery-boy" height="400px" width="360px"/>
                    </section>
                    <section>
                        <h1>Partner with us</h1>
                        <form>
                            <label>Tiffin Service Name</label>
                            <input type="text"></input>
                            <label>Owner Name</label>
                            <input type="text"></input>
                            <label>Owner Mobile Number</label>
                            <input type="text"></input>
                            <label>Owner Email ID</label>
                            <input type="text"></input>
                            <label>Password</label>
                            <input type="password"></input>
                            <label>Confirm Password</label>
                            <input type="password"></input>
                            <label>Address</label>
                            <label>Line 1</label>
                            <input type="text"></input>
                            <label>Line 2</label>
                            <input type="text"></input>
                            <label>City</label>
                            <input type="text"></input>
                            <label>zip/Postal Code</label>
                            <input type="text"></input>
                            <Link to="/owner-signup"><button onClick={this.postData}>Signup</button></Link>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
export default OwnerSignup;