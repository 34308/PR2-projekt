import React, {useState} from 'react';


import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow, MDBCol, MDBCardImage
}
    from 'mdb-react-ui-kit';
import axios from 'axios';

function App() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [firstPassword,setFPassword]=useState('');
    const [secondPassword,setSPassword]=useState('');
    const handleName = (event) => {
        // 👇 Get input value from "event"
        setName(event.target.value);
    };
    const handleFPassword = (event) => {
        // 👇 Get input value from "event"
        setFPassword(event.target.value);
    };
    const handleSPassword = (event) => {
        // 👇 Get input value from "event"
        setSPassword(event.target.value);
    };
    const handleEmail = (event) => {
        // 👇 Get input value from "event"
        setEmail(event.target.value);
    };
    function Register() {
        if(secondPassword=== firstPassword){

            axios({
                method: 'post',
                url: 'https://at.usermd.net/api/user/create/',
                data: {
                    name:''+name,
                    email: ''+email,
                    password:''+firstPassword,
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
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

                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput onChange={handleName} wrapperClass='mb-4' label='Your Login' size='lg' id='form1' type='text'/>
                            <MDBInput onChange={handleEmail} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
                            <MDBInput onChange={handleFPassword} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
                            <MDBInput onChange={handleSPassword} wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
                            <MDBBtn onClick={()=>Register()} className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}



export default App;
