import { Link } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {

    return (
        <footer className='footer'>
            <h2>© 2025 Hadi Khan</h2>
            <Link to="/projects" className='navItem'>PROJECTS</Link>
            <Link to="/about" className='navItem'>ABOUT</Link>
            <Link to="/contact" className='navItem'>CONTACT</Link>
            
        </footer>
    );
}