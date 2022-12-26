
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import Foot from "./components/Foot";
function App() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
}

export default App
