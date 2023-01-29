import 'bootstrap/dist/css/bootstrap.min.css';
import {  CardActionArea } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {usePhrase} from "./reducer";


function MovieView(props) {
    const navigate = useNavigate();
    const phrase=usePhrase();
    const [movies, setMovies]=useState([]);
    const [downloaded, hasDownload]=useState(false);
    const [isDark, setDark]=useState(true);
    const  Detail = (id) =>{
        navigate('/details',{ state: { id: id ,theme:props.mode} })
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
                alert(error.results.data);
                console.log(error);
            });

        }
        if(props.mode==='dark'){
            setDark(true);
        }else{
            setDark(false);
        }
    },[downloaded,props.mode])

    return (
            movies.filter(movie => movie?.title?.toLowerCase().includes(phrase)).map((u,i)=>{
                return(
                    <Card style={{
                        margin:10,
                        width: '300px',
                        height: '450px',
                    }} key={i} text={isDark? 'light':'dark'} bg={props.mode} >
                        <CardActionArea style={{justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1}} onClick={()=>Detail(u.id)}>
                            <Card.Img style={{alignSelf:"center", height:285,width:200,marginLeft:'14%',marginTop:20}} src={u.image} />
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
