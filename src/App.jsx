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
import PortoflioSite from './projects/PortfolioSite';

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/chessGame" element={<ChessGame />} />
          <Route path="/projects/blobGame" element={<BlobGame />} />
          <Route path="/projects/fileOrganiser" element={<FileOrganiser />} />
          <Route path="/projects/portfolioSite" element={<PortoflioSite />} />
        </Routes>
    <Footer></Footer>
    </>

  );
}

export default App;