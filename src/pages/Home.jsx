import '../css/default.css'
import '../css/home.css'

export default function Home() {

    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="page-content">
                <h2 className="introHead">Welcome to my portfolio!</h2>
                <p className='intro'>Hey! I'm Hadi.<br></br>Check out my <a className="homeLinks" href="../Projects">projects</a> page!</p>
                <h2 className="introHead">About Me!</h2>
                <p className='intro2'>A second year student @ MMU<br></br>Studying a BSc Hons in Computer Science<br></br>Brilliant, Great, Fun<br></br><a className="homeLinks" href="../About">Read More!</a></p>
            </div>
        </div>
    );
}