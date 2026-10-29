// AboutSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Users, Lightbulb, Award } from 'lucide-react';

export default function AboutSection() {
  const navigate = useNavigate();
  const stats = [
    { number: '5+', label: 'Projects Completed', icon: Code, color: 'blue', action: () => navigate('/projects') },
    { number: '3+', label: 'Certifications Earned', icon: Award, color: 'cyan', action: () => navigate('/certifications') },
  ];

  const experiences = [
    {
      title: 'Who I Am',
      color: 'blue',
      description: 'I am a focused and growth-driven developer who has completed my BCA and is currently pursuing my MCA at Chandigarh University. I enjoy building digital solutions that are practical, visually engaging, and user-centered. My work reflects a blend of technical skill, creativity, and a strong interest in learning technologies that solve real-world problems.',
      subdescription: 'Right now, I am working as a Full Stack Developer Intern while continuously expanding my knowledge in modern web development, AI-powered tools, and software engineering practices. I am passionate about writing clean code, improving my craft, and growing through hands-on experience and continuous learning.'
    },
    {
      title: 'My Journey',
      color: 'cyan',
      description: 'My journey began with curiosity about how websites and applications are built, and it gradually evolved into a deeper interest in technology, design, and problem-solving. After completing my BCA, I chose to level up my skills by pursuing MCA at Chandigarh University while staying active in practical learning and real-world project exposure.',
      subdescription: 'Along the way, I have strengthened my foundation in full-stack development, explored modern tools, and embraced AI as a way to work smarter and build better solutions. This path has shaped me into a developer who is not only technically inclined but also committed to constant growth, adaptability, and building work that makes an impact.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 px-4 pb-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((item, idx) => {
            const borderColor = item.color === 'blue' ? 'border-blue-300 hover:border-blue-500' : 'border-cyan-300 hover:border-cyan-500';
            const bgColor = item.color === 'blue' ? 'bg-blue-50 hover:bg-blue-100' : 'bg-cyan-50 hover:bg-cyan-100';
            const textColor = item.color === 'blue' ? 'text-blue-600' : 'text-cyan-600';

            return (
              <div
                key={idx}
                className={`${bgColor} border ${borderColor} rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group`}
              >
                <h3 className={`text-2xl font-bold ${textColor} mb-4 group-hover:scale-105 transition-transform origin-left`}>
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {item.subdescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">My Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colors = {
                blue: 'from-blue-100 to-blue-200 border-blue-300 hover:border-blue-500 hover:shadow-blue-500/30',
                cyan: 'from-cyan-100 to-cyan-200 border-cyan-300 hover:border-cyan-500 hover:shadow-cyan-500/30',
              };

              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${colors[stat.color]} border rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer`}
                  onClick={stat.action}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-gray-700 font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}