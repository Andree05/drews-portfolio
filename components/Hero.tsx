
import React, { useEffect, useState, useRef } from 'react';

interface HeroProps {
  isDarkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode = true }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 30;
        const y = (e.clientY - top - height / 2) / 30;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      <div className="relative z-10 text-center max-w-6xl">
        <div className={`transition-all duration-[1200ms] transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500"></div>
            <span className={`text-[10px] tracking-[0.6em] uppercase font-bold bg-pink-500/10 px-4 py-1 rounded-full border border-pink-500/20 ${isDarkMode ? 'text-pink-400/80' : 'text-pink-600'}`}>Digital Artisan</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
          
          <h1 
            className={`text-7xl md:text-[12rem] font-artistic font-bold leading-[0.85] mb-12 select-none tracking-tighter transition-all ${isDarkMode ? 'drop-shadow-2xl' : 'drop-shadow-sm'}`}
            style={{ 
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
              transition: 'transform 0.15s ease-out'
            }}
          >
            Dream <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 animate-gradient-x">In Color.</span>
          </h1>
        </div>

        <div className={`flex flex-col items-center transition-all duration-[1200ms] delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className={`text-xl md:text-3xl max-w-2xl leading-relaxed font-light mb-16 italic transition-colors ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            I'm <span className={`font-bold not-italic underline decoration-pink-500 underline-offset-8 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>Andrew</span>, turning static pixels into <span className="text-blue-500">kinetic masterpieces</span> and brand stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <button 
              onClick={() => scrollToSection('work')}
              className="px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-sm rounded-full hover:scale-110 transition-all shadow-[0_0_40px_rgba(236,72,153,0.4)] group relative overflow-hidden active:scale-95"
            >
              <span className="relative z-10 uppercase tracking-[0.2em]">See the Magic</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`px-12 py-5 border backdrop-blur-md font-bold text-sm rounded-full hover:bg-white/10 transition-all uppercase tracking-[0.2em] shadow-xl ${isDarkMode ? 'bg-white/5 border-white/20 hover:border-blue-400 text-white' : 'bg-black/5 border-black/10 hover:border-blue-600 text-black'}`}
            >
              My Story
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30">
        <span className={`text-[10px] tracking-[0.5em] uppercase font-bold transition-colors ${isDarkMode ? 'text-white/50' : 'text-black/50'}`}>Explore Below</span>
        <div className={`w-px h-20 bg-gradient-to-b animate-pulse ${isDarkMode ? 'from-white to-transparent' : 'from-black to-transparent'}`} />
      </div>
    </section>
  );
};

export default Hero;
