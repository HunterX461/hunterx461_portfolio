import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SecurityTimeline from './components/SecurityTimeline';
import Projects from './components/Projects';
import Ethics from './components/Ethics';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FeaturedArticles from './components/FeaturedArticles';
import OpenSourceProjects from './components/OpenSourceProjects';
import Footer from './components/Footer';

// New Components
import WriteupsSection from './components/WriteupsSection';
import LocalRoot from './components/LocalRoot';

function App() {
  return (
    <>
      <Router>
        <Routes>
          
          {/* Route 1: The Main Portfolio Homepage */}
          <Route path="/" element={
            <div className="min-h-screen noise-overlay">
              <Navigation />
              <Hero />
              <About />
              <Skills />
              <FeaturedArticles />
              <OpenSourceProjects />
              <SecurityTimeline />
              <Projects />
              
              {/* Writeups Section added here */}
              <WriteupsSection />
              
              <Ethics />
              <Certifications />
              <Contact />
              <Footer />
            </div>
          } />

          {/* Route 2: The Independent Writeup Pages */}
          <Route path="/writeups/localroot" element={<LocalRoot />} />
          
        </Routes>
      </Router>

      {/* Analytics Tracking Code */}
      <Analytics />
    </>
  );
}

export default App;
