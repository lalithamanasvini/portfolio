import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="footer">
        <p>© 2026 Lalitha Manasvini | Built with React & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;