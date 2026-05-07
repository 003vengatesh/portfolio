<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
<<<<<<< HEAD
=======
// import Blog from './pages/Blog';
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
<<<<<<< HEAD
=======
              {/* <Route path="/blog" element={<Blog />} /> */}
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
