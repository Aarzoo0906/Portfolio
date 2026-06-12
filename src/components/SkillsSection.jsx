// SkillsSection.jsx
import React from 'react';
import { Code, Zap, Settings, Palette } from 'lucide-react';

export default function SkillsSection() {
  const skillsData = [
    {
      category: 'Frontend',
      icon: Palette,
      items: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS' ],
      color: 'blue'
    },
    {
      category: 'Backend',
      icon: Zap,
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: 'cyan'
    },
    {
      category: 'Tools & Platforms',
      icon: Settings,
      items: ['Git', 'GitHub', 'Figma', 'VS Code'],
      color: 'sky'
    },
    {
      category: 'Other Skills',
      icon: Code,
      items: ['SEO Optimization', 'Responsive Design', 'UI/UX Design', 'Performance Optimization', 'Testing', 'Deployment'],
      color: 'teal'
    }
  ];

  const colorConfig = {
    blue: {
      bg: 'from-blue-50 to-blue-100/50',
      border: 'border-blue-300',
      hoverBorder: 'hover:border-blue-500',
      shadow: 'hover:shadow-blue-500/20',
      text: 'text-blue-600',
      skillBg: 'bg-blue-100',
      skillBorder: 'border-blue-300',
      skillHover: 'hover:bg-blue-200 hover:border-blue-500'
    },
    cyan: {
      bg: 'from-cyan-50 to-cyan-100/50',
      border: 'border-cyan-300',
      hoverBorder: 'hover:border-cyan-500',
      shadow: 'hover:shadow-cyan-500/20',
      text: 'text-cyan-600',
      skillBg: 'bg-cyan-100',
      skillBorder: 'border-cyan-300',
      skillHover: 'hover:bg-cyan-200 hover:border-cyan-500'
    },
    sky: {
      bg: 'from-sky-50 to-sky-100/50',
      border: 'border-sky-300',
      hoverBorder: 'hover:border-sky-500',
      shadow: 'hover:shadow-sky-500/20',
      text: 'text-sky-600',
      skillBg: 'bg-sky-100',
      skillBorder: 'border-sky-300',
      skillHover: 'hover:bg-sky-200 hover:border-sky-500'
    },
    teal: {
      bg: 'from-teal-50 to-teal-100/50',
      border: 'border-teal-300',
      hoverBorder: 'hover:border-teal-500',
      shadow: 'hover:shadow-teal-500/20',
      text: 'text-teal-600',
      skillBg: 'bg-teal-100',
      skillBorder: 'border-teal-300',
      skillHover: 'hover:bg-teal-200 hover:border-teal-500'
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 px-4 pb-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive skill set across modern web development, from frontend design to backend infrastructure
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillsData.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            const colors = colorConfig[skillGroup.color];

            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.hoverBorder} rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${colors.shadow} group`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 ${colors.skillBg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.text} size={28} />
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text} group-hover:translate-x-2 transition-transform`}>
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 ${colors.skillBg} border ${colors.skillBorder} ${colors.skillHover} rounded-full text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-110 cursor-default relative group/skill overflow-hidden`}
                    >
                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/skill:translate-x-full transition-transform duration-300 -translate-x-full"></div>
                      <span className="relative">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Progress Bars */}
                <div className="mt-8 pt-8 border-t border-blue-200">
                  <h4 className={`text-sm font-semibold ${colors.text} mb-4`}>Proficiency</h4>
                  {skillGroup.items.slice(0, 3).map((skill, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>{skill}</span>
                        <span>{90 - i * 5}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500`}
                          style={{ width: `${90 - i * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-300 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Always Learning & Growing</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm passionate about continuous learning and staying updated with the latest technologies and best practices in web development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['New Technologies', 'Best Practices', 'Performance Optimization', 'Security'].map((item) => (
              <div key={item} className="px-6 py-3 bg-blue-100 border border-blue-300 rounded-lg text-blue-600 font-semibold hover:bg-blue-200 transition-all duration-300 hover:scale-105">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}