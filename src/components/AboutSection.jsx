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
      description: 'I am a passionate and motivated BCA student with a strong interest in web development and modern technologies. I enjoy creating responsive, user-friendly web applications and continuously improving my technical skills through hands-on projects and learning. I believe in writing clean code, understanding core concepts, and applying them to solve real-world problems',
      subdescription: 'Currently, I am learning and working with technologies like HTML, CSS, JavaScript, React, and basic backend concepts. I am eager to gain industry exposure, collaborate with teams, and contribute to innovative projects. My goal is to grow as a full-stack developer and build impactful digital solutions.'
    },
    {
      title: 'My Journey',
      color: 'cyan',
      description: 'My journey into the world of technology began with curiosity about how websites and applications work behind the scenes. As a BCA student, I started learning programming fundamentals and gradually developed a strong interest in web development. Through academic learning, self-study, and practical projects, I have been building a solid foundation in both front-end and core computer concepts.',
      subdescription: 'Along the way, I have worked on small projects, explored modern tools, and continuously challenged myself to learn new technologies. Even with limited resources at times, I stayed consistent and focused on improving my skills. This journey has helped me grow not only as a developer but also as a problem-solver, preparing me for real-world challenges and future opportunities.'
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