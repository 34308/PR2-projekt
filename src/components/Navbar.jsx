import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from "react-router-dom";
import raven from './ravenCom.png'
import React, { useEffect, useState} from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {decodeToken, isExpired} from "react-jwt";
import axios from "axios";
import { phraseAction} from "./reducer";


function NavigationBar() {
    const [seekedPhrase,setPhrase]=useState('');
    const navigate = useNavigate();
    const name=localStorage.getItem('login');
    const logged = localStorage.getItem('isLogged');
    const  login = () =>{
        navigate('/signin')
    }
    const  Register = () =>{
        navigate('/signup')
    }
    useEffect(()=>{
        if(isExpired(localStorage.getItem('token'))){
            localStorage.setItem('isLogged','false');
        }
    })

    function home() {
        navigate('/')
    }

    function goToAddFilm() {
        navigate('/add')
    }

    function Logout() {
        let userId=decodeToken(localStorage.getItem('token')).userId
        console.log('userid:',userId);
        axios({
            method: 'delete',
            url: 'https://at.usermd.net/api/user/logout/:userId',
            data: {
                userid:''+userId,
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });

        localStorage.setItem('Token','');
        localStorage.setItem('isLogged','false');
        navigate('/')
    }

    function Search() {
        phraseAction(seekedPhrase);
        navigate('/');
    }

    function searchHandler(event) {
        setPhrase(event.target.value)
    }

    return (
        <div style={{paddingTop:65}}>
            <Navbar fixed={"top"} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand  onClick={home}>
                        <img
                            alt=""
                            src={raven}
                            width="90"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        Raven Corp.
                    </Navbar.Brand>
                    {useLocation().pathname=== '/' && <Form className="d-flex">
                        <input onChange={event => searchHandler(event)} onClick={Search} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <Button onClick={Search} variant="outline-light">Search</Button>
                    </Form>}
                    <div style={{display:'flex' ,justifyContent:'space-evenly'}}>
                        {(logged==='false') &&
                            <div>
                                <Button style={{marginRight:20}} onClick={login} variant="outline-light">Login</Button>
                                <Button style={{marginRight:20}} onClick={Register} variant="outline-light">Register</Button>
                            </div>
                        }

                        {(logged==='true') &&
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={name}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item onClick={goToAddFilm} href="#action/3.1">Add movie</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={Logout} href="#action/3.2">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        }


                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavigationBar;
