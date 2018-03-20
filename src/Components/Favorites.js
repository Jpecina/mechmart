import React,{ Component } from 'react';
import axios from 'axios'

class Favorites extends Component{
    constructor(){
        super()
        this.state = {
            favorites:[]
        }

    }
    componentDidMount(){
        axios.get('/api/products/favorites').then(response => {
            console.log("this is the favorites response:",response.data)
            this.setState({favorites:response.data})
        })
    }
    deleteSaved(id){
        axios.delete(`/api/products/favorites/delete/${id}`).then(response => {
            console.log("this is the deletes response:",response.data)
            
            this.setState({favorites:response.data})
        })
    }
    render(){
        console.log("this is the favorites in state:",this.state.favorites)
        const faves = this.state.favorites
        const favoritesList = faves.map((item,i) => {
            return(
                <div key = {i}>
                    <div className = "favorite-list-item-container">
                        <img src = {item.product_image_url} className="cart-image"/>
                        
                        <h5>{item.product_name}</h5>
                        <h6>{item.product_price}</h6>
                        <button className = "delete-from-faves-button" onClick = {(e) => this.deleteSaved(item.favorites_id)}>Delete</button>
                    </div>
                    
                </div>
            )
        })
      return(
          <div className="favorites-view-container-main">
            <div className = "favorites-render">
                {favoritesList}
            </div>
          </div>
      )
    }
}
export default Favorites;