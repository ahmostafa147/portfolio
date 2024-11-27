import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import profileImg from './assets/images/ahmed.png'
import sepsis from './assets/images/sepsis.png'
import nba from './assets/images/nba.png'
import kill from './assets/images/kill_analysis.png'
import pred from './assets/images/pred.png'
import health from './assets/images/health.png'
import { motion, AnimatePresence } from 'framer-motion';
import ResumePDF from './assets/resume.pdf';
import british from './assets/images/British_Airways-Logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600";
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center font-bold text-2xl" >AM</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} hover:text-blue-600`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-blue-600`}>About</Link>
            <Link to="/projects" className={`${isActive('/projects')} hover:text-blue-600`}>Projects</Link>
            <Link to="/resume" className={`${isActive('/resume')} hover:text-blue-600`}>Resume</Link>
            <Link to="/tutoring" className={`${isActive('/tutoring')} hover:text-blue-600`}>Teaching</Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-600`}>Contact</Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/resume" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Resume</Link>
            <Link to="/tutoring" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Teaching</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};
const StatCard = ({ title, value, description }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
    <h3 className="font-bold text-4xl text-blue-600 mb-2">{value}</h3>
    <p className="font-semibold mb-1">{title}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ContactItem = ({ icon, title, value, link }) => (
  <a href={link} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
    <div className="text-blue-600">{icon}</div>
    <div className="ml-4">
      <p className="font-medium">{title}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </a>
);

const OpportunityCard = ({ title, description }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);
const Home = () => (
  <PageTransition>
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Ahmed Mostafa</h1>
              <p className="text-xl text-gray-600 mb-8">Data Scientist & Machine Learning Engineer</p>
              <div className="flex space-x-4">
                <a href="https://github.com/ahmostafa147" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ahmed-mostafa147" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:amostafa.mail@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={profileImg} alt="Ahmed Mostafa" className="rounded-full w-64 h-64 mx-auto object-cover shadow-xl" />
            </div>
          </div>
        </div>

        {/* Stats Section - Now in a separate container */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <StatCard title="Projects Completed" value="5+" description="Data Science & ML Projects" />
              <StatCard title="Students Tutored" value="900+" description="Across Multiple Courses" />
              <StatCard title="Technical Skills" value="15+" description="Technologies & Tools" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);
const TechRating = ({ tech, rating }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="font-medium">{tech}</span>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${i < rating ? 'bg-blue-600' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  </div>
);

// In About component
const technologies = [
  { name: "AWS", rating: 3 },
  { name: "Docker", rating: 4 },
  { name: "Git", rating: 5 },
  { name: "Spark", rating: 3 },
];
const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{skill}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

// Add to About section
const skills = [
  { name: "Python", level: 95 },
  { name: "SQL", level: 90 },
  { name: "R", level: 50 },
  { name: "Java", level: 90 },
  { name: "JavaScript", level: 65 }
];
const About = () => (
  <PageTransition>
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-gray-600 mb-6">
              Data Science student at UC San Diego passionate about leveraging data to solve real-world problems.
              Perfect 4.0 GPA demonstrates strong academic performance and dedication to learning.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Professional Journey</h3>
                <p className="text-gray-600">
                  Started as a Data Science intern at CarsXE, where I deployed multiple dashboards and developed ML models.
                  Currently focusing on healthcare analytics projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Research Interests</h3>
                <p className="text-gray-600">
                  Machine Learning in Healthcare, Statistical Analysis, Data Visualization, and Predictive Modeling
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="font-bold mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-x-8">
                {/* Programming Skills */}
                <div>
                  <h4 className="font-semibold mb-4">Programming</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-4">Technologies</h4>
                  {technologies.map((tech) => (
                    <TechRating key={tech.name} tech={tech.name} rating={tech.rating} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Skills & Education */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">UC San Diego</p>
                  <p className="text-gray-600">B.S. Data Science</p>
                  <p className="text-gray-600">Minor in Mathematics</p>
                  <p className="text-sm text-blue-600">GPA: 4.0/4.0</p>
                </div>
              </div>
            </div>


            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-4">Certifications</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <img src={british} alt="BA" className="w-12 h-12 mr-4" />
                    <div>
                      <h4 className="font-semibold">Data Science Virtual Experience Programme</h4>
                      <p className="text-gray-600 text-sm">British Airways</p>
                      <a
                        href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_kuTE8sn3mNPFbzSya_1692620055560_completion_certificate.pdf"
                        className="text-blue-600 text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
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

// Add Resume component
const Resume = () => (
  <PageTransition>
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe
            src={ResumePDF}
            className="w-full h-[800px]"
            title="Resume"
          />
          <a
            href={ResumePDF}
            download
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </PageTransition>
);

// Add Tutoring component
const TeachingCard = ({ course, students, termCount, terms, responsibilities }) => (
  <div className="snap-center shrink-0 w-120 bg-white rounded-xl shadow-lg p-6 mr-8">
    <h3 className="text-xl font-bold mb-3">{course}</h3>
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500">Students Tutored</p>
        <p className="text-2xl font-bold text-blue-600">{students}</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-2xl text-blue-600">{termCount}</span>
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-500">Academic Terms</p>
          <p className="font-bold">{terms}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Responsibilities</p>
        <ul className="text-sm text-gray-600 space-y-1">
          {responsibilities.map((resp, i) => (
            <li key={i}>• {resp}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Tutoring = () => (
  <PageTransition>
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12">Teaching Experience</h2>
        <div className="relative overflow-x-auto pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <TeachingCard
              course="Data Structures & Algorithms (DSC 30)"
              students="500+"
              termCount={4}
              terms="Fall 2023, Winter 2024, Spring 2024, Summer Session II 2024"
              responsibilities={[
                "Monitored Ed Discussion",
                "Graded exams",
                "Hosted office hours",
                "Created exam and assignments"
              ]}
            />
            {/* Add more TeachingCard components for other courses */}
            <TeachingCard
              course="Theoretical Foundations of Data Science I (DSC 40A)"
              students="150+"
              termCount={2}
              terms="Summer Session I 2024, Winter 2025"
              responsibilities={[
                "Assisted in lectures",
                "Lead Discussion Sections",
                "Graded assignments and exams",
                "Hosted office hours",
                "Created exam and assignments"
              ]}
            />
            <TeachingCard
              course="Introduction to Data Management (DSC 100)"
              students="130+"
              termCount={1}
              terms="Fall 2024"
              responsibilities={[
                "Presented demos in lectures",
                "Graded assignments and exams",
                "Hosted office hours",
                "Prepared exams, quizzes, and assignments"
              ]}
            />
            <TeachingCard
              course="Probabilistic Modeling and Machine Learning (DSC 140A)"
              students="160+"
              termCount={1}
              terms="Winter 2025"
              responsibilities={[
                "Graded assignments and exams",
                "Hosted office hours",
                "Created assignments"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);

// Update ProjectCard component
const ProjectCard = ({ title, description, tech, image, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
    <img src={image} alt={title} className="w-full h-58 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 h-14 flex items-center">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-sm text-gray-500 mb-4">Tech: {tech}</p>
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
  </div>
);

const Projects = () => {

  const projects = [
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
    },
    {
      title: "How Demographic and Behaviors Shape Health",
      description: "Relationship between demographics, behavioral patterns, and individual well-being, identifying key determinants of health status.",
      tech: "Python, Pandas, Klib, Statsmodels, seaborn",
      image: health,
      link: "https://ahmostafa147.github.io/Math189-project/"
    }
  ];
  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div className="w-full md:w-[calc(32.33%-1rem)]">
                <ProjectCard key={index} {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const Contact = () => (
  <PageTransition>
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
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
            <h2 className="text-3xl font-bold mb-8">Currently Open To</h2>
            <div className="space-y-4">
              <OpportunityCard title="Full-time Positions" description="Data Science & ML Engineering roles" />
              <OpportunityCard title="Research Collaboration" description="Healthcare & Game Analytics projects" />
              <OpportunityCard title="Mentorship" description="Teaching & tutoring opportunities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);
const Footer = () => (
  <footer className="bg-gray-50 py-6 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Ahmed Mostafa. All rights reserved.</p>
    </div>
  </footer>
);
// App.jsx
const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  return (
    <div>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;