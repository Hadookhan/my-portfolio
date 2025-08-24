import { useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Hadi Khan</Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/projects" className='navItem'>PROJECTS</Link>
          <Link to="/about" className='navItem'>ABOUT</Link>
          <Link to="/contact" className='navItem'>CONTACT</Link>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
}
