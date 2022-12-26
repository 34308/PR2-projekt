import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Foot() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Raven Corp.
                            </h6>
                            <p>
                                Great company crated by a great man.
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                34308@student.anstar.edu.pl
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='ravenCorp.com'>
                    RavenCrop.com
                </a>
            </div>
        </MDBFooter>
    );
}
