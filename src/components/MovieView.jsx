
import 'bootstrap/dist/css/bootstrap.min.css';

import {  CardActionArea } from '@mui/material';
import star from './star.png'
import "./card.css"
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {usePhrase} from "./reducer";


function MovieView() {
    const navigate = useNavigate();
    const phrase=usePhrase();
    const [movies, setMovies]=useState([]);
    const [downloaded, hasDownload]=useState(false);
    const  Detail = (id) =>{
        navigate('/details',{ state: { id: id } })
    }
    useEffect(()=>{
        if(!downloaded){
            hasDownload(true);
            axios({
                method: 'get',
                url: 'https://at.usermd.net/api/movies',
            }).then((response) => {
                setMovies(response.data)
            }).catch((error) => {
                console.log(error);
            });
        }
    },[])
    return (
        movies.filter(movie=>movie.title.includes(phrase)).map((u,i)=>{
            return(
                <Card style={{
                    width: '300px',
                    height: '450px',
                }} key={i} text={"white"} bg={"dark"} >
                    <CardActionArea onClick={()=>Detail(u.id)}>
                        <Card.Img style={{height:285,width:200,marginTop:20}} src={u.image} />
                        <Card.Body>
                            <Card.Title >{u.title}</Card.Title>
                            <Card.Text >{u.content.substring(0,70)+"..."}</Card.Text>
                        </Card.Body>
                    </CardActionArea>
                </Card>
            );
        })

    );
}

export default MovieView
