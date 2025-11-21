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
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
            >
                <div className="page-content">
                    <h2 className="introHead">About me!</h2>
                    <p className='intro3'>Hey, I'm Hadi! A second year student @ The Manchester Metropolitan University.
                                        I am a passionate Computer Scientist with a love for AI. I enjoy networking with 
                                        people and expanding my knowledge to its fullest potential!
                    </p>

                    <p className='intro2'>Here is a short story about me and how I got to where I am now:</p>

                    <p className='aboutme1'>I was born and raised in Manchester, and have always 
                        been fascinated in computers from a young age. I have always had passion 
                        for programming but never had the determination, so I quit trying to learn 
                        many times. I was also never interested in theory and always wanted to see 
                        results, which really blindsighted me on how programming really was. This 
                        also effected me academically, which resulted in me achieving much lower 
                        grades than I was excpected. 
                        <br></br><br></br>
                        Nonetheless, I always tried to look at the bigger picture. By the time I was 
                        in University, I wanted to change my life, so I decided to find ways to increase 
                        my productivity. This is where I began my first project (<i><Link className="homeLinks" to='/projects/blob-game'>Blob Game</Link></i>).
                        From this, I built a lot of motivation, despite not knowing how terrible I
                        actually was at coding.
                        <br></br><br></br>
                        A few months later, I signed up to my first course (<i><a className="homeLinks" href='https://www.Boot.dev'>BootDev</a></i>). This is
                        where I really begun my programming journey. I was investing hours every day programming, 
                        and finally learning theory. Despite learning stuff that I found basic, I persisted 
                        and reinforced that knowledge, and soon enough I was learning topics I had never crossed 
                        before. It was by this time I decided to start my next project (<i><Link className="homeLinks" to='/projects/chess-game'>Chess</Link></i>).
                        <br></br><br></br>
                        Also, at this time I was learning algorithms, and didn't realise their importance 
                        until up til now. I found a site called <i><a className="homeLinks" href='https://www.Leetcode.com'>Leetcode</a></i> and it made me quickly 
                        realise that I needed desperate help. So, I began doing more research until I found 
                        a new course (<i><a className="homeLinks" href='https://www.Neetcode.io'>Neetcode.io</a></i>). From this, I elevated my algorithm 
                        knowledge and application twofold, and was now able to solve some <i><a className="homeLinks" href='https://www.Leetcode.com'>Leetcode</a></i> problems 
                        independantly.
                        <br></br><br></br>
                        I was rapidly gaining more and more interest for Computer Science, and then I found 
                        about AI. I suddenly grew more passion for ML (Machine Learning) as it involved Math 
                        alongside coding. At this time I invested into the <i>Hands-On Machine Learning</i> book
                        by <i>Aurélien Géron</i>. I learnt ML from the ground up using Python.
                        <br></br><br></br>
                        Present time; I have completed a few projects, and intend on completing many more. I 
                        never gave up my passion and persisted through. I always told myself to compare against 
                        myself to see true growth, and to never overthink. At this current point, I am loving 
                        what im doing and want to do much more, for myself and for the world.
                        <br></br><br></br>
                        I hope this short story comes as help for anyone reading it. I appreciate you for spending 
                        your time reading this section, and if you havent already, I hope you find your passion 
                        how I did mine.
                    </p>

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

                    <h2 className="head2">Click <Link to="/about/my-cv" className="source-link">here</Link> to view a copy of my CV</h2>
                    
                </div>
            </motion.div>
        </div>
    );
}