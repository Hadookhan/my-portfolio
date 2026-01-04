import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import mazeSolver from '../assets/mazeSolver.png';

export default function FileOrganiser() {

    return (
        <section className="project">
                    <h1 className="title">Network Intelligence</h1>
        
                    <div className="page-content">
                        <h2 className="introHead">Network Intelligence</h2>
            
                        <h3 className="head2">Description</h3>
                        <p className="intro3">
                            TODO
                            <br></br>
                        </p>
            
                        <h3 className="head2">Self-reflection</h3>
                        <p className="intro3">
                            TODO
                        </p>

                        <h3 className="head2">Skills gained/reinforced:</h3>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Python</p>
                            </li>
                            <li>
                                <p className='intro3'>Dijkstras/BFS/DFS</p>
                            </li>
                            <li>
                                <p className='intro3'>Git using WSL (Linux)</p>
                            </li>
                        </ul>

                        <h3 className="head2">Extras</h3>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/Network-intelligence'>here</a> to view the source code on Github</p>
                    </div>
                </section>
    );
}