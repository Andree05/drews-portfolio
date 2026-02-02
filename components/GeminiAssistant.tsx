
import React, { useState, useRef, useEffect } from 'react';
import { generateCreativeInsight } from '../services/gemini';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "I am Drew. Drew's Art creative frequency is currently high. How can I help you visualize your next breakthrough?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await generateCreativeInsight(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Pulse Trigger */}
      <div className={`absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20 ${isOpen ? 'hidden' : ''}`}></div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl relative z-10 ${isOpen ? 'bg-white text-black rotate-45 scale-90' : 'bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 text-white'}`}
      >
        <span className="text-3xl font-light">{isOpen ? '+' : '✧'}</span>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] md:w-[450px] h-[600px] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-3xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500 border-pink-500/20">
          <div className="p-8 border-b border-white/5 bg-gradient-to-br from-pink-900/40 via-purple-900/20 to-transparent">
            <h3 className="font-artistic font-bold text-2xl flex items-center gap-3">
              <span className="text-pink-500 animate-pulse">✧</span> Drew
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Synchronizing creative aura</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-black rounded-tr-none font-semibold' : 'bg-white/5 rounded-tl-none border border-white/10 text-white/80'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none animate-pulse flex gap-2 border border-white/5">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-white/5 border-t border-white/5">
            <div className="relative group">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Drew for a spark..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-sm focus:outline-none focus:border-pink-500 transition-all placeholder:text-white/20 group-hover:bg-white/10"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-pink-500 rounded-full hover:scale-110 disabled:opacity-50 transition-all shadow-lg shadow-pink-500/20"
              >
                <span className="text-xl">↑</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
