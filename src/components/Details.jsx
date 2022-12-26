
import React from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";
import {Card} from "react-bootstrap";
import {MDBCardTitle} from "mdb-react-ui-kit";

import star from './star.png'
import {Divider} from "@mui/material";
const film=[
    {
        opis:'Pandorę znów napada wroga korporacja w poszukiwaniu cennych minerałów.Pandorę znów napada wroga korporacja w poszukiwaniu cennych minerałów. Jack i Neytiri Jack i Neytiri wraz z rodziną zmuszeni są opuścić wioskę i szukać pomocy u innych plemion zamieszkujących planetę. ',
        rezyser:'J cameron',
        gatunek:'Sci-Fi',
        produkcja:'usa',
        premiera:"14 grudnia 2022 (Światowa premiera) 16 grudnia 2022 (Polska premiera kinowa)",
        nagrody:'Film dostał 1 nagrodę i 21 nominacji',
        bigphoto:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7E8516F750AB36D7E89B3808BCDCB6F8B262D7329621C44181D925DA744C10FF/scale?width=1200&aspectRatio=1.78&format=jpeg',
        photo:"https://fwcdn.pl/fpo/81/78/558178/8047434.6.jpg"
    }
    ,
]
const comments=[
    {
        user:'ktos2',
        grade:5,
        comment:'nie tak dobre jak kiedyś',
    },
    {
        user:'ktos4',
        grade:1,
        comment:'nie tak dobre jak kiedyś',
    },
    {
        user:'ktos5',
        grade:2,
        comment:'nie tak dobre jak kiedyś',
    },
    {
        user:'ktos2',
        grade:4,
        comment:'nie tak dobre jak kiedyś',
    },
]
export default function Details(){

    return(
        <div>
        <Header></Header>
            <div style={{fontSize:20, display:"flex",justifyContent:'center',alignItems:"center"} }>


                 <div  style={{  padding: '20px', borderRadius: '25px', width:'85%', height:'100%', marginTop:50, flexDirection:'column',alignItems:"center", display:'flex',justifyContent:'center', marginBottom:50 , background:"white"}}>
                     <div style={{ alignItems:'center',display: 'flex'}}>
                        <img src=  {film[0].photo}style={{marginLeft:'70px',marginTop:'40px' ,width:300,height:450}}  ></img>
                        <text style={{fontSize:22, width:'40%',marginLeft:'40px',marginTop:'-90px'}}>{film[0].opis}</text>
                     </div>
                    <div style={{  }}>
                        <div style={{flexDirection:'row', display: 'flex'}}>
                            <text style={{fontSize:20, color:"grey",fontWeight:'bold'}}>Director: </text>
                            <text style={{fontSize:20,}}>{film[0].rezyser}</text>
                         </div>
                        <div style={{flexDirection:'row', display: 'flex'}}>
                            <text style={{fontSize:20,color:"grey",fontWeight:'bold', }}>Genre: </text>
                            <text style={{fontSize:20,width:'40%'}}>{film[0].gatunek}</text>
                        </div>
                        <div style={{flexDirection:'row', display: 'flex'}}>
                            <text style={{color:"grey",fontWeight:'bold' }}>Production: </text>
                            <text style={{}}>{film[0].produkcja}</text>
                        </div>
                        <div style={{flexDirection:'row', display: 'flex'}}>
                            <text style={{color:"grey",fontWeight:'bold'}}>Premier: </text>
                            <text style={{}}>{film[0].premiera}</text>
                        </div>
                        <div style={{flexDirection:'row', display: 'flex'}}>
                            <text style={{color:"grey",fontWeight:'bold',}}>Awards: </text>
                            <text style={{}}>{film[0].nagrody}</text>
                        </div>
                     </div>
                     <>
                         <div style={{padding:90,borderBottom: 'solid'}}>
                             <text style={{fontSize:50}}>COMMENTS</text>

                         </div>

                         {comments.map((u,i)=>{
                            return(
                                <Card style={{width:'60%', padding:20,marginTop:50}}>

                                    <Card.Body>
                                        <Card.Title>{u.user}</Card.Title>
                                        <Divider style={{borderBottom:"solid"}}/>
                                        <div style={{display:"flex",flexDirection:"row"}}>
                                            <Card.Img style={{height:24,width:24}} src={star}></Card.Img>
                                            <Card.Text> {u.grade}/5</Card.Text>
                                        </div>
                                        <Card.Text> {u.comment}</Card.Text>

                                    </Card.Body>
                                </Card>
                            );
                         })}
                     </>

                 </div>

            </div>
        </div>
    );
}
