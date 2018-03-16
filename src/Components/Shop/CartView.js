import React from 'react';
import Cart from './Cart';


function CartView(){

    return(
        <div className = "main-shop-view-container">
            <div className = "shipping-info-box">
                <h6>Two-hour delivery of in-stock items in some locations for only $9. See checkout for availability.</h6>
            </div>
            <div className = "shopping-cart-view-container"> 
            <div className = "cart-header">
                <h3>Items in Your Cart</h3>
            </div>
            <div className = "cart-view-render-box">
            <Cart/>
            </div>
            <div className = "cart-container-footer">
                <button> Check Out </button>
            </div>
            </div>
            <div className = "question-cart-div"></div>
        </div>
    )
}
export default CartView;