import {useNavigate} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import React from "react";

export default function AddFilm(){
    const navigate = useNavigate();

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
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Enrich our movie database</h5>

                            <MDBInput wrapperClass='mb-4' label='Film Name' id='formControlLg' type='name' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Year Of Production' id='formControlLg' type='date' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Director' id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Lead Actor' id='formControlLg' type='name' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='Description' id='formControlLg' type='text' size="lg"/>
                            <MDBInput wrapperClass='mb-4' label='image' id='formControlLg' type='url' size="lg"/>

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Add new film</MDBBtn>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}
