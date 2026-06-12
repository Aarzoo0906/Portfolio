// Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  const footerLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Aarzoo0906' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aarzoosingh0906/' },
    { icon: Mail, label: 'Email', href: 'mailto:aarzoosingh0906@gmail.com' }
  ];

  return (
    <footer className={`border-t transition-all duration-300 py-12 px-4 ${
      isDark
        ? 'border-blue-900/50 bg-gray-900'
        : 'border-blue-200 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="group">
            <h3 className={`text-lg font-bold mb-4 group-hover:scale-105 transition-transform origin-left ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            }`}>
              About
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Full-stack web developer passionate about creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className={`text-lg font-bold mb-4 group-hover:scale-105 transition-transform origin-left ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className={`transition-all duration-300 text-sm hover:translate-x-1 inline-block bg-none border-none cursor-pointer p-0 ${
                      isDark
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}>
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="group">
            <h3 className={`text-lg font-bold mb-4 group-hover:scale-105 transition-transform origin-left ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'
            }`}>
              Connect
            </h3>
            <div className="flex gap-4">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? 'bg-gray-800 border border-blue-900/50 text-blue-400 hover:bg-gray-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/50'
                        : 'bg-blue-100 border border-blue-300 text-blue-600 hover:bg-blue-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t transition-colors duration-300 pt-8 mt-8 ${
          isDark ? 'border-blue-900/50' : 'border-blue-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} Aarzoo Singh. All rights reserved.
            </p>
            <p className={`text-sm flex items-center gap-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Designed & Built with using React & Tailwind CSS
            </p>
            <div className={`flex gap-4 text-xs transition-colors duration-300 ${
              isDark
                ? 'text-gray-500 hover:text-blue-400'
                : 'text-gray-500 hover:text-blue-600'
            }`}>
              <a href="#" className={`transition-colors duration-300 ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Privacy</a>
              <span>•</span>
              <a href="#" className={`transition-colors duration-300 ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>Terms</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 font-semibold group ${
              isDark
                ? 'text-gray-400 hover:text-blue-400'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}