import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import mazeSolver from '../assets/mazeSolver.png';

export default function FileOrganiser() {

    return (
        <section className="project">
                    <h1 className="title">Guided Project: Maze Solver</h1>
        
                    <div className="page-content">
                        <h2 className="introHead">Maze Solver</h2>
            
                        <h3 className="head2">Description</h3>
                        <p className="intro3">
                            A <b>PC ONLY</b> program which generates a randomized 
                            maze and solves it using a DFS approach.
                            <br></br>
                            <b>NOTE: </b>This was a guided project from the <i><a className="homeLinks" href='https://www.Boot.dev'>BootDev</a></i> course.
                        </p>
            
                        <img
                            className="proj-img"
                            src={mazeSolver}
                            alt="Screenshot of the Maze Solver project"
                            title="Completed Maze"
                        />
            
                        <h3 className="head2">Self-reflection</h3>
                        <p className="intro3">
                            I completed this project straight after learning about 
                            graph traversal algorithms (primarily DFS & BFS). I found 
                            this project to be very useful as it really sharpened my 
                            ability to use DFS. I also learnt how to use the <i>tkinter</i> tool 
                            in Python, which I found awesome. 
                            Big shoutout to <i><a className="homeLinks" href='https://www.Boot.dev'>BootDev</a></i> for 
                            this amazing course!
                        </p>

                        <h3 className="head2">Skills gained/reinforced:</h3>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Python</p>
                            </li>
                            <li>
                                <p className='intro3'>Graph DFS</p>
                            </li>
                            <li>
                                <p className='intro3'>tkinter</p>
                            </li>
                            <li>
                                <p className='intro3'>Testing</p>
                            </li>
                            <li>
                                <p className='intro3'>Git using WSL (Linux)</p>
                            </li>
                        </ul>

                        <h3 className="head2">Extras</h3>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/Maze-Solver/releases/download/Complete/Maze-Solver-main.zip'>here</a> to download the File Organiser</p>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/Maze-Solver'>here</a> to view the source code on Github</p>

                        <h3 className="head-fixing">CURRENTLY CANNOT RUN PROGRAM: FIXING</h3>
                    </div>
                </section>
    );
}