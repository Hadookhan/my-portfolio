import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
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
import RobloxGame from './projects/RobloxGame';
import FaceDetector from './projects/FaceDetector';
import MazeSolver from './projects/MazeSolver';
import Chatbot from './projects/ChatBot';
import NetworkIntelligence from './projects/NetworkIntelligence';
import CV from './extra/cv';

function App() {
  return (
    <>
    <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/chess-game" element={<ChessGame />} />
          <Route path="/projects/blob-game" element={<BlobGame />} />
          <Route path="/projects/file-organiser" element={<FileOrganiser />} />
          <Route path="/projects/portfolio-site" element={<PortoflioSite />} />
          <Route path="/projects/grow-a-family" element={<RobloxGame />} />
          <Route path="/projects/face-detector" element={<FaceDetector />} />
          <Route path="/projects/maze-solver" element={<MazeSolver />} />
          <Route path="/projects/chat-bot" element={<Chatbot />} />
          <Route path="/projects/network-intelligence" element={<NetworkIntelligence />} />
          <Route path="/about/my-cv" element={<CV />} />
        </Routes>
    <Footer></Footer>
    </>

  );
}

export default App;