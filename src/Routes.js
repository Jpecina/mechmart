import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import About from './Components/About/About';
import MainShopFront from './Components/Shop/ShopMain';
import ItemInfo from './Components/Shop/ItemDescription';



export default (
    <Switch>
        <Route exact path = "/" component= { Home }  />
     {/*   <Route path = '/login' component = {Login} />*/}
        <Route path = "/about" component={About}/>
        <Route path = "/cart" component={Cart}/>
        <Route path = "/shop/item/:id" component={ItemInfo}/>
        <Route path = "/shop" component={MainShopFront}/>
        
        <Route path = '*' render = { () => {
            <div>
                <p> 404 not found </p>
            </div>
        } } />
    </Switch>
)