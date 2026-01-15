import '../css/default.css';
import '../css/contact.css';
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
                <div className="page-content-contact">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='main-contacts-contact'
                    >

                        <h2 className="introHead-contact">Main Contacts</h2>
                        <div className="contact-row-contact">
                            <img src={emailLogo} alt="Email" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Email -{" "}
                                <a className="contactLinks-contact" href="mailto:hadikhan05@hotmail.co.uk">
                                hadikhan05@hotmail.co.uk
                                </a>
                            </p>
                        </div>
        
                        <div className="contact-row-contact">
                            <img src={linkedInLogo} alt="LinkedIn" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                LinkedIn -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://www.linkedin.com/in/hadi-khan-ab922229a"
                                target="_blank"
                                rel="noreferrer">
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
                        className='Socials-contact'
                    >
                        <h2 className="introHead-contact">Socials</h2>
                        <div className="contact-row-contact">
                            <img src={instagramLogo} alt="Instagram" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Instagram -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://www.instagram.com/hadi.khan05"
                                target="_blank"
                                rel="noreferrer">
                                instagram.com/hadi.khan05
                                </a>
                            </p>
                        </div>
                        <div className="contact-row-contact">
                            <img src={facebookLogo} alt="Facebook" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Facebook -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://www.facebook.com/HadiKhan005"
                                target="_blank"
                                rel="noreferrer">
                                facebook.com/HadiKhan005
                                </a>
                            </p>
                        </div>
                        <div className="contact-row-contact">
                            <img src={redditLogo} alt="Reddit" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Reddit -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://www.reddit.com/user/EnoughTourist1814"
                                target="_blank"
                                rel="noreferrer">
                                reddit.com/user/EnoughTourist1814
                                </a>
                            </p>
                        </div>
                        <div className="contact-row-contact">
                            <img src={xLogo} alt="X" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                X (Twitter) -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://x.com/Hadi_05_"
                                target="_blank"
                                rel="noreferrer">
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
                        className='other-contact-contact'
                    >
                        <h2 className="introHead-contact">Other</h2>
                        <div className="contact-row-contact">
                            <img src={githubLogo} alt="GitHub" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                GitHub -{" "}
                                <a className="contactLinks-contact"
                                href="https://www.github.com/Hadookhan"
                                target="_blank"
                                rel="noreferrer">
                                github.com/Hadookhan
                                </a>
                            </p>
                        </div>
                        <div className="contact-row-contact">
                            <img src={leetcodeLogo} alt="Leetcode" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Leetcode -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://leetcode.com/u/Hadxr"
                                target="_blank"
                                rel="noreferrer">
                                leetcode.com/u/Hadxr
                                </a>
                            </p>
                        </div>
                        <div className="contact-row-contact">
                            <img src={bootdevLogo} alt="BootDev" className="contact-icon-contact" />
                            <p className="intro2-contact">
                                Bootdev -{" "}
                                <a
                                className="contactLinks-contact"
                                href="https://www.boot.dev/u/hadxr"
                                target="_blank"
                                rel="noreferrer">
                                www.boot.dev/u/hadxr
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
        </div>
    );
}