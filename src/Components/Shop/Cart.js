import React,{Component} from 'react';
import axios from 'axios';


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
    render(){
        let total = this.state.total;
        let totalOfItems =  this.state.cart.reduce( (total, currentValue) => total + Number(currentValue.product_price) , 0 );
        let cartList = [];
        const cartItems = this.state.cart;
        console.log(this.state.cart);
        if (!(this.state.cart.length > 0)) {
            cartList = <div> loading.... </div>
        } 
        else {
            cartList = cartItems.map((item, i) => {
                console.log(item);
                return ( 
                <div key = {i} className="checkout-item-main-div">
                        <img src={item.imageone} className="cart-image"/>
                    <div className="cart-item-info">
                        <h4>{item.product_name}</h4>
                        <h1>{item.product_price}</h1>   
                    <button onClick = {() => {
                    this.deleteItem(item.id)}}>Delete</button> 
                    </div>        
                </div> 
                )
            })
        }

        return(
            <div className="shopping-cart-div-main">
            {cartList}
            <div className="total-checkout-div">
            <h2>Total:${totalOfItems}</h2>
            <button>CheckOut</button>
            </div>
            </div>
            

        )
    }
}
export default Cart;