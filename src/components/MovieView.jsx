
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import star from './star.png'
import "./card.css"
function MovieView() {
    return (
            <Card  text={"white"} bg={"dark"} >
                <Card.Img src={"https://i.insider.com/5b75d39304f1622b008b5281?width=700"} />
                <Card.Body >
                    <Card.Title > Card Title</Card.Title>
                    <Card.Subtitle>rok produkcji: 1999r</Card.Subtitle>
                    <Card.Text> <Card.Img  src={star} style={{width: 15 , height: 16, paddingBottom:"3px"}} /> 8.5</Card.Text>
                    <Card.Text>Krótki opis filmu, przedstawienie postaci, wyjasnienie fabuly etc...</Card.Text>
                </Card.Body>
            </Card>
    );
}

export default MovieView
