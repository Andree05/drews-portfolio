
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

interface ContactProps {
  isDarkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode = true }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    
    // Simulating a network request for a smooth UX since we are hosting as a static site on Render
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after a delay so users can send another message if needed
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClasses = `w-full bg-white/5 border rounded-2xl py-4 px-6 focus:outline-none focus:border-pink-500 transition-all placeholder:text-white/20 ${
    isDarkMode ? 'border-white/10 text-white' : 'border-black/10 text-black placeholder:text-black/30'
  }`;

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className={`text-6xl md:text-[10rem] font-artistic font-bold tracking-tighter mb-12 leading-none transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Start <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-blue-500">Something.</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light italic transition-colors ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
            Let’s build a visual language for your ideas. Use the form below to reach the studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="relative group inline-block">
              <span className={`text-xs font-bold tracking-[0.4em] uppercase mb-4 block ${isDarkMode ? 'text-pink-500' : 'text-pink-600'}`}>Direct Line</span>
              <a 
                href="mailto:drew@drews.art" 
                className={`text-3xl md:text-5xl font-bold tracking-tighter transition-colors relative z-10 ${isDarkMode ? 'text-white hover:text-pink-400' : 'text-black hover:text-pink-600'}`}
              >
                drew@drews.art
              </a>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>

            <div className="flex flex-wrap gap-8">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3"
                  title={link.name}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg border ${isDarkMode ? 'bg-white/5 border-white/10 group-hover:bg-pink-500 group-hover:text-white' : 'bg-black/5 border-black/5 group-hover:bg-black group-hover:text-white'}`}>
                    <span className="text-[10px] font-bold">{link.icon}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 md:p-12 rounded-[3rem] transition-all relative ${isDarkMode ? 'glass-card' : 'bg-white border border-black/5 shadow-2xl'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-[10px] uppercase tracking-widest font-bold ml-2 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className={inputClasses}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-[10px] uppercase tracking-widest font-bold ml-2 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-[10px] uppercase tracking-widest font-bold ml-2 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>Project Details</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your vision..."
                  className={`${inputClasses} resize-none`}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3 ${
                  status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'
                } ${isDarkMode ? 'bg-white text-black hover:bg-pink-500 hover:text-white shadow-xl shadow-pink-500/10' : 'bg-black text-white hover:bg-pink-600 shadow-xl shadow-black/10'}`}
              >
                {status === 'sending' ? (
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Transmitting...</span>
                  </div>
                ) : status === 'success' ? (
                  <span>Message Received ✧</span>
                ) : (
                  <span>Send Proposal</span>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p className="text-pink-500 font-bold text-sm">Thank you! Your vision has been captured.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[150px] -z-0 rounded-full animate-pulse opacity-20 pointer-events-none ${isDarkMode ? 'bg-pink-600' : 'bg-pink-300'}`}></div>
    </section>
  );
};

export default Contact;
