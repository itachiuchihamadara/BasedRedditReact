import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from './Login/LoginPage';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
     <Routes >
        <Route path = "/login" element={<UserLogin/>}/>
        <Route path = "/home" element={<App/>}/>
     </Routes >
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
