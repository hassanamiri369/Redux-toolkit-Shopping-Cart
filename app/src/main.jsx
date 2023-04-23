import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// config router
import { BrowserRouter } from "react-router-dom";

// config Redux-toolkit provider
import {Provider} from "react-redux";
import store from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>

    <App />

     
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
