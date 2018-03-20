import React,{Component} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap'
import Checkout from '../../CheckOutStripe'
import Order from './Order';


class Cart extends Component{
    constructor(){
        super();
        this.state = {
            cart:[],
            total:0
        }
    }
    componentDidMount(){
        axios
        .get('/api/cart')
        .then(response => this.setState({
            cart:response.data.cart,
        }))
        .catch(console.log())
    }
    deleteItem(id){
        axios.delete(`/api/cart/${id}`).then(res => {
            this.setState({
              cart: res.data.cart
            })
          })
    }
    checkOut(){
        axios.post('/api/orderplaced').then(response => console.log(response));
        axios.put('/api/stockupdate').then(response => console.log(response));
    }
    render(){
        let total = this.state.total;
        let totalOfItems =  this.state.cart.reduce( (total, currentValue) => total + Number(currentValue.product_price) , 0 );
        let cartList = [];
        const cartItems = this.state.cart;
        console.log(this.state.cart);
        if (!(this.state.cart.length > 0)) {
            cartList = <div> <h2>Go Buy Something yo</h2> </div>
        } 
        else {
            cartList = cartItems.map((item, i) => {
                console.log(item);
                return ( 
                <div key = {i} className="checkout-item-main-div">
                        <img src={item.imageone} className="cart-image"/>
                    <div className="cart-item-info">
                        <div className = "name-and-brand">
                            <h3>{item.product_name}</h3>
                            <p>{item.product_brand}</p>
                        </div>
                        <div className="price">
                            <h2>${item.product_price}</h2>
                            <Button onClick = {() => {
                                this.deleteItem(item.id)}}>X</Button> 
                        </div>
                          
                    
                    </div>        
                </div> 
                )
            })
        }
        const mainDivStyle = {
            height:'100vh',
            width:'100vw',
            backgoundColor:"ffff"
        }
        return(
        <div className="shopping-cart-div-main">
            <div className="cart-div">
                {cartList}
            </div>
                
            <div className="total-box">
                <h1>total:</h1>
                <div className = "order-info">
                    <div className="order-quantity">
                        <h6>Order Quantity</h6>
                        <p>{cartList.length}</p>
                    </div>
                    <div className="total-info">
                        <h6>Subtotal</h6>
                        <p>{totalOfItems}</p>
                    </div>
                    <div>
                    <button onClick = {() => this.checkOut()}></button>
                    <Order amount = {totalOfItems}  name = {'MechMart'} />
                    </div>
                </div>
                
            </div>
            
        </div>

        )
    }
}
export default Cart;