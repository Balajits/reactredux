import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux';
import postReducers from './Reducers/postReducers';
// https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js;

const store= createStore(postReducers);





ReactDOM.render(<Provider store={store}> 
<App /> 
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
