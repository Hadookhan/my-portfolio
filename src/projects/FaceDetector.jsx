import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import faceDetectionVideo from '../assets/face_detection_video.mp4';

export default function FileOrganiser() {

    return (
        <section className="project">
                    <h1 className="title">Project: Face Detector</h1>
        
                    <div className="page-content">
                        <h2 className="introHead">Face Detector</h2>
            
                        <h3 className="head2">Description</h3>
                        <p className="intro3">
                            A <b>PC ONLY</b> program which accesses the camera app and 
                            can identify a person by their face, and trace 
                            it through the camera.
                        </p>
            
                        <h3 className="head2">Video of Program</h3>
                        <video
                            className="proj-img"
                            controls
                            muted
                        >
                            <source src={faceDetectionVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <h3 className="head2">HOW TO INSTALL & USE</h3>
                        <p className='intro3'><b>!! Ensure a camera is enabled on the device before use !!</b></p>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Download .zip folder - <a className='homeLinks' href='https://github.com/Hadookhan/face-detection-ai/releases/download/v1.0/faceDetection.zip'>here</a></p>
                            </li>
                            <li>
                                <p className='intro3'>Extract folder</p>
                            </li>
                            <li>
                                <p className='intro3'>Locate <i>dataset/persons</i> folder</p>
                                <ul className='intro3'>
                                    <li>
                                        <p className='intro3'>Create <i>dataset/persons</i> directory if it does not exist</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className='intro3'>Insert full faced image of yourself into <i>dataset/persons</i></p>
                            </li>
                            <li>
                                <p className='intro3'><b>Optional:</b> Rename <i>persons</i> folder to match content (e.g. Your name)</p>
                            </li>
                            <li>
                                <p className='intro3'><b>(WINDOWS)</b> Click setup_and_run.ps1</p>
                            </li>
                            <li>
                                <p className='intro3'><b>(UBUNTU LINUX)</b> Click setup_and_run.sh</p>
                            </li>
                        </ul>
            
                        <h3 className="head2">Self-reflection</h3>
                        <p className="intro3">
                            This is my first complete <b>AI</b> project! I was required to learn the 
                            OpenCV module in Python to allow communication with the Camera app. 
                            I orgininally used the face_recognition module alongside OpenCV, however 
                            since face_recognition uses the dblib library, it made configuration really 
                            difficult and contained a lot of outdated code. This firmed my option to stick 
                            with OpenCV. I have used a Powershell and Shell script to automatically download 
                            the projects dependencies; language, interpretor, libraries, etc, and run the 
                            program on one click for Windows or Linux. I also learned how to use the pyenv 
                            module which allowed me to set my local python version to an earlier state, 
                            to allow compatibility with OpenCV.
                        </p>

                        <h3 className="head2">Skills gained/reinforced:</h3>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Python</p>
                            </li>
                            <li>
                                <p className='intro3'>OpenCV</p>
                            </li>
                            <li>
                                <p className='intro3'>Pyenv</p>
                            </li>
                            <li>
                                <p className='intro3'>Python Virtual Environments</p>
                            </li>
                            <li>
                                <p className='intro3'>Shell Commands</p>
                            </li>
                            <li>
                                <p className='intro3'>Powershell Commands</p>
                            </li>
                            <li>
                                <p className='intro3'>Git using WSL (Linux)</p>
                            </li>
                        </ul>

                        <h3 className="head2">Extras</h3>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/face-detection-ai/releases/download/v1.0/faceDetection.zip'>here</a> to download the Face detector program</p>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/face-detection-ai'>here</a> to view the source code on Github</p>

                        <h3 className="head-fixing">CURRENTLY CANNOT RUN PROGRAM: FIXING</h3>
                    </div>
                </section>
    );
}