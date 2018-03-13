import React from 'react';
import Header from '../Header';
import SideBar from './Sidebar';
import Shop from './Shop';
import Dropdown from './CategoryDrop';
import CategorySelector from './CategoryDrop';

function MainShopFront(){
    return(
        <div className="shop">
        <div className="category-nav">
        <CategorySelector toggleName="Mechanical KeyBoards" item1="Realforce" item2="Leopold" item3="HHKB"/>
        <CategorySelector toggleName="Cases/Accessories"/>
        <CategorySelector toggleName="Artisans"/>
        </div>
        <div className = "main-shop-container">

            <Shop/>
        </div>
        </div>
    )
}
export default MainShopFront;