import '../css/default.css';
import '../css/projects.css';
import { Link } from 'react-router-dom';

export default function PortfolioSite() {

    return (
        <section className="project">
            <h1 className="title">Project: Portfolio Site</h1>
            <div className="page-content">
                <div className="page-content">
                    <h2 className="introHead">Porfolio (This Website)</h2>

                    <h3 className="head2">Description</h3>
                    <p className="intro3">
                        The heart of all my work. I have self-programmed
                        my online portfolio, which showcases my broad technical
                        skills and allows people to find out more about me!
                    </p>

                    <p className="intro3">
                        I initially made this portfolio because I needed a place to
                        present myself. I thought of using apps like Wix, but I preferred
                        the idea of having a portfolio that I could also use as a 
                        showcased project. This project came after the <Link className="homeLink" to='/projects/chessGame'>Chess Game</Link> I made,
                        which was where I was first introduced to Javascript/React. This 
                        improved my frontend and made it easier to create this portfolio.
                        This was also the first project I used alongside Docker, and also
                        error checked/autodeployed using CICD. I also learned this from the 
                        <a href='https://www.Boot.dev'>BootDev</a> course. I implemented this
                        only to show that I could apply it, however autodeployment is really
                        useful for me as whenever I introduce a new implementation, each git push
                        automatically hosts the new version of the website.
                    </p>
                </div>

            </div>
        </section>
    );
}