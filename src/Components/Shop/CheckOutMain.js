import React, {Component} from 'react';
import Cart from './Cart'

class CheckOutMain extends Component{
    render(){
        return(
            <div className="main-checkout-div">
                <div className="address-input-field">
                </div>
                <div className="cart-checkout-div">
                <Cart/>

                </div>
            </div>
        )
    }
}
export default CheckOutMain;