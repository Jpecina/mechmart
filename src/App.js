import React, { Component } from 'react';
import Header from './Components/Header';
import Routes from './Routes';
import './App.css'


class App extends Component {
    style = {
        width:"100%",
        height:"auto",
    }

    render() {
        
        return (
            <div className = "main-app-render" style = {this.style}>
            <Header/>
                {Routes}
            </div>
        );
    } 
}

export default App;