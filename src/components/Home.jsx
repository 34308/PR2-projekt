import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieView from "./MovieView";
import React from "react";

export default function Home(){
    return(
        <div>
            <div style={{display:"flex", justifyContent:"center",borderWidth:'6px',borderStyle:"none none solid none", color:"darkred",backgroundImage:'url("https://img.freepik.com/free-vector/black-white-grunge-paint-background_1409-1576.jpg?w=2000")' }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 style={{display:"flex", justifyContent:"center",borderWidth:'6px', borderStyle:"solid"}} className="display-1">Baza filmów</h1>
                    <p style={{display:"flex", fontSize:23, textDecoration:"underline",justifyContent:"center"}} className="lead">Każdy film pod słońcem</p>
                    <a></a>
                </div>

            </div>

        <div className="Cards">
            <Row style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',}} xl={5} xs={2} md={4} className="gy-lg-4">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Col>
                        <MovieView />
                    </Col>
                ))}
            </Row>
        </div>
        </div>
    );
}
