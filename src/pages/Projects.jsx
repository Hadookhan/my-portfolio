import { useState, useEffect } from 'react';
import '../css/default.css';
import chess from '../assets/chess.jpg';

export default function Projects() {
    const [chessData, setChessData] = useState(null);

    useEffect(() => {
        fetch('https://www.hadi-khan-chess.com')
            .then(response => response.text())
            .then(data => {
                setChessData(data); // or parse it as needed
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div className="page-content">
            <h1 className="title">Projects</h1>
            <ul>
                <li>
                    <a href="https://www.hadi-khan-chess.com" target="_blank" rel="noopener noreferrer">
                        hadi-khan-chess.com
                    </a>
                    <br />
                    <img src={chess} alt="hadi-khan-chess" />
                    {chessData && (
                        <div className="chess-preview">
                            <p>Fetched data preview:</p>
                            <pre>{chessData.slice(0, 500)}...</pre>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}
