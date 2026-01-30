
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import GeminiAssistant from '../components/GeminiAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-700 relative overflow-hidden ${isDarkMode ? 'bg-[#05010d] text-white selection:bg-pink-500 selection:text-white' : 'bg-[#f8f9fa] text-[#1a1a1a] selection:bg-pink-200 selection:text-black'}`}>
      
      {/* Chromatic Mesh Background */}
      <div className={`fixed inset-0 -z-10 overflow-hidden transition-opacity duration-1000 ${isDarkMode ? 'opacity-40' : 'opacity-20'}`}>
        <div className="mesh-bg absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-600 rounded-full animate-blob mix-blend-multiply" />
        <div className="mesh-bg absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="mesh-bg absolute bottom-[-10%] left-[10%] w-[65%] h-[65%] bg-purple-600 rounded-full animate-blob animation-delay-4000 mix-blend-multiply" />
        <div className="mesh-bg absolute bottom-[10%] right-[5%] w-[45%] h-[45%] bg-orange-600 rounded-full animate-blob animation-delay-2000 mix-blend-multiply" />
      </div>

      <Navbar scrolled={scrolled} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        
        <About isDarkMode={isDarkMode} />

        <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
            <div className="relative">
              <span className={`absolute -top-10 left-0 text-[80px] font-artistic font-bold opacity-5 select-none pointer-events-none transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>PROJECTS</span>
              <h2 className="text-5xl md:text-8xl font-artistic font-bold mb-4 tracking-tight leading-none">
                Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Vault</span>
              </h2>
              <p className={`max-w-md text-lg transition-colors ${isDarkMode ? 'text-blue-200/60' : 'text-gray-600'}`}>A curated showcase of aesthetic experimentation and digital craft.</p>
            </div>
          </div>
          
          <ProjectGrid isDarkMode={isDarkMode} />
        </section>

        <Reviews isDarkMode={isDarkMode} />
        
        <Contact isDarkMode={isDarkMode} />
      </main>

      <footer className={`py-12 border-t border-white/5 text-center text-xs tracking-[0.2em] uppercase backdrop-blur-lg transition-colors ${isDarkMode ? 'bg-black/20 text-white/30' : 'bg-white/40 text-black/40'}`}>
        <p>&copy; {new Date().getFullYear()} Drew's Art • Creative Studio • Made with Magic</p>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;
