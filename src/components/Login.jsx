import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import {useNavigate} from "react-router-dom";
import axios, {AxiosError} from "axios";

export default function Login() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const handleName = (event) => {
        // 👇 Get input value from "event"
        setName(event.target.value);
    };
    const navigate = useNavigate();
    const  SignUp = () =>{
        navigate('/signup')
    }

    const handlePassword = (event) => {
        // 👇 Get input value from "event"
        setPassword(event.target.value);
    };


function login() {
    axios({
        method: 'post',
        url: 'https://at.usermd.net/api/user/auth',
        data: {
            login:''+name,
            password:''+password,
        }
    }).then((response) => {
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('loginId',response.data.userId);
        localStorage.setItem('login',name);
        localStorage.setItem('isLogged','true');
        window.location.href='/';
    }).catch((error) => {
        alert(error.response.data)
        console.log(error.response);
    });

}


return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>
                    <MDBCol md='6'>
                        <MDBCardImage src="https://render.fineartamerica.com/images/rendered/medium/print/6/8/break/images/artworkimages/medium/2/born-to-be-free-balazs-solti.jpg" alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <span className="h1 fw-bold mb-0">Raven Corp.</span>
                            </div>
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                            <MDBInput onChange={handleName} wrapperClass='mb-4' label='Login' id='formControlLg' type='email' size="lg"/>
                            <MDBInput onChange={handlePassword} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                            <button onClick={login} type="button" className="btn btn-dark">Login</button>
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Or create new one:</h5>
                            <button onClick={SignUp} type="button" className="btn btn-dark">Register</button>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}
