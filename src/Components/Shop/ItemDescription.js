import React,{Component} from 'react';
import axios from 'axios';
import Header from '../Header';

class ItemInfo extends Component{
    constructor(){
        super();
        this.state = {
            item:[],
            currentImage:''
        }
    this.imageSelectOne = this.imageSelectOne.bind(this)
    this.imageSelectTwo = this.imageSelectTwo.bind(this)
    this.imageSelectThree = this.imageSelectThree.bind(this)
    
    }
    componentDidMount(){
        axios.get(`/api/product/${this.props.match.params.id}`).then(response => {
            console.log(response)
            this.setState({
                item:response.data[0],currentImage:response.data[0].imageone})
        })
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
                        <img src = {itemInfo.imageone} onClick={() => this.imageSelectOne()} className="small-image"/>
                        <img src = {itemInfo.imagetwo} onClick={() => this.imageSelectTwo()} className="small-image"/>
                        <img src = {itemInfo.imagethree} onClick={() => this.imageSelectThree()} className="small-image"/>
                        <span className="add-to-cart">Add To Cart</span>
                    </div>
                        </div>
                    <p>{itemInfo.description}</p>
                </div>
            </div>
        )
    }
}
export default ItemInfo;
