import '../css/education.css';
import { motion } from "framer-motion";

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const education = [
    {
      school: "Manchester Metropolitan University (MMU)",
      period: "BSc (Hons) Computer Science — 2023-Present",
      highlight: "Current: Year 2 (Predicted: High First)",
      modules: [
        {
          name: "Algorithms & Data Structures",
          grade: "Predicted 86%",
          desc: "Arrays, stacks, queues, linked lists, BSTs, unit testing, graph theory, C#, Visual Studio 2022.",
        },
        {
          name: "Computer Networks",
          grade: "Predicted 89%",
          desc: "OSI & TCP/IP models, Cisco Packet Tracer, CIDR/subnetting, RIP, VLANs, DHCP, UDP/TCP, SSH, troubleshooting.",
        },
        {
          name: "Industry and Community Engagement",
          grade: "Predicted 83%",
          desc: "CS engagement across course-in-context, legal & ethical, employability, social & professional, and sustainability themes.",
        },
      ],
    },
    {
      school: "Holy Cross College",
      period: "College — 2021-2023",
      highlight: "A-Levels / Level 3",
      modules: [
        {
          name: "Computer Science",
          grade: "D",
          desc: "Programming fundamentals, computational thinking, and foundational systems concepts.",
        },
        {
          name: "Graphic Design",
          grade: "B",
          desc: "Photoshop, photography basics, design principles, and creative workflows.",
        },
        {
          name: "Information Technology (Level 3 BTEC)",
          grade: "Distinction",
          desc: "Databases, social media, and front-end development fundamentals.",
        },
      ],
    },
  ];

  const extracurricular = [
    {
      provider: "Harvard University (CS50 / edX)",
      title: "CS50's Introduction to Artificial Intelligence with Python",
      status: "In Progress (Verified Certificate Track)",
      desc: "Foundational AI: search, optimisation, probabilistic reasoning, and learning algorithms, with an emphasis on implementation and reasoning.",
      link: {
        label: "Course",
        url: "https://cs50.harvard.edu/ai/",
      },
      badge: "ACE credit-recommended",
    },
    {
      provider: "Boot.dev",
      title: "Backend Development Track",
      status: "Completed (13 courses)",
      desc: "Python (OOP/FP), Linux, Git, Docker, DSA, Go, HTTP clients, and guided projects applying the theory end-to-end.",
      link: {
        label: "Boot.dev profile",
        url: "https://www.boot.dev/u/hadxr",
      },
      badge: "Hands-on, project-driven",
    },
    {
      provider: "NeetCode",
      title: "Algorithms & Data Structures",
      status: "Ongoing",
      desc: "LeetCode-style practice with DSA theory, system design, and SQL to strengthen problem-solving and time/space optimisation.",
      link: {
        label: "LEETCode profile",
        url: "https://leetcode.com/u/Hadxr/",
      },
      badge: "Interview",
    },
    {
      provider: "MIT OpenCourseWare",
      title: "Independent Mathematical Study (MIT OCW)",
      status: "Ongoing",
      desc: "Study of MIT OCW materials including 18.01 (Single Variable Calculus), 18.02 (Multivariable Calculus), and selected linear algebra and optimisation topics relevant to machine learning.",
      link: {
        label: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu",
      },
      badge: "Independent study",
    }
  ];

  return (
    <div className="education-page">
      <div className="page-content education-content">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="education-intro"
        >
          <h2 className="education-heading">Academic Timeline</h2>
          <p className="education-subheading">
            A quick overview of my education history, including key modules and grades.
          </p>
        </motion.div>

        <div className="education-list">
          {education.map((item) => (
            <motion.div
              key={item.school}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "tween" }}
              className="education-card"
            >
              <details className="education-dropdown">
                <summary className="education-summary">
                  <div className="education-summary-left">
                    <p className="education-school">{item.school}</p>
                    <p className="education-period">{item.period}</p>
                  </div>

                  <div className="education-summary-right">
                    <span className="education-badge">{item.highlight}</span>
                    <span className="education-chevron" aria-hidden="true">▾</span>
                  </div>
                </summary>

                <div className="education-body">
                  <h3 className="education-section-title">Modules & Grades</h3>

                  <ul className="education-modules">
                    {item.modules.map((m) => (
                      <li key={m.name} className="education-module">
                        <div className="education-module-top">
                          <span className="education-module-name">{m.name}</span>
                          <span className="education-grade">{m.grade}</span>
                        </div>
                        <p className="education-module-desc">{m.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "tween" }}
          className="education-intro"
        >
          <h2 className="education-heading">Extracurricular Coursework</h2>
          <p className="education-subheading">
            Self-directed study alongside my degree to deepen my understanding of AI, algorithms, and systems.
          </p>
        </motion.div>

        <div className="education-list">
          {extracurricular.map((course) => (
            <motion.div
              key={course.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, type: "tween" }}
              className="education-card"
            >
              <div className="education-dropdown">
                <div className="education-body">
                  <div className="education-module-top">
                    <span className="education-module-name">{course.title}</span>
                    <span className="education-grade">{course.status}</span>
                  </div>

                  <p className="education-module-desc">
                    <b>{course.provider}</b> — {course.desc}
                  </p>

                  <p className="education-note">
                    <span className="education-note-badge">{course.badge}</span>
                    {" · "}
                    <a className="homeLinks" href={course.link.url} target="_blank" rel="noreferrer">
                      {course.link.label}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
