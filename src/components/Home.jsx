import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieView from "./MovieView";
import React from "react";
import Header from "./Header";

export default function Home(){
    return(
        <div>
            <Header/>
        <div className="Cards">
            <Row style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',}} xl={5} xs={2} md={4} className="gy-lg-4">
                {
                    <MovieView />
                }
            </Row>
        </div>
        </div>
    );
}
