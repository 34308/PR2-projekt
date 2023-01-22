import Header from "./Header";
import {Card} from "react-bootstrap";


import star from './star.png'
import {Divider, Table, TableCell, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {decodeToken, isExpired} from "react-jwt";

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
    const navigate = useNavigate();
    const [movie,setMovie]=useState([]);
    const [isLoggedAsAdmin,setLoggedAsAdmin]=useState(false);
    const {state} = useLocation();
    const [downloaded,hasDownload]=useState(false);
    const { id } = state; // Read values passed on state
    let tk=localStorage.getItem('token');

    useEffect(()=>{
        if(!downloaded){
            if(!isExpired(tk)){
                setLoggedAsAdmin(decodeToken(localStorage.getItem('token')).isAdmin)
            }else{
                setLoggedAsAdmin(false);
            }
            hasDownload(true);
            axios({
                method: 'get',
                url: 'https://at.usermd.net/api/movies/'+id,
            }).then((response) => {
                console.log(response.data);
                setMovie(response.data)
            }).catch((error) => {
                console.log(error);
            });
        }

    },[downloaded,id,tk])

    function Delete() {
        if(!isExpired(tk)){
            axios({
                method: 'delete',
                url: 'https://at.usermd.net/api/movie/'+movie.id,
            }).then((response) => {
                console.log(response.data);
                setMovie(response.data)
            }).catch((error) => {
                console.log(error);
            });
        }else{
            alert.show('Sesja wygasła')
        }
        navigate('/');
    }

    return(
        <div >
            <Header></Header>
            <div style={{display:"flex",justifyContent:'center', marginBottom:50 , }}>

                <div style={{display:"flex",flexDirection:"column", padding: '20px', borderRadius: '25px', width:'85%', height:'100%', marginTop:50,alignItems:"center",justifyContent:'center', marginBottom:50 , background:"white"}}>
                    {isLoggedAsAdmin && <button onClick={Delete} type="button" className="btn btn-danger">Delete</button>}
                    <text style={{fontSize:42,textDecoration:"underline"}}>{movie.title}</text>
                    <Table style={{ justifyContent:'center',alignItems:"center" }}>
                        <TableRow >
                           <img alt={'?'} src={movie.image}style={{marginLeft:'70px',marginTop:'40px' ,width:300,height:450}}  ></img>
                            <TableCell align={"left"} ><text style={{textAlign:'left',fontSize:22}}>{movie.content}</text></TableCell>
                        </TableRow>
                    </Table>
                    <div style={{ width:'85%',textAlign:"center", fontSize:60, padding: '20px', borderRadius: '25px', height:'100%', marginTop:50,alignSelf:"center",justifyContent:'center', marginBottom:50 , background:"white"}}>Comments</div>
                    <div style={{ width:'85%',background:"white",padding: '20px', borderRadius: '25px', marginBottom:50 }}>
                        {comments.map((u,i)=>{
                            return(
                                <Card  key={i} style={{padding:20,marginTop:20}}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
