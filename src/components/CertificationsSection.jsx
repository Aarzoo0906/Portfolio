// CertificationsSection.jsx
import React, { useState, useEffect } from 'react';
import { Award, Calendar, CheckCircle, Eye, X } from 'lucide-react';

export default function CertificationsSection() {
  const [selectedCertImage, setSelectedCertImage] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCertImage) {
        setSelectedCertImage(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertImage]);

  const certifications = [
    {
      id: 11,
      title: 'Foundations of Prompt Engineering',
      issuer: 'AWS Training & Certification',
      date: 'June 01, 2026',
      description: 'Completion certificate covering prompt engineering foundations and practical techniques for working effectively with generative AI systems',
      icon: 'AWS',
      color: 'purple',
      certImage: '/Certificates/AWS_Foundations_of_Prompt_Engineering.jpeg'
    },
    {
      id: 12,
      title: 'Generative AI Essentials',
      issuer: 'TCS iON',
      date: '17 May 2026',
      description: 'Completed under the AI for All program by MPIT-CoE in partnership with TCS Foundation, focused on core generative AI concepts and applications',
      icon: 'AI',
      color: 'blue',
      certImage: '/Certificates/Generative_AI_Essentials.jpeg'
    },
    {
      id: 13,
      title: 'AI and Cybersecurity Awareness',
      issuer: 'TCS iON',
      date: '14 May 2026',
      description: 'Completed as part of the AI for All initiative, building awareness of AI concepts, cybersecurity fundamentals, and responsible digital practices',
      icon: 'CS',
      color: 'pink',
      certImage: '/Certificates/AI_and_Cybersecurity_Awareness.jpeg'
    },
    {
      id: 14,
      title: 'Claude 101',
      issuer: 'Anthropic',
      date: 'May 13, 2026',
      description: 'Certificate of completion for Claude 101, introducing effective use of Claude and foundational AI assistant workflows',
      icon: 'AI',
      color: 'emerald',
      certImage: '/Certificates/Claude_101.jpeg'
    },
    {
      id: 1,
      title: 'Java Programming Internship',
      issuer: 'System Tron',
      date: 'October 2025',
      description: 'Hands-on experience in Java development, focusing on building robust applications and understanding OOP principles',
      icon: '🎓',
      color: 'purple',
      certImage: '/Certificates/Java_programming.jpeg'  // Local path
    },
    {
      id: 2,
      title: 'PowerBI workshop',
      issuer: 'Office Master',
      date: 'November 2025',
      description: 'In-depth workshop on data visualization and business intelligence using PowerBI, covering dashboard creation and data analysis techniques',
      icon: '📊',
      color: 'blue',
      certImage: '/Certificates/PowerBI.jpeg'  // Local path
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'CODTECH',
      date: 'July 2025',
      description:'Comprehensive course covering frontend and backend development with modern frameworks',
      icon: '🎨',
      color: 'pink',
      certImage: '/Certificates/CodTech.jpeg'
    },
    {
      id: 4,
      title: 'AI Tools Workshop',
      issuer: 'Be10x',
      date: 'January 2024',
      description: 'Learning how to work with AI tools with hands-on experience',
      icon: '🤖',
      color: 'emerald',
      certImage: '/Certificates/be10x.jpeg'
    },
    {
      id: 5,
      title: 'Getting started with Enterprise grade AI',
      issuer: 'IBM',
      date: '5 August 2024',
      description: 'Introduction to enterprise AI concepts, tools, and implementation strategies for business solutions',
      icon: '⚛️',
      color: 'purple',
      certImage: '/Certificates/getting_started_with_enterprise_grade_AI.jpeg'
    },
    {
      id: 6,
      title: 'SkillBridge:Certificate in verbal and professional skills',
      issuer: 'CRACK-ED',
      date: 'July2024',
      description: 'Effective communication, presentation skills, and professional etiquette for workplace success',
      icon: '☁️',
      color: 'blue',
      certImage: '/Certificates/Crack-ed.jpeg'
    },
    {
      id: 7,
      title: 'TCS ION career edge-Young professional',
      issuer: 'TCS ION',
      date: '21 Dec 2003',
      description: 'Time management, teamwork, problem-solving, and leadership skills for young professionals',
      icon: '🗄️',
      color: 'pink',
      certImage: '/Certificates/TCS_ION.jpeg'
    },
    {
      id: 8,
      title: 'Emerging Technologies(AI & Cloud)',
      issuer: 'edunet Foundation',
      date: '5 August 2024',
      description: 'Fundamentals of AI and Cloud computing, exploring their applications and impact on various industries',
      icon: '🎯',
      color: 'emerald',
      certImage: '/Certificates/Edunet.jpeg'
    },
    {
      id: 9,
      title: 'Course on Computer Concepts',
      issuer: 'NIELIT',
      date: 'May,2022',
      description: 'computer fundamentals, software applications, and digital literacy skills for everyday use',
      icon: '💻',
      color: 'blue',
      certImage: '/Certificates/CCC.jpeg'
    },
    {
      id: 10,
      title: 'Full Stack Web Development with MERN Stack',
      issuer: 'TCE Educations',
      date: 'November 2025',
      description: 'Comprehensive course on building web applications using MongoDB, Express.js, React, and Node.js',
      icon: '⚛️',
      color: 'purple',
      certImage: '/Certificates/MERN_Stack.jpeg'
    }
  ];

  const colorConfig = {
    purple: { // Rename or repurpose to blue
      bg: 'from-blue-900/50 to-blue-800/50',
      border: 'border-blue-500/50',
      hover: 'hover:border-blue-400 hover:shadow-blue-500/30',
      iconBg: 'bg-blue-500/30',
      text: 'text-blue-300'
    },
    blue: {
      bg: 'from-cyan-900/50 to-cyan-800/50',
      border: 'border-cyan-500/50',
      hover: 'hover:border-cyan-400 hover:shadow-cyan-500/30',
      iconBg: 'bg-cyan-500/30',
      text: 'text-cyan-300'
    },
    pink: { // Repurpose to light blue
      bg: 'from-sky-900/50 to-sky-800/50',
      border: 'border-sky-500/50',
      hover: 'hover:border-sky-400 hover:shadow-sky-500/30',
      iconBg: 'bg-sky-500/30',
      text: 'text-sky-300'
    },
    emerald: { // Keep or adjust to teal for bluish
      bg: 'from-teal-900/50 to-teal-800/50',
      border: 'border-teal-500/50',
      hover: 'hover:border-teal-400 hover:shadow-teal-500/30',
      iconBg: 'bg-teal-500/30',
      text: 'text-teal-300'
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-5 px-4 pb-10 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            Certifications & Credentials
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Professional certifications demonstrating my expertise and commitment to continuous learning
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Thumbnail Card Section */}
        <div className="mb-10 flex justify-center">
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/50 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 max-w-xl w-full group">
            <div className="relative overflow-hidden">
              <img
                src="/thumbnail.png"
                alt="Certifications Overview"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
           
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-4 mb-12">
          {certifications.map((cert, idx) => {
            const colors = colorConfig[cert.color];

            return (
              <div
                key={cert.id}
                className={`bg-gradient-to-r ${colors.bg} border ${colors.border} ${colors.hover} rounded-xl p-6 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden`}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-500 -translate-x-full"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`p-4 ${colors.iconBg} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{cert.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Title and Credential */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                        <div>
                          <h3 className={`text-2xl font-bold ${colors.text} mb-1 group-hover:translate-x-2 transition-transform`}>
                            {cert.title}
                          </h3>
                          <p className="text-slate-600 font-semibold">{cert.issuer}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle size={18} className="text-green-400" />
                          <span className="text-green-400 font-bold">{cert.credential}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-4">{cert.description}</p>

                      {/* Date and Details */}
                      <div className="flex flex-wrap gap-6 items-center">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar size={16} className="text-blue-400" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Award size={16} className="text-blue-400" />
                          <span>Verified Credential</span>
                        </div>
                        {/* View Certificate Button */}
                        <button
                          onClick={() => setSelectedCertImage(cert.certImage)}
                          className={`inline-flex items-center gap-2 px-4 py-1 rounded-lg font-semibold text-sm transition-all duration-300 ${colors.text} border border-current hover:scale-105 hover:shadow-lg cursor-pointer`}
                        >
                          <Eye size={14} />
                          View
                        </button>
                      </div>
                    </div>

                    {/* Check Mark */}
                    <div className={`text-6xl font-bold ${colors.text} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all`}>
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-500/50 rounded-lg p-6 text-center hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/30">
            <div className="text-4xl font-bold text-blue-400 mb-2">14</div>
            <p className="text-slate-600">Professional Certifications</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 border border-cyan-500/50 rounded-lg p-6 text-center hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2026</div>
            <p className="text-slate-600">Latest Certification</p>
          </div>
          <div className="bg-gradient-to-br from-sky-900/50 to-sky-800/50 border border-sky-500/50 rounded-lg p-6 text-center hover:border-sky-400 transition-all hover:shadow-lg hover:shadow-sky-500/30">
            <div className="text-4xl font-bold text-sky-400 mb-2">100%</div>
            <p className="text-slate-600">Completion Rate</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-blue-900/50 border border-blue-500/50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Award className="text-blue-400 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Continuous Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                I'm committed to staying current with industry trends and technologies. I regularly take courses, attend webinars, and participate in professional development programs to enhance my skills and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Image Modal */}
        {selectedCertImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden max-w-3xl w-full relative shadow-2xl border border-blue-500/30">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertImage(null)}
                className="absolute top-6 right-6 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full p-2 transition-all duration-300 z-20 shadow-lg hover:scale-110"
                title="Close Certificate"
              >
                <X size={28} className="text-white font-bold" />
              </button>

              {/* Certificate Info Header */}
              <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-blue-500/30 px-6 py-4">
                <h3 className="text-xl font-bold text-blue-300 flex items-center gap-2">
                  <CheckCircle size={24} className="text-green-400" />
                  Certificate of Completion
                </h3>
              </div>

              {/* Certificate Image Container */}
              <div className="flex items-center justify-center bg-black/50 p-6 min-h-96 max-h-[70vh] overflow-y-auto">
                <img
                  src={selectedCertImage}
                  alt="Certificate of Completion"
                  className="w-full h-auto object-contain max-h-[60vh] rounded-lg shadow-lg"
                />
              </div>

              {/* Certificate Info Footer */}
              <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-t border-blue-500/30 px-6 py-4 text-center">
                <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Verified Certificate • Press ESC or click X to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
