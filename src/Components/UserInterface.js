import React, {Component} from "react";
import {connect} from 'react-redux';
import {getUsers} from '../ducks/reducer'
import OrdersTable from './Table'
import AddItem from "./AddItem";
import axios from 'axios';


class UserInterface extends Component{
    constructor(){
        super()
        this.state = {
            user:[],
            userOrders:[]
        }
    }
    componentDidMount(){
        this.props.getUsers();
        axios.get('/api/me').then(res => {this.setState({user:res.data})})
        axios.get('/api/getorders').then(response => {
            console.log(response)
            this.setState({userOrders:response.data})
        })
    }
    render(){
        console.log("this is the orders data:",this.state.userOrders)
        const adminPageContainer = {
            height:"auto",
            width:"100%",
            display:'flex',
            alignItems:"center",
            flexDirection:"column"
        }
        const userItemsDisplayContainer = {
            height:'500px',
            width:'80%',
            marginTop:"100px",
            marginBottom:"100px",
            display:'flex',
            justifyContent:"center",
            overflowY:'scroll'
        }
        const orders = this.state.userOrders;
        if (!orders > 0) {
            return (
                <p>fetching orderes....</p>
            );
        }
        console.log("this is orders:",orders)
        const ordersList = orders.map((item,i)=>{
            return (
                <div className = "orders-list-div" key = {i}>
                <h5>product name:{item.product_name}</h5>
                <p>product order date: {item.order_date}</p>
                <h6>product Price: {item.product_price}</h6>
                </div>
        )
        })
        return(
            <div className = "admin-page-container" style = {adminPageContainer}>
            <h1>Your Orders {this.state.user.name}</h1>
                <div className = "info-table-container" style = {userItemsDisplayContainer}>
                    
                    <div className = "user-items-display-container">
                        {ordersList}
                    </div>
                </div>
                <h1>Add An Item</h1>
                <AddItem/>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps,{getUsers})(UserInterface);