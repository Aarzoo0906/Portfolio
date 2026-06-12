// ProjectsSection.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Briefcase, Star } from 'lucide-react';
import logo1 from '../assets/logo1.png';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Emotion Detector',
      description: 'Full-stack e-commerce solution with payment integration, product management, and admin dashboard',
      longDescription: 'A comprehensive e-commerce platform built with React and Node.js featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      link: '#',
      github: '#',
      rating: 5,
      status: 'Completed',
      image: 'https://cms.interestingengineering.com/wp-content/uploads/2024/02/iStock-925574662.jpg'
    },
    {
      id: 2,
      title: 'Weather app',
      description: 'Collaborative task manager with real-time updates, team features, and productivity analytics',
      longDescription: 'A real-time collaborative task management application with Firebase integration, allowing teams to manage projects efficiently with instant updates and rich notifications.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux', 'Socket.io'],
      link: 'https://gleaming-pastelito-d61a7a.netlify.app/',
      github: 'https://github.com/Aarzoo0906/API-weather-app.git',
      rating: 4.8,
      status: 'Completed',
      image: 'https://design4users.com/wp-content/uploads/2017/08/cloudy-weather-app-ui.jpg'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'Modern, responsive portfolio showcasing skills, projects, and achievements with smooth interactions',
      longDescription: 'A modern, fully-responsive portfolio website featuring smooth animations, interactive components, and optimized for all devices with excellent SEO.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      link: '#',
      github: 'https://github.com/Aarzoo0906/iChat.git',
      rating: 4.9,
      status: 'Completed',
      image: 'https://codimite.ai/wp-content/uploads/Blog-cover-69.png'
    },
    {
      id: 4,
      title: 'RSPL Project',
      description: 'Township management system for organizing resident services, admin operations, notices, and maintenance workflows',
      longDescription: 'RSPL is a township management system designed to streamline community operations with resident records, service requests, maintenance tracking, announcements, and admin-friendly management features.',
      tech: ['React', 'JavaScript', ' Tailwind CSS', 'Township Management', 'Admin Dashboard'],
      link: '#',
      github: 'https://github.com/Aarzoo0906/RSPL_Clone.git',
      rating: 4.8,
      status: 'Completed',
      image: '/Projects/rspl-township-management.svg'
    },
    {
      id: 5,
      title: 'Hackathon Project',
      description: 'made a ice-cream website of a famous brand i.e.,Kwality walls withaddon interactive features,images and more responsiveness',
      longDescription: 'kwality walls is a famous ice-cream brand. I made a website for this brand with interactive features,images and more responsiveness powered by OpenWeather API.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://regal-salmiakki-015f3b.netlify.app/',
      github: 'https://github.com/Aarzoo0906/KwalitywallshackathonT28.git',
      rating: 4.7,
      status: 'Completed',
      image: 'https://5.imimg.com/data5/GLADMIN/Default/2022/7/NK/RN/ZY/92368/kwality-walls-ice-cream-500x500.jpeg'
    },
    {
      id: 6,
      title: 'Hirelytics',
      description: 'AI-powered interview platform with gamification, providing automated interviews, feedback, resume ATS checker, study materials, and voice modulation coaching',
      longDescription: 'Hirelytics is a comprehensive AI-based interviewer platform built with MERN stack and Google Gemini API. Features include: real-time interview conduction with AI-generated questions, instant performance feedback, resume ATS compatibility checker, resume builder, personalized study materials for different topics, and voice modulation analysis to enhance communication skills and boost confidence.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Gemini API', 'Tailwind CSS', 'JWT Auth'],
      link: 'https://hirelytics-frontend-01.onrender.com',
      github: 'https://github.com/Aarzoo0906/HIRELYTICS.git',
      rating: 4.9,
      status: 'Completed',
      image: logo1
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 px-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated selection of projects that showcase my expertise in full-stack development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/30 group"
            >
              {/* Project Image/Header */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all duration-300">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <Briefcase size={80} className="text-white/30" />
                )}
                
                {/* Image Overlay for better visibility */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-green-500/80 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm">
                  {project.status}
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(project.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                    />
                  ))}
                  <span className="text-xs text-gray-700 ml-1">{project.rating}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                {/* Description that changes on hover */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed min-h-[50px]">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-xs text-blue-700 font-medium hover:bg-blue-200 hover:border-blue-500 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 group/btn"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-400 rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 text-sm font-semibold text-blue-600 group/btn"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-300 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-8">
            Visit my GitHub profile to explore all my projects and contributions
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Github size={20} />
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
