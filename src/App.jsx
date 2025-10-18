import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // scroll-to-top button logic
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setShowTop(true);
      else setShowTop(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* === Star Background Layers === */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* === Main Website Content === */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main className="container py-5">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* === Back to Top Button === */}
      <button id="toTopBtn" className={showTop ? 'show' : ''} onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
}

export default App;
