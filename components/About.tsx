
import React, { useEffect, useState } from 'react';


interface AboutProps {
  isDarkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Creative Image Frame */}
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
            
            <div className={`relative z-10 rounded-[3rem] p-4 p-8 overflow-hidden transform group-hover:rotate-2 transition-transform duration-700 shadow-2xl ${isDarkMode ? 'glass' : 'bg-white border border-black/5'}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative">
                <img
                  src="/image/IMG_5993.jpeg"
                  alt="Andrew - Creative Artist"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none"></div>
                <div className={`absolute bottom-6 left-6 right-6 p-6 rounded-2xl border transition-colors ${isDarkMode ? 'glass border-white/20' : 'bg-white/90 border-black/10'}`}>
                  <p className={`text-xs tracking-widest uppercase font-bold ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>Founder / Lead Visionary</p>
                  <h4 className={`text-2xl font-artistic font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Drew</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-pink-500 text-sm font-bold tracking-[0.4em] uppercase">The Architect of Color</h3>
              <h2 className={`text-5xl md:text-7xl font-artistic font-bold leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Artistic Heart, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Mind.</span>
              </h2>
            </div>

            <div className={`p-10 rounded-[2.5rem] space-y-6 transition-all ${isDarkMode ? 'glass-card' : 'bg-white border border-black/5 shadow-xl'}`}>
              <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                Hello, I'm Drew! My journey began at the intersection of traditional painting and modern software. I believe that every digital experience should feel like a living work of art.
              </p>
              <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors ${isDarkMode ? 'text-white/70' : 'text-gray-700'}`}>
                I don't just design interfaces; I craft emotional landscapes. By blending high-performance code with intuitive motion design, I help brands leave an indelible mark on their audience.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/5 hover:bg-black/10'}`}>
                <span className="text-pink-500">✦</span>
                <span className={`text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Concept Artist</span>
              </div>
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/5 hover:bg-black/10'}`}>
                <span className="text-blue-500">✦</span>
                <span className={`text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>UI Technologist</span>
              </div>
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/5 hover:bg-black/10'}`}>
                <span className="text-purple-500">✦</span>
                <span className={`text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Motion Director</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
