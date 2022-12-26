import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from "react-router-dom";

import raven from './ravenCom.png'
import React from "react";
function NavigationBar() {
    const navigate = useNavigate();
    const  login = () =>{
        navigate('/signin')
    }
    const  Register = () =>{
        navigate('/signup')
    }
        return (
            <div style={{paddingTop:65}}>
                <Navbar fixed={"top"} bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={raven}
                                width="80"
                                height="40"
                                className="d-inline-block align-top"
                            />{' '}
                            Raven Corp.
                        </Navbar.Brand>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <div >
                            <Button style={{marginRight:20}} onClick={login} variant="outline-light">Login</Button>
                            <Button onClick={Register} variant="outline-light">Register</Button>
                        </div>
                    </Container>
                </Navbar>
            </div>
        );
    }
export default NavigationBar;
