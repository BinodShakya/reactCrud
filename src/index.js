import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './tailwind.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

// axios.create().interceptors.request.use(
//     request => {
//         console.log(localStorage.getItem('token'))
//         if (request.url.includes('employees')){
//             request.headers.Authorization = localStorage.getItem('token');
//         }
//         return request;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
