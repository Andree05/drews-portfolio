
import React from 'react';
import { REVIEWS } from '../constants';

interface ReviewsProps {
  isDarkMode: boolean;
}

const Reviews: React.FC<ReviewsProps> = ({ isDarkMode }) => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-pink-500 text-sm font-bold tracking-[0.4em] uppercase mb-4">Voices of Vision</h3>
          <h2 className={`text-5xl md:text-7xl font-artistic font-bold leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
            What the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Industry Says</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className={`glass-card p-10 rounded-[3rem] relative group hover:-translate-y-2 transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/80 border-black/5 shadow-xl'}`}
            >
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                "
              </div>
              
              <p className={`text-lg md:text-xl leading-relaxed italic mb-10 transition-colors ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                {review.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-pink-500/20">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className={`font-bold text-lg leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>{review.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-pink-500 font-bold mt-1">{review.role}</p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-px w-0 group-hover:w-full bg-gradient-to-r from-pink-500/50 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
