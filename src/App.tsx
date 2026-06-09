import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

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

import WriteupsSection from './components/WriteupsSection';
import LocalRoot from './components/LocalRoot';

import CustomCursor from './components/fx/CustomCursor';
import AuroraBackground from './components/fx/AuroraBackground';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10 min-h-screen noise-overlay">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <FeaturedArticles />
        <OpenSourceProjects />
        <SecurityTimeline />
        <Projects />
        <WriteupsSection />
        <Ethics />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/writeups/localroot"
            element={
              <div className="relative min-h-screen overflow-x-hidden">
                <AuroraBackground intensity={0.7} />
                <div className="relative z-10">
                  <LocalRoot />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
