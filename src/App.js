
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import foot from "./components/foot";
import {Outlet} from "react-router-dom";
function App() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Outlet></Outlet>
            <div>
                {foot}
            </div>
        </div>
    );
}

export default App
