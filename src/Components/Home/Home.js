import React from 'react';
import {Link} from 'react-router-dom'


function Home(){
    const mainImage = {
        minHeight:'100%'
    }
    return(
        <div className="home-page-main-div" >
        <div className="main-home-body" >
            <h3>All Your Keyboard Needs</h3>
            <h6>Shop Our Wide Range Of Products</h6>
            <Link to="/shop">
            <button id="main-home-shop-button">Shop Now</button>
            </Link>
        </div>
        
        </div>
    )
}
export default Home;