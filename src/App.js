
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import Foot from "./components/Foot";
import {useEffect, useState} from "react";



function App() {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(()=>{
       function f() {
           const dmode=localStorage.getItem('darkmode');
           if(dmode==null|| dmode==='true'){
               setDarkMode(true);
           }
           else{
               setDarkMode(false)
           }
       }
        f();
    })
    return (
        <div style={darkMode ? {backgroundColor:"#3c3f41"}: {backgroundColor:"#EDEDED"}}  >
            <Navbar mode={darkMode? 'dark':'light'} outline={darkMode? 'outline-light':'outline-dark'}/>
            <Outlet context={[darkMode? 'dark':'light']}></Outlet>
            <Foot></Foot>
        </div>
    );
}

export default App
