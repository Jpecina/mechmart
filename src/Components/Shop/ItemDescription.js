import React,{Component} from 'react';
import axios from 'axios';
import Header from '../Header';
import {Button} from 'reactstrap';
import Review from '../Form';
import AddProductReview from '../../Review'


class ItemInfo extends Component{
    constructor(){
        super();
        this.state = {
            item:[],
            currentImage:'',
            cart:[]
        }
    this.addToCart = this.addToCart.bind(this);    
    this.imageSelectOne = this.imageSelectOne.bind(this);
    this.imageSelectTwo = this.imageSelectTwo.bind(this);
    this.imageSelectThree = this.imageSelectThree.bind(this);
    
    }
    componentDidMount(){
        axios.get(`/api/product/${this.props.match.params.id}`).then(response => {
            console.log(response)
            this.setState({
                item:response.data[0],currentImage:response.data[0].imageone})
        })
    }
    saveItem(item){
        axios.post('/api/saveproduct',item)
    }
    addToCart(item){
        axios.post('/api/cart',item).then(response => console.log(response.data.cart)).catch(err=>console.log(err))
    }
    imageSelectOne(){
        this.setState({currentImage: this.state.item.imageone})
    }
    imageSelectTwo(){
        this.setState({currentImage:this.state.item.imagetwo})
    }
    imageSelectThree(){
        this.setState({currentImage:this.state.item.imagethree})
    }
    render(){
        
        const buttonStyle={
            height:'40px',
            justifyContent: 'flexEnd'
        };
        console.log(this.props)
        const itemInfo = this.state.item
        return(
            <div className = "Item-more-info-main-container">
                <div className="selected-item-container">
                    <h2>{itemInfo.product_name}</h2>
                    <h3>${itemInfo.product_price}</h3>
                    <div className="image-box">
                        <img src={this.state.currentImage} className="image-info"/>
                    <div className="image-nav">
                        <div>
                            <img src = {itemInfo.imageone} onClick={() => this.imageSelectOne()} className="small-image"/>
                            <img src = {itemInfo.imagetwo} onClick={() => this.imageSelectTwo()} className="small-image"/>
                            <img src = {itemInfo.imagethree} onClick={() => this.imageSelectThree()} className="small-image"/>
                            </div>
                            <Button className="add-to-cart-button" onClick={(e) => this.addToCart(itemInfo)}>Add To Cart</Button>
                            <Button onClick = {(e) => this.saveItem(itemInfo)}>Save</Button>
                        </div>
                        </div>
                    <p>{itemInfo.description}</p>
                    
                </div>
                <AddProductReview/>
            </div>
        )
    }
}
export default ItemInfo;
