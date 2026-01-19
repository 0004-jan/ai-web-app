
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 text-xs font-bold text-cyan-400 mb-8 tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Powered by Gemini 3 Pro
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 max-w-4xl leading-[1.1]">
          The Future of Learning <br />
          <span className="icy-text">Personalized for You.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Master any subject with Aura, your 24/7 intelligent AI tutor. Tailored explanations, real-time feedback, and interactive roadmaps designed just for your brain.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg shadow-xl hover:bg-slate-100 transition-all active:scale-95">
            Start Learning Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all active:scale-95">
            Watch Demo
          </button>
        </div>

        <div className="relative w-full max-w-5xl">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] -z-10 rounded-full"></div>
          <img 
            src="https://picsum.photos/id/48/1200/600" 
            alt="AI Interface Preview" 
            className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl glass p-2 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          
          <div className="absolute -bottom-6 -right-6 md:-right-12 glass p-4 rounded-2xl border border-white/20 hidden lg:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">Concept Mastery</p>
                <p className="text-lg font-bold">98.4% Confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
