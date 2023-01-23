import {useNavigate} from "react-router-dom";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import React, {useState} from "react";
import axios from "axios";

export default function AddFilm(){
    const navigate = useNavigate();
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")

    const nameHandler = (event) => {
        // 👇 Get input value from "event"
        setTitle(event.target.value);
    };
    const descriptionHandler = (event) => {
        // 👇 Get input value from "event"
        setDescription(event.target.value);
    };
    const imageHandler = (event) => {
        // 👇 Get input value from "event"
        setImage(event.target.value);
    };

    function addFilm() {
        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            headers: {
                'Accept': 'application/json',
                'Content-Type': ' application/json',
                'x-auth-token': localStorage.getItem('token'),
            },
            data: {
                title: ""+title,
                image: ""+image,
                content: ""+description,
            }
        }).then((response) => {
            console.log(response);
            navigate('/');

        }).catch((error) => {
            console.log(error);
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
                            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Enrich our movie database</h5>
                            <MDBInput onChange={event =>nameHandler(event)} wrapperClass='mb-4' label='Film Name' id='formName' type='name' size="lg"/>
                            <MDBInput onChange={event =>descriptionHandler(event)} wrapperClass='mb-4' label='Description' id='formDesc' type='text' size="lg"/>
                            <MDBInput onChange={event => imageHandler(event)} wrapperClass='mb-4' label='link to image' id='formImg' type='url' size="lg"/>
                            <MDBBtn onClick={addFilm} className="mb-4 px-5" color='dark' size='lg'>Add new film</MDBBtn>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}
