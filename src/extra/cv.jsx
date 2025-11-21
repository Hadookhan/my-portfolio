import '../css/default.css';
import '../css/home.css';
import CV from '../assets/Hadi-Khan-Tech-CV.pdf';

export default function cv() {
    return (
        <div>
            <h1 className="title">CV Copy</h1>
            <div className="page-content">
                    <object data={CV} type="application/pdf" className="cv-viewer">
                        <p className='intro3'>My Tech CV (<a className="homeLinks" href={CV} target="_blank" rel="noreferrer">Download</a>)</p>
                    </object>
            </div>
        </div>
    );
}
