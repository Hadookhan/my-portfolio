import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import { Link } from 'react-router-dom';

export default function ChessGame() {

    return (
        <section className="project">  
            <h1 className="title">Project: Chess Game</h1>

            <div className="page-content">
                <h2 className="introHead">Chess</h2>

                <h3 className="head2">Description</h3>
                <p className="intro3">
                     A very simple recreation of Chess. More of a 
                     sandbox game where players can move pieces freely. 
                     Includes real-time piece movements using websockets. 
                </p>

                <h3 className="head2">Interactive Chess Board:</h3>
                <div className="responsive-iframe-container">
                    <iframe
                        src="https://www.hadi-khan-chess.com"
                        title="Chess Game"
                        href="https://www.hadi-khan-chess.com"
                    ></iframe>
                    <form action="https://hadi-khan-chess.com">
                    <button className='projectButton'>Go To Website</button>
                    </form>
                </div>

                <h3 className="head2">Self-reflection</h3>
                <p className="intro3">
                This was quite a big milestone for me as I applied a lot more 
                theoretical knowledge into this project, like OOP and what algorithms to use. 
                This was also the first project I tracked with Github, since this was soon 
                after learning Git from the <a className="homeLinks" href='https://www.Boot.dev'>BootDev</a> course. 
                Still, there was a lot of improvements that could have been made to this project. 
                Nonetheless, a massive improvement from the <Link className="homeLinks" to='/projects/blobGame'>Blob Game</Link>.<br></br> 
                <b>PS:</b> The backend service sometimes takes 1-2 minutes to bootup due to inactivity, 
                which causes the chess board to take a while to render in. 
                </p>

                <h3 className="head2">Extras</h3>
                <p className="intro3">Click <a className='homeLinks' href='https://www.hadi-khan-chess.com'>here</a> to open the Chess site</p>
                <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/chess_v1'>here</a> to view the source code on Github</p>

            </div>
        </section>
    );
}