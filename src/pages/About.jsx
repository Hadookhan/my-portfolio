import '../css/default.css';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function About() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <h1 className="title">About Me</h1>
                <div className="page-content">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='about-me-intro'
                    >
                        <h2 className="introHead">About me!</h2>
                        <p className='intro3'>Hey, I'm Hadi! A second year student @ The Manchester Metropolitan University.
                                            I am a passionate Computer Scientist with a love for AI. I enjoy networking with 
                                            people and expanding my knowledge to its fullest potential!
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='about-me-story'
                    >
                        <h2 className='intro2'>Who am I?</h2>
                        <p className='aboutme1'>
                            Hey! I'm Hadi 👋 
                            An undergraduate in Computer Science, with a great passion for Machine 
                            Learning, Deep Learning, and Mathematical proof.
                            Compassionate for the people around me, I love engaging in group activities,
                            especially ones bound to my interests!☺️
                        </p>

                        <h2 className='intro2'>Short summary</h2>
                            <p className='aboutme1'>
                                To put it straight...
                                I'm just a guy immersed in the beautiful creation of modern technology,
                                pursuing a dream to revolutionise new discoveries for humanity.

                                For a more brief summary: 
                                I'm just a guy.
                            </p>
                        <h2 className='intro2'>My dream</h2>
                            <p className='aboutme1'>
                                
                                <b>Admitting into MIT (My dream University)</b> 

                                For the longest time I have invisioned myself studying my Masters in MIT.
                                I plan to study a EECS Master of Science (SM), where I can carry out research
                                in AI, specifically within Deep Learning. 
                            
                                I always think how young AI is in the scene of technology, and how much there
                                is to explore, which is what motivates me to stay at the forefront.
                            </p>
                        <h2 className='intro2'>My purpose</h2>
                            <p className='aboutme1'>
                                
                                <b>Research</b> 
                                
                                I love knowing how. It's always been curious to me how AI models learn (backpropagation),
                                and how the math behind it works (I'm still learning). Having the full proof of an area
                                uncovered is what interests me the most, which is why I want to pursue research to understand
                                what more there is to prove.
                            </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='about-me-hobbies'
                    >
                        <h2 className="head2">Hobbies/Interests</h2>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Chess</p>
                            </li>
                            <li>
                                <p className='intro3'>Languages</p>
                            </li>
                            <li>
                                <p className='intro3'>Calisthenics/Gym</p>
                            </li>
                            <li>
                                <p className='intro3'>Technology/Hardware</p>
                            </li>
                            <li>
                                <p className='intro3'>Programming/AI</p>
                            </li>
                            <li>
                                <p className='intro3'>Music</p>
                            </li>
                            <li>
                                <p className='intro3'>Math</p>
                            </li>
                            <li>
                                <p className='intro3'>Athletics/Sport</p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='about-me-certificates'
                    >
                        <h2 className="head2">Certificates/Licences</h2>
                        <ul className='intro3'>
                            <li>
                                <p className='intro3'>Full UK Driving License</p>
                            </li>
                            <li>
                                <p className='intro3'>Certified First Aid License (2023)</p>
                            </li>
                            <li>
                                <p className='intro3'>
                                    <a className="homeLinks" href='https://api.boot.dev/v1/users/public/39da1ec4-2b32-496e-830a-c99ecb6b38f7/thumbnail'>BootDev Profile Card</a>
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "tween" }}
                        className='about-me-cv'
                    >
                        <h2 className="head2">Click <Link to="/about/my-cv" className="homeLinks">here</Link> to view a copy of my CV</h2>
                    </motion.div>
                </div>
        </div>
    );
}