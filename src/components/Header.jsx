import React from "react";

export default function Header(){


    return(
            <div style={{display:"flex", justifyContent:"center",borderWidth:'6px',borderStyle:"none none solid none", color:"darkred",backgroundImage:'url("https://img.freepik.com/free-vector/black-white-grunge-paint-background_1409-1576.jpg?w=2000")' }} className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 style={{display:"flex", justifyContent:"center",borderWidth:'6px', borderStyle:"solid"}} className="display-1">Baza filmów</h1>
                    <p style={{display:"flex", fontSize:23, textDecoration:"underline",justifyContent:"center"}} className="lead">Każdy film pod słońcem</p>

                </div>
            </div>


    );
}
