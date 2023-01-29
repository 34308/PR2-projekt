import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Details from "./components/Details";
import SignUP from "./components/SignUp";
import AddFilm from "./components/AddFilm";
import {isExpired} from "react-jwt";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="signin" element={<Login/>}/>
                    <Route path="signup" element={<SignUP/>}/>
                    <Route path="details" element={<Details/>}/>
                    <Route path="add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddFilm/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
