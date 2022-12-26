
import 'bootstrap/dist/css/bootstrap.min.css';

import {  CardActionArea } from '@mui/material';
import star from './star.png'
import "./card.css"
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
const films=[
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
    {
        title:'Pocahotnas',
        production:'1721',
        image:'https://i.insider.com/5b75d39304f1622b008b5281?width=700',
        rating:8.5,
        description:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porta libero nec rutrum eleifend. Donec mattis ut diam a laoreet. Maecenas a dignissim lacus, ut convallis est. Suspendisse mattis dapibus lectus. Aliquam eget enim maximus, convallis nisi facilisis, blandit est.',
    },
]

function MovieView() {
    const navigate = useNavigate();
    const  Detail = () =>{
        navigate('/details')
    }

    return (
        films.map((u,i)=>{
            return(
                <Card  text={"white"} bg={"dark"} >
                    <CardActionArea onClick={Detail}>
                        <Card.Img src={u.image} />
                        <Card.Body>
                            <Card.Title > {u.title}</Card.Title>
                            <Card.Subtitle>{u.production}r</Card.Subtitle>
                            <Card.Text> <Card.Img  src={star} style={{width: 15 , height: 16, paddingBottom:"3px"}} /> {u.rating}</Card.Text>
                            <Card.Text>{u.description}</Card.Text>
                        </Card.Body>
                    </CardActionArea>
                </Card>
            );
        })

    );
}

export default MovieView
