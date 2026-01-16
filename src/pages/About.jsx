import '../css/about.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function About() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="page-content">
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
                    Hi, I'm Hadi — I am an undergraduate Computer Science student with a strong interest in Machine Learning,
                    Deep Learning, and the mathematical foundations that underpin modern AI systems.
                    I enjoy working in collaborative environments, discussing ideas, and tackling problems that
                    require both analytical thinking and creativity.
                </p>

                <h2 className='intro2'>Short summary</h2>
                <p className='aboutme1'>
                    In short, I am someone who is fascinated by how modern technology is built and how it can be
                    improved through rigorous thinking and research. I enjoy learning deeply, questioning assumptions,
                    and continuously refining my understanding of complex systems.
                </p>

                <h2 className='intro2'>My dream</h2>
                <p className='aboutme1'>
                    <b>Pursuing graduate study and research at MIT</b><br /><br />
                    My long-term goal is to pursue a Master's degree in Electrical Engineering and Computer Science (SM),
                    where I can engage in advanced research in artificial intelligence, particularly deep learning.
                    I am motivated by how young and rapidly evolving the field of AI is, and by the opportunity to
                    contribute to meaningful discoveries at the frontier of the discipline.
                </p>

                <h2 className='intro2'>Research Focus</h2>
                <p className='aboutme1'>
                    <b>Machine Learning and Deep Learning</b><br /><br />
                    I am particularly interested in understanding machine learning and deep learning models at a fundamental level.
                    I regularly engage with research papers and technical blogs to deepen my understanding, especially where underlying
                    assumptions may lack clarity or require stronger justification. This area of research strongly resonates with me,
                    and I intend to pursue it further at the doctoral level in the future.
                </p>


            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
                className="about-me-techstack"
                >
                <h2 className="head2">Tech Stack</h2>

                <div className="tech-grid">

                    <div className="tech-category">
                    <p className="intro3"><b>Languages</b></p>
                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    </div>
                    </div>

                    <div className="tech-category">
                    <p className="intro3"><b>Frontend</b></p>
                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                    </div>
                    </div>

                    <div className="tech-category">
                    <p className="intro3"><b>Backend & APIs</b></p>
                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="NGINX" />
                    </div>
                    </div>

                    <div className="tech-category">
                    <p className="intro3"><b>Databases</b></p>
                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                    </div>
                    </div>

                    <div className="tech-category">
                    <p className="intro3"><b>Data Science & ML</b></p>
                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/scikitlearn/scikitlearn-original.svg" alt="SciPy"/>
                    </div>
                    </div>

                    <div className="tech-category">
                    <p className="intro3"><b>Cloud & DevOps</b></p>
                    <div className="tech-icons">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    </div>
                    </div>

                </div>
                </motion.div>


            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, type: "tween" }}
                className='about-me-hobbies'
            >
                <h2 className="head2">Hobbies & Interests</h2>
                <ul className='intro3'>
                    <li><p className='intro3'>Chess</p></li>
                    <li><p className='intro3'>Languages</p></li>
                    <li><p className='intro3'>Calisthenics / Gym</p></li>
                    <li><p className='intro3'>Technology & Hardware</p></li>
                    <li><p className='intro3'>Programming & AI</p></li>
                    <li><p className='intro3'>Guitar</p></li>
                    <li><p className='intro3'>Mathematics</p></li>
                    <li><p className='intro3'>Athletics & Sport</p></li>
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
                <h2 className="head2">Certificates & Licences</h2>
                <ul className='intro3'>
                    <li><p className='intro3'>Full UK Driving Licence</p></li>
                    <li><p className='intro3'>Certified First Aid (2023)</p></li>
                    <li>
                        <p className='intro3'>
                            <a className="homeLinks"
                            href='https://api.boot.dev/v1/users/public/39da1ec4-2b32-496e-830a-c99ecb6b38f7/thumbnail'
                            target="_blank"
                            rel="noreferrer">
                                Boot.dev profile card
                            </a>
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
                <h2 className="head2">
                    Click <Link to="/about/my-cv" className="homeLinks">here</Link> to view my CV
                </h2>
            </motion.div>

        </div>
    );
}
