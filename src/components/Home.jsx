import Row from "react-bootstrap/Row";
import MovieView from "./MovieView";
import Header from "./Header";
import {useOutletContext} from "react-router-dom";



export default function Home(){
    const [mode] = useOutletContext();
    console.log(mode)
    return(
        <ul>
            <Header/>
            <ul  className="Cards">
                <Row style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',}} className="gy-lg-4">
                        <MovieView mode={mode}></MovieView >
                </Row>
            </ul>
        </ul>
    );


}

