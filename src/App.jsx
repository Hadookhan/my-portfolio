import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChessGame from './projects/ChessGame';
import BlobGame from './projects/BlobGame';
import FileOrganiser from './projects/FileOrganiser';
import PortoflioSite from './projects/PorfolioSite';

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects/ChessGame" element={<ChessGame />} />
          <Route path="/Projects/BlobGame" element={<BlobGame />} />
          <Route path="/Projects/FileOrganiser" element={<FileOrganiser />} />
          <Route path="/Projects/PortfolioSite" element={<PortoflioSite />} />
        </Routes>
    <Footer></Footer>
    </>

  );
}

export default App;