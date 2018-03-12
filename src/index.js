import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    
    <Provider store = {store}>
    <Router>
        <App />  
    </Router>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
