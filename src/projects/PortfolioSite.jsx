import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import { Link } from 'react-router-dom';

export default function PortfolioSite() {

    return (
        <section className="project">
            <h1 className="title">Project: Portfolio Site</h1>
            <div className="page-content">
                <h2 className="introHead">Porfolio (This Website)</h2>

                <h3 className="head2">Description</h3>
                <p className="intro3">
                    The heart of all my work. I have self-programmed 
                    my online portfolio, which showcases my broad technical 
                    skills and allows people to find out more about me! 
                </p>

                <h3 className="head2">Self-reflection</h3>
                <p className="intro3">
                    I initially made this portfolio because I needed a place to 
                    present myself. I thought of using apps like Wix, but I preferred 
                    the idea of having a portfolio that I could also use as a 
                    showcased project. This project came after the <Link className="homeLinks" to='/projects/chessGame'>Chess Game</Link> I made, 
                    which was where I was first introduced to Javascript/React. This 
                    improved my frontend beforehand and made it easier to create this portfolio. 
                    I had also learnt how to deploy a web server from that project, 
                    which also had a benefit when I had to deploy the server for this project.
                    This was also the first project I used alongside Docker, and also 
                    error checked/autodeployed using CICD. I also learned this from the <a className="homeLinks" href='https://www.Boot.dev'>BootDev</a> course. 
                    I implemented this mainly to show that I could apply it, 
                    however autodeployment is really useful for this project, because whenever 
                    I introduce a new implementation, each git push automatically hosts the 
                    new version of the website. 
                </p>

                <h3 className="head2">Extras</h3>
                <p className="intro3">Click <a className='homeLinks' href='https://github.com/Hadookhan/my-portfolio'>here</a> to view the source code on Github</p>
            </div>
        </section>
    );
}