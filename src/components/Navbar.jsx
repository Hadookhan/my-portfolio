import { useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { motion } from "framer-motion";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95 }}
        >
        <Link to="/" className="logo">Hadi Khan</Link>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
        className={`nav-links ${isOpen ? 'active' : ''}`}
        >
          <Link to="/projects">PROJECTS</Link>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
        className={`nav-links ${isOpen ? 'active' : ''}`}
        >
          <Link to="/about">ABOUT</Link>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95 }}
        className={`nav-links ${isOpen ? 'active' : ''}`}
        >
          <Link to="/contact">CONTACT</Link>
        </motion.div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
}
