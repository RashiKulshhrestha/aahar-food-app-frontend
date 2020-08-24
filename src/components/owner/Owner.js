import React, { Component } from 'react';

const Order = props =>(
    <tr>
        <td>{props.order._user}</td>
        <td>{props.order.no_of_meals}</td>
        <td>{props.order.no_of_days}</td>
        <td>{props.order.total_amount}</td>
        <td>{props.order.status}</td>
    </tr>
)
class Owner extends Component{
     constructor(props){
         super(props);
         this.state={
             orders:[]
         };
     }
     componentDidMount() {
         fetch('http://localhost:5000/orders/')
         .then(response =>{
              this.setState({orders:response.data});
         })
         .catch(function (error) {
             console.log(error);
         })
     }

     orderList(){
         return this.state.orders.map(function(currentOrder, i){
             return <Order order={currentOrder} key={i} />
         });
     }
    render(){
        return(
            <div>
                <button className="add-menu">Add Menu</button>
                <div>
                    <div>Orders Received By Customers</div>
                    <ul className="order-list-ul">
                        <table className="order-list">
                            <thead>
                                <tr>
                                    <th>Customer's Name</th>
                                    <th>No. of Meals</th>
                                    <th>No. of Days</th>
                                    <th>Total Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.orderList()}
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        )
    }
 }
 export default  Owner;