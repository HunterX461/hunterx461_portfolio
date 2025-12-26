import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SecurityTimeline from './components/SecurityTimeline';
import Projects from './components/Projects';
import Ethics from './components/Ethics';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <SecurityTimeline />
      <Projects />
      <Ethics />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
