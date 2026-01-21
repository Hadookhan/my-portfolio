import { Link } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h2 className="footer-name">Hadi Khan</h2>
          <p className="footer-tagline">
            Computer Science · AI · Research-oriented Engineering
          </p>
        </div>

        <nav className="footer-nav">
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/education" className="footer-link">Education</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/about/my-cv" className="footer-link">CV</Link>
        </nav>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Hadi Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
