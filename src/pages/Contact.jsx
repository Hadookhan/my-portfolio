import '../css/default.css';
import '../css/home.css';
import emailLogo from '../assets/emailLogo.png';
import githubLogo from '../assets/githubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
import instagramLogo from '../assets/instagramLogo.png';
import facebookLogo from '../assets/facebookLogo.png';
import redditLogo from '../assets/redditLogo.png';
import leetcodeLogo from '../assets/leetcodeLogo.png';
import bootdevLogo from '../assets/bootdevLogo.png';
import xLogo from '../assets/xLogo.png';
import { motion } from "framer-motion";

export default function Contact() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <h1 className="title">Contact</h1>
                <div className="page-content">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='main-contacts'
                    >

                        <h2 className="introHead">Main Contacts</h2>
                        <div className="contact-row">
                            <img src={emailLogo} alt="Email" className="contact-icon" />
                            <p className="intro2">
                                Email -{" "}
                                <a className="contactLinks" href="mailto:hadikhan05@hotmail.co.uk">
                                hadikhan05@hotmail.co.uk
                                </a>
                            </p>
                        </div>
        
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
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='Socials'
                    >
                        <h2 className="introHead">Socials</h2>
                        <div className="contact-row">
                            <img src={instagramLogo} alt="Instagram" className="contact-icon" />
                            <p className="intro2">
                                Instagram -{" "}
                                <a
                                className="contactLinks"
                                href="https://www.instagram.com/hadi.khan05"
                                >
                                instagram.com/hadi.khan05
                                </a>
                            </p>
                        </div>
                        <div className="contact-row">
                            <img src={facebookLogo} alt="Facebook" className="contact-icon" />
                            <p className="intro2">
                                Facebook -{" "}
                                <a
                                className="contactLinks"
                                href="https://www.facebook.com/HadiKhan005"
                                >
                                facebook.com/HadiKhan005
                                </a>
                            </p>
                        </div>
                        <div className="contact-row">
                            <img src={redditLogo} alt="Reddit" className="contact-icon" />
                            <p className="intro2">
                                Reddit -{" "}
                                <a
                                className="contactLinks"
                                href="https://www.reddit.com/user/EnoughTourist1814"
                                >
                                reddit.com/user/EnoughTourist1814
                                </a>
                            </p>
                        </div>
                        <div className="contact-row">
                            <img src={xLogo} alt="X" className="contact-icon" />
                            <p className="intro2">
                                X (Twitter) -{" "}
                                <a
                                className="contactLinks"
                                href="https://x.com/Hadi_05_"
                                >
                                x.com/Hadi_05_
                                </a>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='other-contact'
                    >
                        <h2 className="introHead">Other</h2>
                        <div className="contact-row">
                            <img src={githubLogo} alt="GitHub" className="contact-icon" />
                            <p className="intro2">
                                GitHub -{" "}
                                <a className="contactLinks" href="https://www.github.com/Hadookhan">
                                github.com/Hadookhan
                                </a>
                            </p>
                        </div>
                        <div className="contact-row">
                            <img src={leetcodeLogo} alt="Leetcode" className="contact-icon" />
                            <p className="intro2">
                                Leetcode -{" "}
                                <a
                                className="contactLinks"
                                href="https://leetcode.com/u/Hadxr"
                                >
                                leetcode.com/u/Hadxr
                                </a>
                            </p>
                        </div>
                        <div className="contact-row">
                            <img src={bootdevLogo} alt="BootDev" className="contact-icon" />
                            <p className="intro2">
                                Bootdev -{" "}
                                <a
                                className="contactLinks"
                                href="https://www.boot.dev/u/hadxr"
                                >
                                www.boot.dev/u/hadxr
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
        </div>
    );
}