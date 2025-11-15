import '../css/default.css'
import '../css/home.css'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="page-content">
                <h2 className="introHead">Welcome to my portfolio!</h2>
                <p className='intro'>Hey! I'm Hadi.<br></br>Check out my <Link className="homeLinks" to={"/projects"}>projects</Link> page!</p>
                <h2 className="introHead">About Me!</h2>
                <p className='intro2'>A second year student @ MMU<br></br>Studying a BSc Hons in Computer Science<br></br>Brilliant, Great, Fun<br></br><Link className="homeLinks" to={"/about"}>Read More!</Link></p>
            </div>
        </div>
    );
}