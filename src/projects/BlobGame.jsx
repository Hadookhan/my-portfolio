import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import blobGame from '../assets/blobGame.png';

export default function BlobGame() {

    return (
        <section className="project">
            <h1 className="title">Project: Blob Game</h1>

            <div className="page-content">
                <h2 className="introHead">Blob Game</h2>

                <h3 className="head2">Description</h3>
                <p className="intro3">
                    A simple single-player game where the user moves their character 
                    around an area while dodging increasingly harder obstacles. The 
                    objective is to collect as many coins as possible. This game is <b>PC ONLY</b>.
                </p>

                <img
                    className="proj-img"
                    src={blobGame}
                    alt="Screenshot of the Blob Game project"
                    title="Blob Game"
                />

                <h3 className="head2">Self-reflection</h3>
                <p className="intro3">
                    This was the first real coding project I started and completed, so the 
                    code is very rough. However, it was a huge step for me and sparked my 
                    interest in programming. Shortly after this project I joined bootcamp 
                    courses and relearned everything from scratch. 
                </p>

                <h3 className="head2">Skills gained/reinforced:</h3>
                <ul className='intro3'>
                    <li>
                        <p className='intro3'>Python</p>
                    </li>
                    <li>
                        <p className='intro3'>Pygame</p>
                    </li>
                    <li>
                        <p className='intro3'>2D game development</p>
                    </li>
                </ul>

                <h3 className="head2">Extras</h3>
                <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/blob/releases/download/latest/blob-main.zip'>here</a> to download the Blob Game</p>
                <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/blob'>here</a> to view the source code on Github</p>
            </div>
            

        </section>
    );

}