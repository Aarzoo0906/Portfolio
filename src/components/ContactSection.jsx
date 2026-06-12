// ContactSection.jsx
import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, Download, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your Public Key
emailjs.init('qXD0uEYQ4lmsEXRFi');

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const contactLinks = [
    {
      id: 1,
      icon: Github,
      title: 'GitHub',
      subtitle: '@yourgithub',
      description: 'Check out my repositories and contributions',
      link: 'https://github.com/Aarzoo0906',
      color: 'blue'
    },
    {
      id: 2,
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'my profile',
      description: 'Connect with me professionally',
      link: 'https://www.linkedin.com/in/aarzoosingh0906/',
      color: 'cyan'
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email',
      subtitle: 'aarzoosingh0906@gmail.com',
      description: 'Send me an email anytime',
      link: 'mailto:aarzoosingh0906@gmail.com',
      color: 'sky'
    },
    {
      id: 4,
      icon: Download,
      title: 'Download CV',
      subtitle: 'Resume (PDF)',
      description: 'Download my complete resume',
      link: '/resume.pdf',
      color: 'teal',
      isDownload: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data being sent:', formData);
    
    // Send email using EmailJS
    // Service ID: service_hq0bzih
    // Template ID: template_d1eql3n
    // Messages sent to: aarzoosingh0906@gmail.com
    
    const templateParams = {
      to_email: 'aarzoosingh0906@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Add alternative names in case template uses different variable names
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message,
      name: formData.name,
      email: formData.email,
      phone_number: 'N/A'
    };
    
    console.log('Template parameters:', templateParams);
    console.log('Sending to EmailJS...');
    
    emailjs.send(
      'service_9i101l5',
      'template_5cpzctg',
      templateParams
    ).then(
      (response) => {
        console.log('✓ EmailJS Response:', response);
        console.log('✓ Message sent successfully! Response ID:', response.status);
        alert('✓ Message sent successfully! I\'ll get back to you soon.');
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      },
      (error) => {
        console.error('✗ EmailJS Error:', error);
        console.error('Error Status:', error.status);
        console.error('Error Details:', error);
        alert(`Failed to send message.\n\nError: ${error.status || 'Unknown error'}\n\nPlease check:\n1. EmailJS Service is connected to Gmail\n2. Template variables match\n3. Check console for details`);
      }
    );
  };

  const colorConfig = {
    blue: {
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-300',
      hover: 'hover:border-blue-500 hover:shadow-blue-500/30',
      iconBg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    cyan: {
      bg: 'from-cyan-50 to-cyan-100',
      border: 'border-cyan-300',
      hover: 'hover:border-cyan-500 hover:shadow-cyan-500/30',
      iconBg: 'bg-cyan-100',
      text: 'text-cyan-600'
    },
    sky: {
      bg: 'from-sky-50 to-sky-100',
      border: 'border-sky-300',
      hover: 'hover:border-sky-500 hover:shadow-sky-500/30',
      iconBg: 'bg-sky-100',
      text: 'text-sky-600'
    },
    teal: {
      bg: 'from-teal-50 to-teal-100',
      border: 'border-teal-300',
      hover: 'hover:border-teal-500 hover:shadow-teal-500/30',
      iconBg: 'bg-teal-100',
      text: 'text-teal-600'
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 px-4 pb-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together! I'm always open to new opportunities and interesting projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            const colors = colorConfig[contact.color];

            const handleDownload = () => {
              const link = document.createElement('a');
              link.href = contact.link;
              link.download = 'AarzooSingh_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            };

            return (
              <div
                key={contact.id}
                onClick={contact.isDownload ? handleDownload : undefined}
                className={`bg-gradient-to-br ${colors.bg} border ${colors.border} ${colors.hover} rounded-xl p-8 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden ${contact.isDownload ? 'cursor-pointer' : ''}`}
              >
                {contact.isDownload ? null : (
                  <a href={contact.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
                )}
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-500 -translate-x-full"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 ${colors.iconBg} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${colors.text} group-hover:translate-x-2 transition-transform`}>
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{contact.description}</p>
                  <div className={`mt-4 inline-block ${colors.text} font-semibold group-hover:translate-x-2 transition-transform`}>
                    {contact.isDownload ? 'Download now →' : 'Get in touch →'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Send me a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent! ✓</h4>
                <p className="text-green-700">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-blue-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="XYZ"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-blue-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-blue-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-white border border-blue-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-xl p-6 hover:border-blue-500 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-200 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-1">Quick Response</h4>
                  <p className="text-gray-600 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-300 rounded-xl p-6 hover:border-cyan-500 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-200 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cyan-600 mb-1">Available for Work</h4>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-300 rounded-xl p-6 hover:border-sky-500 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-200 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="text-sky-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-sky-600 mb-1">Based in</h4>
                  <p className="text-gray-600 text-sm">Kanpur, India • Remote Friendly</p>
                </div>
              </div>
            </div>

            {/* Quick Stat */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-center text-white">
              <p className="text-sm opacity-90 mb-1">Average Project Duration</p>
              <p className="text-3xl font-bold">2-8 weeks</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-12 text-center hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
          <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-lg text-blue-50 mb-8">
            I'm excited about new projects and collaborations. Let's discuss your ideas!
          </p>
          <button
            onClick={() => {
              formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => {
                const nameInput = formRef.current?.querySelector('input[name="name"]');
                nameInput?.focus();
              }, 500);
            }}
            className="inline-block px-10 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}