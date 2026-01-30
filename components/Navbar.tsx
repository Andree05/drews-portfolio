
import React from 'react';

interface NavbarProps { 
  scrolled: boolean; 
  isDarkMode: boolean; 
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, isDarkMode, toggleTheme }) => {
  const navItems = ['Work', 'About', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4 mt-4 px-4' : 'py-8 px-6'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-700 ${scrolled ? (isDarkMode ? 'glass bg-black/40 border-white/10' : 'glass bg-white/60 border-black/5') + ' px-10 py-4 rounded-full shadow-2xl' : ''}`}>
        <div className="group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="text-2xl font-artistic font-bold tracking-tight flex items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="text-pink-500">D</span>rew's
            <span className="px-2 py-1 bg-gradient-to-br from-pink-500 to-blue-600 rounded-lg text-[10px] font-sans uppercase tracking-[0.3em] ml-1 text-white">Art</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xs font-bold tracking-[0.3em] uppercase transition-all relative group ${isDarkMode ? 'text-white/60 hover:text-pink-400' : 'text-black/60 hover:text-pink-600'}`}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 transition-all group-hover:w-full" />
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 border overflow-hidden relative group ${isDarkMode ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-black/5 hover:bg-black/10'}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className={`text-xl transition-all duration-500 ${isDarkMode ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 absolute'}`}>🌙</div>
            <div className={`text-xl transition-all duration-500 ${!isDarkMode ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 absolute'}`}>☀️</div>
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 rounded-full shadow-xl ${isDarkMode ? 'bg-white text-black hover:bg-pink-500 hover:text-white shadow-pink-500/10' : 'bg-black text-white hover:bg-pink-600 shadow-black/10'}`}
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button className={`w-10 h-10 flex flex-col items-center justify-center gap-1 bg-white/5 rounded-xl border ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
            <div className="w-5 h-[2px] bg-pink-500" />
            <div className="w-5 h-[2px] bg-blue-500" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
