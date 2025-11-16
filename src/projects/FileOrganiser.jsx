import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import fileOrganiser from '../assets/fileOrganiser.png';

export default function FileOrganiser() {

    return (
        <section className="project">
                    <h1 className="title">Project: File Organiser</h1>
        
                    <div className="page-content">
                        <h2 className="introHead">File Organiser</h2>
            
                        <h3 className="head2">Description</h3>
                        <p className="intro3">
                            A program which interacts with your local files. 
                            The user specifies the source directory and 
                            the target directory. After the user permits 
                            execution, all files from the source will move to the 
                            target destination and automatically organise themselves in 
                            set folders. 
                        </p>
            
                        <img
                            className="proj-img"
                            src={fileOrganiser}
                            alt="Screenshot of the File Organiser project"
                            title="File Organiser Menu"
                        />
            
                        <h3 className="head2">Self-reflection</h3>
                        <p className="intro3">
                            This was the first project I made using C# and the .NET framework. 
                            I was inspired to work on this project as I was learning C# in one 
                            of my Uni modules, so I used this project to elevate my ability to program 
                            in the C# language. This was also the first time I used rule sets using YAML 
                            files outside of CICD pipelines. I enjoyed this project since I was never 
                            strong programming with files, so completing this really improved my confidence. 
                        </p>

                        <h3 className="head2">Skills gained/reinforced:</h3>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>C#</p>
                            </li>
                            <li>
                                <p className='intro3'>File Systems</p>
                            </li>
                            <li>
                                <p className='intro3'>Tree Traversal Algorithms</p>
                            </li>
                            <li>
                                <p className='intro3'>Designing Menu Driven Interface</p>
                            </li>
                            <li>
                                <p className='intro3'>.NET Framework</p>
                            </li>
                            <li>
                                <p className='intro3'>YAML Files</p>
                            </li>
                            <li>
                                <p className='intro3'>Regular Expressions (Regex)</p>
                            </li>
                            <li>
                                <p className='intro3'>Visual Studio 2022</p>
                            </li>
                            <li>
                                <p className='intro3'>Git using WSL (Linux)</p>
                            </li>
                        </ul>

                        <h3 className="head2">Extras</h3>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/FileOrganizer/releases/download/v1.0/FileOrganizer.zip'>here</a> to download the File Organiser</p>
                        <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/FileOrganizer'>here</a> to view the source code on Github</p>
                    </div>
                </section>
    );
}