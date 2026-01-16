import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (!menuRef.current) return;
      if (isOpen && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const mobileMenu = {
    hidden: { opacity: 0, y: -8, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -8, height: 0 },
  };

  // const getPageTitle = () => {
  //   const path = location.pathname;

  //   if (path === '/') return 'Home';
  //   if (path === '/projects') return 'Projects';
  //   if (path === '/about') return 'About';
  //   if (path === '/contact') return 'Contact';
  //   if (path === '/about/my-cv') return 'Curriculum Vitae';

  //   if (path.startsWith('/projects/blob-game')) return 'Project: Blob Game';
  //   if (path.startsWith('/projects/network-intelligence')) return 'Project: Network Intelligence';
  //   if (path.startsWith('/projects/file-organiser')) return 'Project: File Organiser';
  //   if (path.startsWith('/projects/chatbot-app')) return 'Project: Chatbot App';
  //   if (path.startsWith('/projects/maze-solver')) return 'Guided Project: Maze Solver';
  //   if (path.startsWith('/projects/chess-game')) return 'Project: Chess Game';
  //   if (path.startsWith('/projects/portfolio-site')) return 'Project: Portfolio Site';
  //   if (path.startsWith('/projects/roblox-game')) return 'Project: Roblox Game';

  //   return 'Hadi Khan';
  // };

  const linkClass = (path) => `nav-link ${location.pathname === path ? "active" : ""}`;

  return (
    <nav className="navbar">
      <div className="navbar-container" ref={menuRef}>

        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-mark">HK</span>
            <span className="logo-text">Hadi Khan</span>
          </Link>
        </div>

        {/* <div className="nav-center">
          <h1 className="title">{getPageTitle()}</h1>
        </div> */}

        <div className="nav-right">
          <div className="nav-desktop">
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/education" className="nav-link">Education</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about/my-cv" className="nav-btn">CV</Link>
          </div>

          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-mobile"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <Link to="/education" className={linkClass("/education")}>Education</Link>
            <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
            <Link to="/about/my-cv" className="nav-btn mobile">CV</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
