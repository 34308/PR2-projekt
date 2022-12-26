import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow, MDBCol, MDBCardImage
}
    from 'mdb-react-ui-kit';

function App() {
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
                            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
                            <MDBInput wrapperClass='mb-4' label='Your Login' size='lg' id='form1' type='text'/>
                            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
                            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
                            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}



export default App;