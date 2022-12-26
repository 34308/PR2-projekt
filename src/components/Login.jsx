import 'bootstrap/dist/css/bootstrap.min.css';
import "./StyleLogin.css";
import React from "react";
import {
    MDBBtn,
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

export default function Login() {
    const navigate = useNavigate();
    const  SignUp = () =>{
        navigate('/signup')
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

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Or create new one:</h5>
                            <MDBBtn onClick={SignUp} className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}
