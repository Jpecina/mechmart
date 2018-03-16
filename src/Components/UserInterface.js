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
            this.setState({userOrders:response.data[0]})
        })
    }
    render(){
        console.log("this is the orders data:",this.state.userOrders)
        console.log("this is the user",this.state.user)
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
            backgroundColor:'blue',
            display:'flex',
            justifyContent:"center",
        }
        return(
            <div className = "admin-page-container" style = {adminPageContainer}>
                <div className = "info-table-container" style = {userItemsDisplayContainer}>
                    <h1>Your Items {this.state.user.name}</h1>
                    <div className = "user-items-display-container">
                        <OrdersTable name = {this.state.userOrders.name} itemsName = {this.state.userOrders.product_name} itemPrice = {this.state.userOrders.product_price} />
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