<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun, Award, GraduationCap, BookOpen } from 'lucide-react';
=======
>>>>>>> portfolio_scrolling
import profileImg from './assets/images/ahmed.png'
import sepsis from './assets/images/sepsis.png'
import nba from './assets/images/nba.png'
import kill from './assets/images/kill_analysis.png'
import pred from './assets/images/pred.png'
import health from './assets/images/health.png'
import solarflair from './assets/images/solarflair.png'
import sepsis_detection from './assets/images/sepsis_detection.png'
import ResumePDF from './assets/Ahmed_ML_Resume.pdf';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun, Award, GraduationCap, BookOpen, User, Code2, Briefcase, MapPin, ExternalLink, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme context for dark mode (default to dark)
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ResumeSection = () => {
  const [resumeData, setResumeData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch(ResumePDF);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setResumeData(url);
      } catch (error) {
        console.error('Error loading resume:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  return (
    <section id="resume" className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Resume
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download PDF
          </motion.a>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={resumeData}
                className="w-full h-[800px]"
                title="Resume"
              />
            </div>
          )}
        </motion.div>

        
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "Sep 2022",
      title: "Started UC San Diego",
      description: "B.S. Data Science, Minor in Mathematics",
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      date: "Jun 2023",
      title: "Software Engineering Intern",
      description: "CarsXE - Full-stack development & optimization",
      type: "work",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      date: "Sep 2023",
      title: "Instructional Assistant",
      description: "UC San Diego - Tutoring 1000+ students",
      type: "work",
      icon: <User className="w-6 h-6" />
    },
    {
      date: "Jun 2024",
      title: "Machine Learning Intern",
      description: "CarsXE - ML model deployment & optimization",
      type: "work",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      date: "Mar 2025",
      title: "Graduated UCSD",
      description: "4.0 GPA, Summa Cum Laude, Jeffrey L. Elman Award",
      type: "education",
      icon: <Award className="w-6 h-6" />
    },
    {
      date: "Aug 2025",
      title: "UC Berkeley M.Eng",
      description: "Electrical Engineering & Computer Science",
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones in my academic and professional development
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative py-24">
          {/* Main container with proper height */}
          <div className="relative h-96">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 dark:from-blue-800 dark:via-blue-600 dark:to-indigo-600 transform -translate-y-1/2 z-10"></div>
            
            {timelineEvents.map((event, index) => {
              const leftPosition = 6 + ((index / (timelineEvents.length - 1)) * (100 - 32)); // Account for margins
              const isTop = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{ 
                    left: `${leftPosition}%`,
                    top: isTop ? '0%' : '60%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {/* Event card */}
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border-2 w-64 ${
                    event.type === 'education' 
                      ? 'border-green-200 dark:border-green-700' 
                      : 'border-blue-200 dark:border-blue-700'
                  }`}>
                    <div className={`flex items-center mb-3 ${
                      event.type === 'education' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      {event.icon}
                      <span className="ml-2 font-bold text-sm">{event.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{event.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                  </div>

                  {/* Connector line */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${
                      event.type === 'education' 
                        ? 'bg-green-400 dark:bg-green-500' 
                        : 'bg-blue-400 dark:bg-blue-500'
                    } ${isTop ? 'top-full h-12' : 'bottom-full h-10'}`}
                  ></div>

                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${
                      event.type === 'education' 
                        ? 'bg-green-500 dark:bg-green-400' 
                        : 'bg-blue-500 dark:bg-blue-400'
                    } border-2 border-white dark:border-gray-800 z-20 ${
                      isTop ? 'top-full mt-11' : 'bottom-full mb-9'
                    }`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden px-4">
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-indigo-500 dark:from-blue-800 dark:via-blue-600 dark:to-indigo-600"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 w-3 h-3 rounded-full ${
                  event.type === 'education' 
                    ? 'bg-green-500 dark:bg-green-400' 
                    : 'bg-blue-500 dark:bg-blue-400'
                } border-2 border-white dark:border-gray-800 transform -translate-x-1/2 z-10`}
                style={{ top: '1rem' }}
                ></div>
                
                {/* Event card */}
                <div className={`ml-12 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border-2 ${
                  event.type === 'education' 
                    ? 'border-green-200 dark:border-green-700' 
                    : 'border-blue-200 dark:border-blue-700'
                }`}>
                  <div className={`flex items-center mb-2 ${
                    event.type === 'education' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {event.icon}
                    <span className="ml-2 font-bold text-sm">{event.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{event.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, setIsDark } = React.useContext(ThemeContext);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'about', label: 'About' },
    { id: 'academic', label: 'Academic' },
    { id: 'projects', label: 'Projects' },
    { id: 'tutoring', label: 'Teaching' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'timeline', 'about', 'academic', 'projects', 'tutoring', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId) => {
    return activeSection === sectionId ? "text-blue-400" : "text-gray-300 dark:text-gray-300";
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button onClick={() => scrollToSection('home')} className="flex items-center font-bold text-2xl text-gray-900 dark:text-white">AM</button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`${isActive(section.id)} hover:text-blue-400 transition-colors`}
              >
                {section.label}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-400"
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-full flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-400"
              >
                {isDark ? (
                  <>
                    <Sun className="h-5 w-5 mr-2 text-yellow-400" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

<<<<<<< HEAD

const ContactItem = ({ icon, title, value, link }) => (
  <a href={link} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    <div className="ml-4">
      <p className="font-medium text-gray-900 dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  </a>
);

const OpportunityCard = ({ title, description }) => (
  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
    <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

// Add this new component before the Home component
=======
>>>>>>> portfolio_scrolling
const TypewriterText = ({ text, delay = 0, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

<<<<<<< HEAD
// Updated Home component - replace the existing Home component with this:
const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        {/* Hero Section with Parallax Effect */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
          <div className="absolute inset-0 bg-[url('/src/assets/images/grid.svg')] opacity-10 z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-mono">
                <TypewriterText 
                    text="Hi 👋! This is Ahmed Mostafa" 
                    delay={1000} 
                    speed={66} 
                  />
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 font-mono min-h-[2.5rem]">
                  <TypewriterText 
                    text="Data Scientist & Machine Learning Engineer" 
                    delay={2850} 
                    speed={66} 
                  />
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/ahmostafa147"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/ahmed-mostafa147"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:amostafa.mail@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Mail className="w-8 h-8" />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                  <img
                    src={profileImg}
                    alt="Ahmed Mostafa"
                    className="relative rounded-full w-80 h-80 mx-auto object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-[url('/src/assets/images/grid.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => navigate('/projects')}
                className="cursor-pointer"
              >
                <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">7+</h3>
                  <p className="font-semibold mb-1 text-gray-900 dark:text-white">Projects Completed</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Data Science & ML Projects</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate('/tutoring')}
                className="cursor-pointer"
              >
                <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">1000+</h3>
                  <p className="font-semibold mb-1 text-gray-900 dark:text-white">Students Tutored</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Across Multiple Courses</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                onClick={() => navigate('/about')}
                className="cursor-pointer"
              >
                <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">15+</h3>
                  <p className="font-semibold mb-1 text-gray-900 dark:text-white">Technical Skills</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Technologies & Tools</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const About = () => (
  <PageTransition>
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a Data Scientist and Machine Learning Engineer with a track record of building production-ready ML systems that drive real business value. Currently, I am completing my Master of Engineering in EECS at UC Berkeley, where I combine strong technical foundations with practical industry experience to solve complex data problems.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Impact & Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  At CarsXE, I deployed live dashboards that directly enhanced the assessments of users' usage of the APIs and optimized backend performance by <strong>reducing processing time from 15 minutes to seconds</strong>. My award-winning sepsis detection system showed great potential and won 1st place among 35+ participating projects, demonstrating my ability to tackle high-stakes challenges with cutting-edge AI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technical Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I excel at the full ML lifecycle—from exploratory data analysis and feature engineering to model deployment and monitoring. My recent work includes processing 36,000+ EHRs for sepsis research, reducing feature space by <strong>54% while maintaining model performance</strong>, and building scalable data pipelines that integrate multiple APIs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Leadership & Recognition</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I was selected to be the recipient of the prestigious <strong>Jeffrey L. Elman Award</strong> which is given to the student with academic achievements and significant contributions to the UCSD Data Science community. I graduated Summa Cum Laude with a perfect 4.0 GPA. My passion for knowledge sharing led me to tutor over 1000+ students across multiple courses, developing communication skills that translate well to cross-functional collaboration. I've also led winning teams at hackathons, including our 2nd place finish at LA Hacks with SolarFlair, an AI-powered solar energy platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What I Bring to Your Team</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm seeking opportunities where I can leverage my unique combination of academic rigor and practical experience to build ML systems that solve real-world problems. Whether it's optimizing recommendation algorithms, developing predictive models for business intelligence, or creating end-to-end data pipelines, I bring both the technical depth to implement sophisticated solutions and the business acumen to ensure they deliver measurable impact.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Skills & Education */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">UC Berkeley</p>
                  <p className="text-gray-600 dark:text-gray-300">M.Eng. Electrical Engineering & Computer Science</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Aug 2025 - May 2026</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">UC San Diego</p>
                  <p className="text-gray-600 dark:text-gray-300">B.S. Data Science</p>
                  <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">GPA: 4.0/4.0 | Summa Cum Laude</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Jeffrey L. Elman Award Winner</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Sep 2022 - March 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">1st Place Capstone Project</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Sepsis Detection System (35+ projects)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">2nd Place LA Hacks</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">SolarFlair AI Platform</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Core Competencies</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Machine Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">TensorFlow, Scikit-learn, Model Deployment, MLOps</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Data Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Spark, AWS, Docker, Pipeline Optimization</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Programming</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Python, Java, SQL, TypeScript</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Statistical Modeling, Data Visualization, A/B Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const Resume = () => {
  const [resumeData, setResumeData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch(ResumePDF);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setResumeData(url);
      } catch (error) {
        console.error('Error loading resume:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h2>
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={resumeData}
                className="w-full h-[800px]"
                title="Resume"
              />
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

const TeachingCard = ({ course, students, termCount, terms, responsibilities }) => (
  <div className="snap-center shrink-0 w-120 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mr-8">
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{course}</h3>
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Students Tutored</p>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{students}</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-2xl text-blue-600 dark:text-blue-400">{termCount}</span>
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Academic Terms</p>
          <p className="font-bold text-gray-900 dark:text-white">{terms}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Responsibilities</p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          {responsibilities.map((resp, i) => (
            <li key={i}>• {resp}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Updated Tutoring Section with term-specific reviews
const Tutoring = () => {
  const testimonials = [
    {
      quote: "Ahmed has a fiery passion for teaching complex topics in front of students. He does not shy away from 'working through' problems in front of students and I firmly believe this is one of his greatest strengths as a teacher. His communication skills and 'playful nature when it comes to complex problems' will serve him well in future technical leadership roles.",
      author: "Kyle Shannon",
      role: "Course Instructor",
      course: "DSC 40A - Theoretical Foundations of Data Science"
    },
    {
      quote: "Ahmed helped out immensely with setting up the course website prior to the beginning of the quarter, and he set up the entire repository so that I could easily edit and make changes as needed. He was also on top of deadlines and brought student concerns to my attention as often as he saw them.",
      author: "Suh Young Choi",
      role: "Course Instructor", 
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed can be characterized by his kindness, his empathy, and more amicably his unspoken willingness to always have my back, no matter how repulsing the code I hand over to him is. This individual has made me feel valued as a pupil, not only eagerly taking in my suggestions but to action.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed's got the patience of a saint. He sat with me and explained stuff for like an hour while I tried to figure out a PA. He's chill and really approachable. I hope he's my tutor for other DSC classes!",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed's greatest strength is his passion for teaching or at least his passion for wanting you to understand the material. You could ask Ahmed a question, and he will try so hard to understand your confusion and then afterwards he put so much effort on trying to get you to understand the material.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed was one of the best tutors if not the best. He is patient, and takes time to explain concepts rather than just answering a question. He is alert, always looking for a student to help. He is resourceful, finding new ways to explain concepts and fix debugs. He truly is an amazing tutor!!",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed's really good at explaining concepts and ensuring that you understand your mistakes better. He's persistent with helping students fix issues with their code or setup.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 100 - Introduction to Data Management"
    },
    {
      quote: "He [Ahmed] was always willing to help and explained things even when I was slow to understand. He helped me think through things that I was looking at from the wrong perspective.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 140A - Probabilistic Modeling and ML"
=======
const HomeSection = () => {
  const { isDark } = React.useContext(ThemeContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> portfolio_scrolling
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-mono">
              <TypewriterText 
                  text="Hi 👋! I'm Ahmed Mostafa" 
                  delay={1000} 
                  speed={66} 
                />
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 font-mono min-h-[2.5rem]">
                <TypewriterText 
                  text="A Data Scientist & Machine Learning Engineer" 
                  delay={2850} 
                  speed={66} 
                />
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/ahmostafa147"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-8 h-8" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/in/ahmed-mostafa147"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-8 h-8" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:amostafa.mail@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-8 h-8" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img
                  src={profileImg}
                  alt="Ahmed Mostafa"
                  className="relative rounded-full w-80 h-80 mx-auto object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section with Glassmorphism */}
      <div className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => scrollToSection('projects')}
              className="cursor-pointer"
            >
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">7+</h3>
                <p className="font-semibold mb-1 text-gray-900 dark:text-white">Projects Completed</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Data Science & ML Projects</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={() => scrollToSection('tutoring')}
              className="cursor-pointer"
            >
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">1000+</h3>
                <p className="font-semibold mb-1 text-gray-900 dark:text-white">Students Tutored</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Across Multiple Courses</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => scrollToSection('about')}
              className="cursor-pointer"
            >
              <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-4xl text-blue-600 dark:text-blue-400 mb-2">15+</h3>
                <p className="font-semibold mb-1 text-gray-900 dark:text-white">Technical Skills</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Technologies & Tools</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="min-h-screen pt-16 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Column 1: Bio */}
        <div className="md:col-span-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 mb-6"
          >
            I'm a Data Scientist and Machine Learning Engineer with a track record of building production-ready ML systems that drive real business value. Currently, I am completing my Master of Engineering in EECS at UC Berkeley, where I combine strong technical foundations with practical industry experience to solve complex data problems.
          </motion.p>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Impact & Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                At CarsXE, I deployed live dashboards that directly enhanced the assessments of users' usage of the APIs and optimized backend performance by <strong>reducing processing time from 15 minutes to seconds</strong>. My award-winning sepsis detection system showed great potential and won 1st place among 35+ participating projects, demonstrating my ability to tackle high-stakes challenges with cutting-edge AI.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technical Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I excel at the full ML lifecycle—from exploratory data analysis and feature engineering to model deployment and monitoring. My recent work includes processing 36,000+ EHRs for sepsis research, reducing feature space by <strong>54% while maintaining model performance</strong>, and building scalable data pipelines that integrate multiple APIs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Leadership & Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I was selected to be the recipient of the prestigious <strong>Jeffrey L. Elman Award</strong> which is given to the student with academic achievements and significant contributions to the UCSD Data Science community. I graduated Summa Cum Laude with a perfect 4.0 GPA. My passion for knowledge sharing led me to tutor over 1000+ students across multiple courses, developing communication skills that translate well to cross-functional collaboration.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Column 2: Skills & Education */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
            <div className="space-y-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">UC Berkeley</p>
                <p className="text-gray-600 dark:text-gray-300">M.Eng. Electrical Engineering & Computer Science</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">Aug 2025 - May 2026</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">UC San Diego</p>
                <p className="text-gray-600 dark:text-gray-300">B.S. Data Science</p>
                <p className="text-gray-600 dark:text-gray-300">Minor in Mathematics</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">GPA: 4.0/4.0 | Summa Cum Laude</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">Jeffrey L. Elman Award Winner</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">Sep 2022 - March 2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">1st Place Capstone Project</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Sepsis Detection System (35+ projects)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">2nd Place LA Hacks</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">SolarFlair AI Platform</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Core Skills</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Machine Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">TensorFlow, Scikit-learn, Model Deployment, MLOps</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Data Engineering</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Spark, AWS, Docker, Pipeline Optimization</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Programming</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Python, Java, SQL, TypeScript</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">Analytics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Statistical Modeling, Data Visualization, A/B Testing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const AcademicSection = () => {
  const achievements = [
    {
      title: "Jeffrey L. Elman Award",
      description: "Selected as the one student out of 200+ graduating students to receive this prestigious award for outstanding academic achievement and research contributions in Data Science.",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "UC Berkeley MEng EECS",
      description: "Accepted into UC Berkeley's Master of Engineering program in Electrical Engineering and Computer Science, focusing on Data Science and Machine Learning.",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Harvard & UCSD Masters",
      description: "Received acceptance letters from Harvard University for their Master's in Computational Science and Engineering program and UCSD for their Master's in Computer Science program.",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
    },
  ];

  const coreCourses = [
    "Data Structures & Algorithms",
    "Systems for Scalable Analytics",
    "Recommender Systems & Web Mining",
    "Responsible Data Science",
    "Probabilistic Modeling and Machine Learning",
    "Representation Learning",
    "Data Management",
    "Data Visualization",
    "AI: Probabilistic Models",
  ];

  return (
    <section id="academic" className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Achievements Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Academic Achievements
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GPA Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Summary</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.0</p>
                  <p className="text-gray-600 dark:text-gray-300">Cumulative GPA</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">185</p>
                  <p className="text-gray-600 dark:text-gray-300">Total Units Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">Summa Cum Laude</p>
                  <p className="text-gray-600 dark:text-gray-300">Graduation Honor</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Courses Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Core Coursework</h3>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-600 dark:to-gray-800 rounded-lg p-4 border border-blue-200 dark:border-gray-600"
                >
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{course}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, tech, image, link, award }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold h-14 flex items-center text-gray-900 dark:text-white">{title}</h3>
        {award && (
          <div className="flex items-center ml-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-xs text-yellow-600 dark:text-yellow-400 ml-1 font-semibold">{award}</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech: {tech}</p>
        <a
          href={link}
          className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Radiographic Enhanced Clinical Decision Support System",
      description: "Developed an end-to-end pipeline for early sepsis detection using chest X-rays and patient data. Won 1st place out of 35+ capstone projects at UCSD.",
      tech: "Python, TensorFlow, AWS, CatBoost, React, ResNet-50",
      image: sepsis_detection,
      link: "https://kshannon-ucsd.github.io/24wi-capstone-profile/",
      award: "1st Place"
    },
    {
      title: "SolarFlair - AI-Powered Solar Energy Platform",
      description: "Comprehensive solar energy intelligence platform with AI-powered property analysis, financial modeling, and emergency resilience planning. Won 2nd place at LA Hacks.",
      tech: "Google Gemini 2.0, NREL API, Mapbox, DAIN Protocol, React",
      image: solarflair,
      link: "https://solarflair.us/",
      award: "2nd Place - LA Hacks"
    },
    {
      title: "Sepsis Clustering in ICU Patients",
      description: "Analyzed 36,000+ EHRs using latent class analysis to identify patient subgroups and sepsis risks.",
      tech: "Python, R, PostgreSQL, Docker, Git",
      image: sepsis,
      link: "https://github.com/kshannon-ucsd/24fa-dsc180a-team1"
    },
    {
      title: "NBA Trends Teller",
      description: "Interactive visualization platform analyzing NBA scoring trends using modern web technologies.",
      tech: "Svelte, D3.js, CSS, HTML",
      image: nba,
      link: "https://ahmostafa147.github.io/NBA-Trends-Teller/"
    },
    {
      title: "League of Legends Analysis",
      description: "Determine which positions most need to outperform their opponents in kills to win, revealing optimal player placement strategies for competitive teams.",
      tech: "Python, Pandas, Statistical Analysis",
      image: kill,
      link: "https://ahmostafa147.github.io/dsc80-project/"
    },
    {
      title: "League of Legends Result Prediction",
      description: "Predicting whether the team won or lost based on support statistics at the end of a game",
      tech: "Python, Pandas, Plotly, Scikit-learn",
      image: pred,
      link: "https://ahmostafa147.github.io/League-of-Legend-Winning-Prediction/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeachingCard = ({ course, students, termCount, terms, responsibilities }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
  >
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{course}</h3>
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Students Tutored</p>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{students}</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-2xl text-blue-600 dark:text-blue-400">{termCount}</span>
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Academic Terms</p>
          <p className="font-bold text-gray-900 dark:text-white">{terms}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Responsibilities</p>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          {responsibilities.map((resp, i) => (
            <li key={i}>• {resp}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

<<<<<<< HEAD
=======
const AcademicHistory = () => {
  const achievements = [
    {
      title: "Jeffrey L. Elman Award",
      description: "Selected as the one student out of 200+ graduating students to receive this prestigious award for outstanding academic achievement and research contributions in Data Science.",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "UC Berkeley MEng EECS",
      description: "Accepted into UC Berkeley's Master of Engineering program in Electrical Engineering and Computer Science, focusing on Data Science and Machine Learning.",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Harvard & UCSD Masters",
      description: "Received acceptance letters from Harvard University for their Master's in Computational Science and Engineering program and UCSD for their Master's in Computer Science program.",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
    },
  ];

  const departmentCourses = {
    "Data Science": {
      color: "bg-blue-500",
      courses: [
        { code: "DSC 10", name: "Principles of Data Science", grade: "A" },
        { code: "DSC 20", name: "Programming and Basic Data Structures", grade: "A+" },
        { code: "DSC 30", name: "Data Structures and Algorithms", grade: "A" },
        { code: "DSC 40A", name: "Theoretical Foundations of Data Science I", grade: "A" },
        { code: "DSC 40B", name: "Theoretical Foundations of Data Science II", grade: "A" },
        { code: "DSC 80", name: "Practice of Data Science", grade: "A" },
        { code: "DSC 95", name: "Tutor Apprenticeship in Data Science", grade: "P" },
        { code: "DSC 96", name: "Workshop in Data Science", grade: "P" },
        { code: "DSC 100", name: "Introduction to Data Management", grade: "A" },
        { code: "DSC 102", name: "Systems for Scalable Analytics", grade: "A" },
        { code: "DSC 106", name: "Introduction to Data Visualization", grade: "A" },
        { code: "DSC 140A", name: "Probabilistic Modeling and Machine Learning", grade: "A" },
        { code: "DSC 140B", name: "Representation Learning", grade: "A" },
        { code: "DSC 180A", name: "Data Science Project I", grade: "A" },
        { code: "DSC 180B", name: "Data Science Project II", grade: "A" },
        { code: "DSC 190", name: "Topics in Data Science: Soft Skills", grade: "A+" },
        { code: "DSC 261", name: "Responsible Data Science", grade: "A" }
      ]
    },
    "Mathematics": {
      color: "bg-green-500",
      courses: [
        { code: "MATH 18", name: "Linear Algebra", grade: "A+" },
        { code: "MATH 20A", name: "Calculus for Science and Engineering (AP)", grade: "P" },
        { code: "MATH 20B", name: "Calculus for Science and Engineering", grade: "A" },
        { code: "MATH 20C", name: "Calculus and Analytic Geometry for Science and Engineering", grade: "A+" },
        { code: "MATH 109", name: "Mathematical Reasoning", grade: "A" },
        { code: "MATH 154", name: "Discrete Mathematics and Graph Theory", grade: "P" },
        { code: "MATH 168A", name: "Topics in Applied Math-Computer Science: Random walks on graphs", grade: "P" },
        { code: "MATH 170A", name: "Introduction to Numerical Analysis/Linear", grade: "P" },
        { code: "MATH 183", name: "Statistical Methods", grade: "A" },
        { code: "MATH 189", name: "Data Analysis and Inference", grade: "A+" }
      ]
    },
    "Computer Science": {
      color: "bg-purple-500",
      courses: [
        { code: "CSE 150A", name: "AI: Probabilistic Models", grade: "P" },
        { code: "CSE 151A", name: "Introduction to Machine Learning", grade: "A" },
        { code: "CSE 158R", name: "Recommender Systems & Web Mining", grade: "A+" }
      ]
    },
    "Economics": {
      color: "bg-red-500",
      courses: [
        { code: "ECON 1", name: "Principles of Microeconomics (AP)", grade: "P" },
        { code: "ECON 2", name: "Market Imperfections & Policy", grade: "A+" },
        { code: "ECON 3", name: "Principles of Macroeconomics", grade: "A+" },
        { code: "ECON 120B", name: "Econometrics B", grade: "A" }
      ]
    },
    "Other Courses": {
      color: "bg-gray-500",
      courses: [
        { code: "COGS 9", name: "Introduction to Data Science", grade: "A+" },
        { code: "COGS 108", name: "Data Science in Practice", grade: "A+" },
        { code: "AWP 4A", name: "Analytical Writing A", grade: "P" },
        { code: "AWP 4B", name: "Analytical Writing B", grade: "A" },
        { code: "MCWP 40", name: "Critical Writing", grade: "A" },
        { code: "MCWP 50", name: "Critical Writing", grade: "A+" },
        { code: "MUS 1A", name: "Fundamentals of Music A", grade: "A+" },
        { code: "MUS 1B", name: "Fundamentals of Music B", grade: "P" },
        { code: "MUS 4", name: "Introduction to Western Music", grade: "P" },
        { code: "POLI 30", name: "Political Inquiry", grade: "A" },
        { code: "USP 1", name: "History of US Urban Communities", grade: "P" }
      ]
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Achievements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Academic Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {achievement.icon}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GPA Summary */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Summary</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.0</p>
                    <p className="text-gray-600 dark:text-gray-300">Cumulative GPA</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">185</p>
                    <p className="text-gray-600 dark:text-gray-300">Total Units Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">Summa Cum Laude</p>
                    <p className="text-gray-600 dark:text-gray-300">Graduation Honor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course History by Department - Vertical Layout */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Course History by Department</h2>
            <div className="space-y-8">
              {Object.entries(departmentCourses).map(([department, data], index) => (
                <CourseCard
                  key={department}
                  department={department}
                  courses={data.courses}
                  departmentColor={data.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};


const App = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HashRouter>
  );
};
// Add this new component after your existing components

>>>>>>> 790ac6fcce775481f6863f9444b50c72d9186ea0
const TestimonialCard = ({ quote, author, role, course, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
  >
    <div className="mb-4">
      <svg className="w-8 h-8 text-blue-500 dark:text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
      </svg>
    </div>
    
    <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">
      "{quote}"
    </blockquote>
    
    <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{course}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

<<<<<<< HEAD
const AppContent = () => {
=======
const TutoringSection = () => {
  const testimonials = [
    {
      quote: "Ahmed has a fiery passion for teaching complex topics in front of students. He does not shy away from 'working through' problems in front of students and I firmly believe this is one of his greatest strengths as a teacher.",
      author: "Kyle Shannon",
      role: "Course Instructor",
      course: "DSC 40A - Theoretical Foundations of Data Science"
    },
    {
      quote: "Ahmed helped out immensely with setting up the course website prior to the beginning of the quarter, and he set up the entire repository so that I could easily edit and make changes as needed.",
      author: "Suh Young Choi",
      role: "Course Instructor", 
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed's got the patience of a saint. He sat with me and explained stuff for like an hour while I tried to figure out a PA. He's chill and really approachable.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed was one of the best tutors if not the best. He is patient, and takes time to explain concepts rather than just answering a question.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 30 - Data Structures & Algorithms"
    },
    {
      quote: "Ahmed's really good at explaining concepts and ensuring that you understand your mistakes better. He's persistent with helping students fix issues with their code or setup.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 100 - Introduction to Data Management"
    },
    {
      quote: "He was always willing to help and explained things even when I was slow to understand. He helped me think through things that I was looking at from the wrong perspective.",
      author: "Student",
      role: "Student Evaluation",
      course: "DSC 140A - Probabilistic Modeling and ML"
    }
  ];

>>>>>>> portfolio_scrolling
  return (
    <section id="tutoring" className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Teaching Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</p>
                <p className="text-gray-600 dark:text-gray-300">Students Tutored</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4</p>
                <p className="text-gray-600 dark:text-gray-300">Courses Taught</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%+</p>
                <p className="text-gray-600 dark:text-gray-300">Positive Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</p>
                <p className="text-gray-600 dark:text-gray-300">Academic Terms</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Teaching Experience
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <TeachingCard
            course="Data Structures & Algorithms (DSC 30)"
            students="500+"
            termCount={4}
            terms="Fall 2023 - Summer 2024"
            responsibilities={[
              "Monitored Ed Discussion",
              "Graded exams",
              "Hosted office hours",
              "Created exam and assignments"
            ]}
          />
          <TeachingCard
            course="Theoretical Foundations (DSC 40A)"
            students="150+"
            termCount={2}
            terms="Summer 2024, Winter 2025"
            responsibilities={[
              "Assisted in lectures",
              "Lead Discussion Sections",
              "Graded assignments and exams",
              "Hosted office hours"
            ]}
          />
          <TeachingCard
            course="Data Management (DSC 100)"
            students="150+"
            termCount={1}
            terms="Fall 2024"
            responsibilities={[
              "Presented demos in lectures",
              "Graded assignments and exams",
              "Hosted office hours",
              "Prepared exams and assignments"
            ]}
          />
          <TeachingCard
            course="Machine Learning (DSC 140A)"
            students="200+"
            termCount={1}
            terms="Winter 2025"
            responsibilities={[
              "Graded assignments and exams",
              "Hosted office hours",
              "Created assignments"
            ]}
          />
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              What People Say
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Feedback from instructors and students I've had the privilege to work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, value, link }) => (
  <motion.a 
    href={link} 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
  >
    <div className="text-blue-600 dark:text-blue-400">{icon}</div>
    <div className="ml-4">
      <p className="font-medium text-gray-900 dark:text-white">{title}</p>
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    </div>
  </motion.a>
);

const OpportunityCard = ({ title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
  >
    <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const ContactSection = () => (
  <section id="contact" className="min-h-screen pt-16 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Let's Connect
          </motion.h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <ContactItem
                icon={<Mail />}
                title="Email"
                value="amostafa.mail@gmail.com"
                link="mailto:amostafa.mail@gmail.com"
              />
              <ContactItem
                icon={<Linkedin />}
                title="LinkedIn"
                value="/ahmed-mostafa147"
                link="https://linkedin.com/in/ahmed-mostafa147"
              />
              <ContactItem
                icon={<Github />}
                title="GitHub"
                value="/ahmostafa147"
                link="https://github.com/ahmostafa147"
              />
            </div>
          </div>
        </div>
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Currently Open To
          </motion.h2>
          <div className="space-y-4">
            <OpportunityCard title="Full-time Positions" description="Data Science & ML Engineering roles" />
            <OpportunityCard title="Research Collaboration" description="Healthcare & Game Analytics projects" />
            <OpportunityCard title="Mentorship" description="Teaching & tutoring opportunities" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-gray-800 py-6">
    <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
      <p>© {new Date().getFullYear()} Ahmed Mostafa. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <HomeSection />
        <TimelineSection />
        <AboutSection />
        <AcademicSection />
        <ProjectsSection />
        <TutoringSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
