import axios from 'axios';

//constants
const GET_USERS = "GET_USERS"
const GET_PRODUCTS = "GET_PRODUCTS"

//Action creators

export function getUsers(){
    return {
        type: GET_USERS,
        payload: axios
        .get("/api/test")
        .then(response => {
          return response.data;
        })
        .catch(console.log)
    }

}

export function getProducts(){
    return {
        type:GET_PRODUCTS,
        payload: axios
        .get('/api/products')
        .then(response => {
            return response.data;
        })
        .catch(console.log)
    }
}


//initial State
const initialState = {
    users: [],
    isLoading: false,
    didError: false,
    products:[]

};

export default function reducer( state = initialState ,action ){
    switch (action.type){
        case `${GET_USERS}_PENDING`:
            return Object.assign({},state,{ isLoading:true });

        case `${GET_USERS}_FULFILLED`:
            return Object.assign({},state,{
                isLoading:false,
                users: action.payload
            });
        case `${ GET_USERS }_REJECTED`:
            return Object.assign({},state,{
                isLoading:false,
                didError: true
            });   
        case `${GET_PRODUCTS}_PENDING`:
            return Object.assign({},state,{ isLoading:true });

        case `${GET_PRODUCTS}_FULFILLED`:
            return Object.assign({},state,{
                isLoading:false,
                products: action.payload
            });
        case `${ GET_PRODUCTS }_REJECTED`:
            return Object.assign({},state,{
                isLoading:false,
                didError: true
            }); 
            
        default: 
            return state;
    }
}