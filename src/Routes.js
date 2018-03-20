import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop';
import Cart from './Components/Shop/Cart';
import About from './Components/About/About';
import MainShopFront from './Components/Shop/ShopMain';
import ItemInfo from './Components/Shop/ItemDescription';
import CheckOutMain from "./Components/Shop/CheckOutMain";
import AddItem from './Components/AddItem';
import UserInterface from './Components/UserInterface';
import CartView from './Components/Shop/CartView';
import Favorites from './Components/Favorites';



export default (
    <Switch>
        <Route exact path = "/" component= { Home }  />
     {/*   <Route path = '/login' component = {Login} />*/}
        <Route path = "/about" component={About}/>
        <Route path = "/cart" component={CartView}/>
        <Route path = "/shop/item/:id" component={ItemInfo}/>
        <Route path = "/shop" component={MainShopFront}/>
        <Route path = "/cart/checkout" component={CheckOutMain}/>
        <Route path = "/additem" component={AddItem}/>
        <Route path = "/userpage" component={UserInterface}/> 
        <Route path = "/favorites" component={Favorites}/>       
        <Route path = '*' render = { () => {
            <div>
                <p> 404 not found </p>
            </div>
        } } />
    </Switch>
)