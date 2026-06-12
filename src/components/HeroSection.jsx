// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/Profile.jpeg';

export default function HeroSection() {
  const { isDark } = useTheme();

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 pt-10 pb-10 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-blue-900/30' : 'bg-blue-200/30'
        }`}></div>
        <div 
          className={`absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-cyan-900/40' : 'bg-cyan-300/40'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
        <div className={`absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-sky-900/20' : 'bg-sky-200/20'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Profile Picture, Heading, and Subtitle - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 mb-2 ">
          {/* Profile Avatar with Card (No Cropping Issue) */}
<div className="flex justify-center flex-shrink-0">
  <div
    className={`p-6 rounded-3xl transition-all duration-300 ${
      isDark
        ? "bg-gray-800/60 border border-blue-900/40"
        : "bg-white/70 border border-blue-200/40"
    }`}
  >
    <div className="relative group">
      {/* Image Container */}
      <div
        className={`relative max-w-[300px] lg:max-w-[320px] w-full
        flex items-center justify-center overflow-hidden rounded-2xl
        transition-all duration-300 group-hover:scale-105 cursor-pointer
        ${
          isDark
            ? "shadow-lg shadow-blue-900/40 ring-2 ring-blue-800 group-hover:ring-blue-500"
            : "shadow-lg shadow-blue-400/30 ring-2 ring-blue-300 group-hover:ring-blue-500"
        }`}
      >
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Aarzoo Singh"
          className="w-full h-auto object-contain rounded-2xl transition-all duration-300 group-hover:brightness-110"
        />

        {/* Soft hover overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-400/10"
          }`}
        />
      </div>
    </div>
  </div>
</div>



          {/* Heading and Subtitle */}
          <div className="text-center lg:text-left flex-1 lg:ml-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className={`bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse ${
                isDark ? 'from-blue-300 via-cyan-300 to-blue-300' : ''
              }`}>
                Aarzoo Singh
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl lg:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Stack{' '}
              <span className={`font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ${
                isDark ? 'from-blue-300 to-cyan-300' : ''
              }`}>
                Web Developer
              </span>{' '}
              & Designer
            </p>
          </div>
        </div>

        {/* Marquee Banner */}
        <div className={`mb-4 mt-0 overflow-hidden border rounded-lg py-1 backdrop-blur-sm transition-colors duration-300 ${
          isDark
            ? 'bg-gray-800/50 border-blue-900/50'
            : 'bg-blue-50 border-blue-300/50'
        }`}>
          <div className="animate-marquee whitespace-nowrap ">
            <span className={`font-semibold text-lg mr-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              ✨ Building elegant digital solutions ✨ Full Stack Development ✨ UI/UX Design ✨ Always Learning ✨
            </span>
            <span className={`font-semibold text-lg mr-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              ✨ Building elegant digital solutions ✨ Full Stack Development ✨ UI/UX Design ✨ Always Learning ✨
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className={`text-lg mb-10 max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm a passionate developer creating beautiful, responsive web applications with modern technologies. Let's build something amazing together!
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center mb-12 flex-wrap">
            <Link
              to="/projects"
              className={`px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group ${
                isDark
                  ? 'hover:shadow-blue-900/50'
                  : 'hover:shadow-blue-500/50'
              }`}
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400'
                  : 'border-blue-400 text-blue-600 hover:bg-blue-400/10 hover:border-blue-500'
              }`}
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Aarzoo0906"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 border border-blue-900/50 text-blue-400 hover:bg-gray-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50'
                  : 'bg-blue-100 border border-blue-300 text-blue-600 hover:bg-blue-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
              }`}
              title="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aarzoosingh0906/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 border border-blue-900/50 text-blue-400 hover:bg-gray-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50'
                  : 'bg-blue-100 border border-blue-300 text-blue-600 hover:bg-blue-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
              }`}
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:aarzoosingh0906@gmail.com"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 border border-blue-900/50 text-blue-400 hover:bg-gray-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50'
                  : 'bg-blue-100 border border-blue-300 text-blue-600 hover:bg-blue-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
              }`}
              title="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}