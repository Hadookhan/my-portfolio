import '../css/default.css';
import '../css/projects.css';

export default function ChessGame() {

    return (
        <div>
            <h1 className="title">Project: Chess Game</h1>
            <div className="page-content">

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
            </div>
        </div>
    );
}