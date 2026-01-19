
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass backdrop-blur-xl' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 icy-gradient rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold font-outfit tracking-tight">Aura<span className="icy-text">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#demo" className="hover:text-cyan-400 transition-colors">How it Works</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold hover:text-cyan-400 transition-colors px-4 py-2">
            Login
          </button>
          <button className="icy-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all active:scale-95">
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
