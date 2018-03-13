import React from 'react';
import Header from '../Header';
import SideBar from './Sidebar';
import Shop from './Shop';

function MainShopFront(){
    return(
        <div className="shop">
        <div className="category-nav">
        <h5>Keyboards</h5>
        <h5>Cables</h5>
        <h5>Cases/Wrests</h5>
        <h5>Artisans</h5>
        </div>
        <div className = "main-shop-container">

            <Shop/>
        </div>
        </div>
    )
}
export default MainShopFront;