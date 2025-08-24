// components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Hadi Khan</Link>
        <div className="nav-links">
          <Link to="/projects" className='navItem'>PROJECTS</Link>
          <Link to="/about" className='navItem'>ABOUT</Link>
          <Link to="/contact" className='navItem'>CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
