import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../ducks/reducer';
import {getProductsByBrand} from '../../ducks/reducer';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import SideBar from './Sidebar';
import Header from '../Header';
import {Link} from 'react-router-dom';

class Shop extends Component{
    componentDidMount(){
        this.props.getProducts();
        this.props.getProductsByBrand();
    }
    render(){
        const cardStyle = {
            maxWidth:'300px',
            maxHeight:'500px',
            border:'none',
            margin:'20px'
        }
        const productData = this.props.products;
        if (!productData) {
            return (
                <h1>loading.....</h1>
            );
        }
        console.log(productData)
        const productList = productData.map((product,i)=>{
            return(
                <div key={i}>
                <Card style = {cardStyle}>
                    <CardImg top width="100%" src={product.imageone} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{product.product_brand}</CardTitle>
                        <CardSubtitle>{product.product_price}</CardSubtitle>
                        <CardText>{product.color}</CardText>
                        <Link to = {`/shop/item/${product.id}`}>
                        <Button>More Info</Button>
                        </Link>
                    </CardBody>
                </Card>
                </div>
            )
        })

        return(
            <div className = "shop-items-rendered">
                {productList}
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps,{getProducts,getProductsByBrand})(Shop);