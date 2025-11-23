import '../css/default.css';
import '../css/home.css';
import { Link } from 'react-router-dom';
import emailLogo from '../assets/emailLogo.png';
import githubLogo from '../assets/githubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
import headshot from '../assets/headshot.jpg';
import { motion } from "framer-motion";

export default function Home() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <h1 className="title">Home</h1>
            <motion.div
                initial= {{ opacity: 0, y: 50 }}
                whileInView= {{ opacity: 1, y: 10 }}
                viewport= {{ once: true, amount: 0.2 }}
                transition= {{ duration: 0.6, type: "tween" }}
            >
                <img alt='Me' title='Me' src={headshot} className='headshot'></img>
            </motion.div>
            <div className='page-content'>
                {/* HOME INTRODUCTION PARAGRAPH */}
                <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
                className='home-intro'
                >
                    <h2 className="introHead">Welcome to my portfolio!</h2>
                    <p className='intro'>Hey! My name is Hadi.<br></br>Check out my <Link className="homeLinks" to={"/projects"}>projects</Link> page!</p>
                </motion.div>

                {/* HOME ABOUT-ME PARAGRAPH */}
                <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
                className='home-about-me'>

                    <h2 className="introHead">About Me!</h2>
                    <p className='intro2'>A second year student @ MMU<br></br>Studying a BSc Hons in Computer Science<br></br><Link className="homeLinks" to={"/about"}>Read More!</Link></p>
                </motion.div>    

                {/* HOME CONTACT PARAGRAPH */}
                <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
                className='home-contacts'
                >

                    <h2 className="introHead">My Contacts!</h2>
                    {/* EMAIL CONTACT */}
                    <div className="contact-row">
                        <img src={emailLogo} alt="Email" className="contact-icon" />
                        <p className="intro2">
                            Email -{" "}
                            <a className="contactLinks" href="mailto:hadikhan05@hotmail.co.uk">
                            hadikhan05@hotmail.co.uk
                            </a>
                        </p>
                    </div>
                    {/* GITHUB CONTACT */}
                    <div className="contact-row">
                        <img src={githubLogo} alt="GitHub" className="contact-icon" />
                        <p className="intro2">
                            GitHub -{" "}
                            <a className="contactLinks" href="https://www.github.com/Hadookhan">
                            github.com/Hadookhan
                            </a>
                        </p>
                    </div>
                    {/* LINKEDIN CONTACT */}
                    <div className="contact-row">
                        <img src={linkedInLogo} alt="LinkedIn" className="contact-icon" />
                        <p className="intro2">
                            LinkedIn -{" "}
                            <a
                            className="contactLinks"
                            href="https://www.linkedin.com/in/hadi-khan-ab922229a"
                            >
                            linkedin.com/in/hadi-khan-ab922229a
                            </a>
                        </p>
                    </div>
                    <p className='intro2'>If you would like to get in contact, please reach out to me via email with any enquiries.<br></br><Link className="homeLinks" to={"/contact"}>Read More!</Link></p>
                </motion.div>
            </div>
        </div>
    );
}