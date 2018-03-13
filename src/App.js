import React, { Component } from 'react';
import Header from './Components/Header';
import Routes from './Routes';
import './App.css'


class App extends Component {
    
    render() {
        return (
            <div>
            <Header/>
                {Routes}
                
            </div>
        );
    }
}

export default App;