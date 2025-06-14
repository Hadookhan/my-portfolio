import '../css/default.css'
import chess from '../assets/chess.jpg'

export default function Projects() {

    return (
        <div className="page-content">
            <h1 className="title">Projects</h1>
            <ul>
                <li><a href='https://www.hadi-khan-chess.com'>My Recreation of Chess</a><br></br><img src={chess} alt='hadi-khan-chess'></img></li>
            </ul>
        </div>
    );
}