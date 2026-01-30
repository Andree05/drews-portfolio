
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number; isDarkMode: boolean }> = ({ project, index, isDarkMode }) => {
  const isLarge = index === 0 || index === 3;

  return (
    <div className={`group relative overflow-hidden rounded-[2.5rem] transition-all cursor-pointer ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} h-[450px] md:h-[550px] ${isDarkMode ? 'glass-card' : 'bg-white border border-black/5 shadow-xl hover:shadow-2xl'}`}>
      <div className="w-full h-full overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className={`absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${isDarkMode ? 'bg-black/40' : 'bg-pink-500/20'}`}></div>
      </div>
      
      {/* Refined Glass Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <div className="overflow-hidden mb-4">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all ${isDarkMode ? 'glass text-pink-300' : 'bg-pink-500 text-white'}`}>
              {project.category}
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className={`text-4xl md:text-6xl font-artistic font-bold mb-6 leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {project.title}
            </h3>
          </div>
          
          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
             <div className="flex items-center gap-4">
               <button className={`px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-xl ${isDarkMode ? 'bg-white text-black hover:bg-pink-500 hover:text-white' : 'bg-black text-white hover:bg-pink-600'}`}>
                 View Story
               </button>
             </div>
             <p className={`text-sm hidden md:block max-w-[250px] italic font-light line-clamp-2 transition-colors ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
               {project.description}
             </p>
          </div>
        </div>
      </div>

      {/* Floating Sparkle Corner */}
      <div className={`absolute top-10 right-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-1000 ${isDarkMode ? 'glass border-white/20 group-hover:bg-white group-hover:text-black' : 'bg-white/80 border border-black/5 text-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:rotate-[360deg]'}`}>
        <span className="text-2xl">✧</span>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = true }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default ProjectGrid;
