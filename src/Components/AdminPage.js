import React, {Component} from "react";
import {connect} from 'react-redux';
import {getUsers} from '../ducks/reducer'
import OrdersTable from './Table'
import AddItem from "./AddItem";

class AdminPage extends Component{
    render(){
        return(
            <div className = "admin-page-container">
                <div className = "info-table-container">
                    <h1>Mech Mart Orders</h1>
                    <OrdersTable/>
                    <AddItem/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default AdminPage;