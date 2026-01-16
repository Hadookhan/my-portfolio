import '../css/education.css';
import { motion } from "framer-motion";

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  // Update grades/modules whenever you want — this is the only place you edit.
  const education = [
    {
      school: "Manchester Metropolitan University (MMU)",
      period: "BSc (Hons) Computer Science — 2023-Present",
      highlight: "Current: Year 2 (Predicted: High First)",
      modules: [
        {
          name: "Algorithms & Data Structures",
          grade: "Predicting 86%",
          desc: "Arrays, Stacks, Queues, Linked Lists, BS-Tress, Unit Tests, Graph Theory, C#, Visual Studio 2022.",
        },
        {
          name: "Computer Networks",
          grade: "Predicting 89%",
          desc: "OSI Model, TCP/IP Model, Cisco Packet Tracer, CIDR IP, RIP, VLANs, DHCP, UPD/TCP, SSH, Troubleshooting.",
        },
        {
          name: "Industry and Community Engagement",
          grade: "Predicting 83%",
          desc: "Attending and reflecting on Computer Science activities surrounding 5 areas: Course-in-context, Legal & Ethical, Employability, Social & Professional, Sustainability.",
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
          desc: "Photoshop, little photography, design patterns, creativity.",
        },
        {
          name: "Information Technology (Level 3 BTEC)",
          grade: "Disctinction (D)",
          desc: "Databases, Social media, Front-end developing.",
        },
      ],
    },
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
      </div>
    </div>
  );
}
