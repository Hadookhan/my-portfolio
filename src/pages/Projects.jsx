 import { useState } from 'react';
import '../css/default.css';
import '../css/projects.css';
// import { Scripts } from 'react-router-dom';

export default function Projects() {
    // const [chessData, setChessData] = useState(null);

    // useEffect(() => {
    //     fetch('https://www.hadi-khan-chess.com')
    //         .then(response => response.text())
    //         .then(data => {
    //             const parser = new DOMParser();
    //             const doc = parser.parseFromString(data, 'text/html');
    //             const root = doc.getElementById('root');
    //             const page = root?.querySelector('.page');
    //             const game = page?.querySelector('.game');
    //             const chessBoardHTML = game?.querySelector('.chess-board')?.innerHTML;
    //             setChessData(chessBoardHTML);
    //         })
    //         .catch(error => console.error('Fetch error:', error));
    // }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [hasHamburger, setHamburger] = useState(false);

    return (
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <body>
                <h1 className="title">Projects</h1>
                <div className="page-content">
                    <div className={`display-project ${isOpen ? 'active' : ''}`}>
                        <div className='inner-content'>
                            <h1>hello</h1>
                        </div>
                    </div>
                    <ul className='project-grid'>
                        <li>
                            <div className="responsive-iframe-container">
                                <iframe
                                    src="https://www.hadi-khan-chess.com"
                                    title="Chess Game"
                                    href="https://www.hadi-khan-chess.com"
                                ></iframe>
                                <button className='projectButton' onClick={() => setIsOpen(!isOpen)}>ABOUT PROJECT 1</button>
                            </div>
                        </li>
                        <li>
                            <div className="responsive-iframe-container">
                                <iframe
                                    src="https://www.hadi-khan-chess.com"
                                    title="Chess Game"
                                    href="https://www.hadi-khan-chess.com"
                                ></iframe>
                                <button className='projectButton' onClick={() => setIsOpen(!isOpen)}>ABOUT PROJECT 2</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </body>
        </html>
    );
}
