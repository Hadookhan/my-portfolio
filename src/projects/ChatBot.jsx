import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import mazeSolver from '../assets/mazeSolver.png';

export default function FileOrganiser() {

    return (
        <section className="project">
                    <h1 className="title">Chatbot App</h1>
        
                    <div className="page-content">
                        <h2 className="introHead">Chatbot App</h2>
            
                        <h3 className="head2">Description</h3>
                        <p className="intro3">
                            A <b>PC ONLY</b> application which allows users 
                            to prompt their very own chatbot!
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
                                <p className='intro3'>Flask</p>
                            </li>
                            <li>
                                <p className='intro3'>C# Forms</p>
                            </li>
                            <li>
                                <p className='intro3'>Nginx</p>
                            </li>
                            <li>
                                <p className='intro3'>Docker</p>
                            </li>
                            <li>
                                <p className='intro3'>Databases</p>
                            </li>
                            <li>
                                <p className='intro3'>Redis (caching)</p>
                            </li>
                            <li>
                                <p className='intro3'>AWS EC2</p>
                            </li>
                            <li>
                                <p className='intro3'>AWS CloudFront</p>
                            </li>
                            <li>
                                <p className='intro3'>PostgreSQL/SQLAlchemy</p>
                            </li>
                            <li>
                                <p className='intro3'>Git using WSL (Linux)</p>
                            </li>
                        </ul>

                        <h3 className="head2">Extras</h3>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/chat-bot-app/releases/download/v1.1/Release.zip'>here</a> to download the Chatbot App</p>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/chat-bot-app'>here</a> to view the source code on Github</p>
                    </div>
                </section>
    );
}