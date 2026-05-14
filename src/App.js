import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import RotatingName from './components/RotatingName';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import CircularCertificates from './components/CircularCertificates';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificate data
  const certificates = [
    { id: 1, name: 'Python PCEP', image: 'puthon_PCEP.png' },
    { id: 2, name: 'HTML', image: 'certficar_HTML.png' },
    { id: 3, name: 'Android Studio', image: 'Certificar_AndroidStudio.png' },
    { id: 4, name: 'Python Harverd', image: 'Certificate_Harvard.png' },
    { id: 5, name: 'WBS', image: 'Certificate_WBS.png' },
    { id: 6, name: 'CSS', image: 'certificates_CSS.png' },
    { id: 7, name: 'Java', image: 'certificates_Java_GL_.png' },
    { id: 8, name: 'Java', image: 'Certification_Java_EE.png' },
    { id: 9, name: 'Google', image: 'Course_Certificate.png' },
    { id: 10, name: 'IHK', image: 'D_IHK_.png' },
    { id: 11, name: 'Problem Solving', image: 'HackerRankjavaCertificate_problemSolving.png' },
    { id: 12, name: 'Java', image: 'HackerRankjavaCertificateJava.png' },
    { id: 13, name: 'Umschullung', image: 'forum.png' },
    { id: 14, name: 'Englisch', image: 'Englisch.png' },
    { id: 15, name: 'Java', image: 'Java_IBM.png' },
    { id: 16, name: 'Maven', image: 'Maven.png' },
    { id: 17, name: 'Cloud', image: 'Certificat_cloud.png' },
    { id: 18, name: 'Python', image: 'SL_certificate_pythn.png' },
    { id: 19, name: 'Google', image: 'ZertifikatGoogleZukunftswerkstat.png' },
  ];

  // const openModal = (cert) => {
  //   setSelectedCert(cert);
  // };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollContainerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollInterval;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: 1, behavior: 'smooth' });
          }
        }
      }, 30);
    };
    
    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };
    
    if (container) {
      startAutoScroll();
      container.addEventListener('mouseenter', stopAutoScroll);
      container.addEventListener('mouseleave', startAutoScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mouseenter', stopAutoScroll);
        container.removeEventListener('mouseleave', startAutoScroll);
      }
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="App">
      <AnimatedBackground />
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="IconEye.png" className="Icon_Img" alt="Icon" />
            Amer
          </div>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('home')} className="nav-btn">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-btn">About</button></li>
            <li><button onClick={() => scrollToSection('education')} className="nav-btn">Education</button></li>
            <li><button onClick={() => scrollToSection('experience')} className="nav-btn">Experience</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-btn">Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="nav-btn">Skills</button></li>
            <li><button onClick={() => scrollToSection('certificates')} className="nav-btn">Certificates</button></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="RotatingNameDiv">
            <RotatingName />
          </div>
          <div className="hero-text margin_top">
            <p>Software Engineer | Full-Stack Developer | Problem Solver</p>
          </div>
        </div>
      </section>

      <div className="container">
        <section id="about">
          <div className="card">
            <h2 className="section-title">About Me</h2>
            <p>I am an enthusiastic junior software engineer with a passion for problem solving and a solid foundation in software development methodologies, eager to contribute to innovative projects and grow within a dynamic organization. Based in Berlin with international experience across Greece and Germany, I bring diverse perspectives to every project.</p>
          </div>
        </section>
        <section id="stats">
          <div className="card stats-container">
            <div className="stat-item">
              <div className="stat-number">19+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Programming Languages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Hours of Coding</div>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <div className="card">
            <h2 className="section-title">What People Say</h2>
            <div className="testimonial-grid">
              <div className="testimonial">
                <p>"Amer is a dedicated developer who brings creative solutions to complex problems."</p>
                <h4>- Team Lead, IBM</h4>
              </div>
              <div className="testimonial">
                <p>"His problem-solving skills and attention to detail are exceptional."</p>
                <h4>- Mentor, WBS Coding School</h4>
              </div>
            </div>
          </div>
        </section>
        <section id="fun-facts">
          <div className="card">
            <h2 className="section-title">Beyond the Code</h2>
            <div className="fun-facts-grid">
              <div className="fun-fact">
                <span className="fun-icon">✈️</span>
                <span>Love the SR-71 Blackbird</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">🌍</span>
                <span>Speak 4 languages</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">⚽</span>
                <span>Sports enthusiast</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">📚</span>
                <span>Always learning</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="card">
            <h2 className="section-title">Education</h2>
            <div className="timeline-item">
              <div className="timeline-title">SOFTWARE ENGINEERING PROGRAM</div>
              <div className="timeline-subtitle">WBS CODING SCHOOL | Berlin</div>
              <div className="timeline-date">03/2025 - 04/2026</div>
              <p>Software Engineering, Computer Science, Data Structure and Algorithms</p>
              <p>Certifications: Python PCEP, Azure Fundamentals</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">SPECIALIST FOR APPLICATION DEVELOPMENT</div>
              <div className="timeline-subtitle">FORUM Berufsbildung e.V. | Berlin</div>
              <div className="timeline-date">08/2020 - 07/2022</div>
              <p>Java, Database SQL, Network, Windows Server Administration</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Training as an Electrical Engineer</div>
              <div className="timeline-subtitle">KALE TECHNICAL SCHOOL | Greece - Athens</div>
              <div className="timeline-date">09/2002 - 08/2005</div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="card">
            <h2 className="section-title">Experience</h2>
            <div className="timeline-item">
              <div className="timeline-title">Internship as Fullstack Developer</div>
              <div className="timeline-subtitle">Think3DDD | Berlin</div>
              <div className="timeline-date">02/2026 - Present</div>
              <p>python, react, javascript, AI Tools, Git, GitLab, DatenBank</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Software Developer</div>
              <div className="timeline-subtitle">IBM Client Innovation Center Germany GmbH | Magdeburg</div>
              <div className="timeline-date">03/2023 - 09/2023</div>
              <p>Desktop application processing Biometric Data with specific outputs. Tech stack: Java, SQL, Spring Boot, Database</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Internship as Website Developer</div>
              <div className="timeline-subtitle">Druck und Folie | Berlin</div>
              <div className="timeline-date">05/2021 - 03/2022</div>
              <p>WordPress, HTML, CSS, Graphic Design, Java, Database SQL, Network, Windows Server Administration</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Media and Print Designer</div>
              <div className="timeline-subtitle">TIPOSEME SIGNMAKING | Athens - Berlin</div>
              <div className="timeline-date">09/2017 - 03/2020</div>
              <p>Graphic design and Assembly</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="card">
            <h2 className="section-title">🚀 Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>DevShare</h3>
                <p>Social Dev Resource Hub - Share and discover development resources</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/devshare" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://devshare-two.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>

              <div className="project-card">
                <h3>PokGameBattle</h3>
                <p>Full-stack Pokémon battle game with React, Node.js, and PostgreSQL</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/PokGameBattle.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://pokemonbattel.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>

              <div className="project-card">
                <h3>CuttingCalculator</h3>
                <p>Android app written on Android Studio using Java for measuring metal</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/Cutting-Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <h3>SpeakFUn</h3>
                <p>Android application written in Java implementing voice-to-text features</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/SpeakFun" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <h3>Space Invaders</h3>
                <p>Classic shoot-'em-up game recreation</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/Space-Invaders" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <h3>ChallengeTracker</h3>
                <p>Platform to create and join challenges, track daily progress</p>
                <div className="project-links">
                  <a href="https://github.com/Al-Amer/WBS-GroupProject05-ChallengeTracker" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="card">
            <h2 className="section-title">Tech Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.JS</span>
                  <span className="skill-tag">ExpressJS</span>
                  <span className="skill-tag">Java/JEE/SpringBoot</span>
                  <span className="skill-tag">C#/.NET/ASP.NET</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Databases & AI</h3>
                <div className="skill-tags">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Gen AI Integration</span>
                  <span className="skill-tag">OpenAI API</span>
                  <span className="skill-tag">Gemini API</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & More</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git & GitHub</span>
                  <span className="skill-tag">Microsoft Office</span>
                  <span className="skill-tag">Data Structures & Algorithms</span>
                </div>
              </div>
            </div>
            <h3 style={{ marginTop: '1.5rem', color: '#a855f7' }}>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Creativity</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Problem-Solving</span>
              <span className="skill-tag">Team Player</span>
            </div>
            <h3 style={{ marginTop: '1.5rem', color: '#a855f7' }}>Languages</h3>
            <div className="simple-language-grid">
              <div className="simple-language-item">
                <span className="simple-flag">🇩🇪</span>
                <span className="simple-name">German</span>
                <span className="simple-level">B2</span>
                <div className="simple-stars">⭐⭐⭐⭐☆</div>
              </div>
              <div className="simple-language-item">
                <span className="simple-flag">🇬🇧</span>
                <span className="simple-name">English</span>
                <span className="simple-level">B2</span>
                <div className="simple-stars">⭐⭐⭐⭐☆</div>
              </div>
              <div className="simple-language-item">
                <span className="simple-flag">🇸🇾</span>
                <span className="simple-name">Arabic</span>
                <span className="simple-level">Native</span>
                <div className="simple-stars">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="simple-language-item">
                <span className="simple-flag">🇬🇷</span>
                <span className="simple-name">Greek</span>
                <span className="simple-level">B2</span>
                <div className="simple-stars">⭐⭐⭐⭐☆</div>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Certificates Section - Only one! */}
        <section id="certificates">
          <div className="card">
            <h2 className="section-title">Certificates</h2>
            <CircularCertificates 
              certificates={certificates}
              onSelectCert={(cert) => {
                console.log('Certificate clicked:', cert.name);
              }}
            />
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.7, textAlign: 'center' }}>
              ✨ Click on any certificate to view full size ✨
            </p>
          </div>
        </section>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>✕</button>
            <img src={selectedCert.image} alt={selectedCert.name} />
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>{selectedCert.name}</p>
          </div>
        </div>
      )}

      <section id="profiles">
        <div className="profiles">
          <div className="card">
            <h2 className="section-title">Online Profiles</h2>
            <div className="profiles-grid">
              <a href="https://learn.microsoft.com/en-gb/users/ameralmonajed-0432/" target="_blank" rel="noopener noreferrer" className="profile-card">
                <i className="fab fa-microsoft"></i>
                <div className="profile-info">
                  <h3>Microsoft Learn</h3>
                  <p>View my certifications and learning path</p>
                </div>
                <span className="profile-arrow">→</span>
              </a>
              <a href="https://www.hackerrank.com/profile/al19842000" target="_blank" rel="noopener noreferrer" className="profile-card">
                <i className="fab fa-hackerrank"></i>
                <div className="profile-info">
                  <h3>HackerRank</h3>
                  <p>View my coding challenges and solutions</p>
                </div>
                <span className="profile-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <div className="social-icons-container">
            <a href="https://github.com/Al-Amer" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
              <FaGithub />
              <span className="icon-label">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/amer-almonajed" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
              <FaLinkedin />
              <span className="icon-label">LinkedIn</span>
            </a>
            <a href="mailto:amer.almonajed@gmx.de" className="footer-icon-link">
              <FaEnvelope />
              <span className="icon-label">Email</span>
            </a>
            <a href="tel:+491735307527" className="footer-icon-link">
              <FaPhone />
              <span className="icon-label">Phone</span>
            </a>
          </div>
          <p>© 2026 Amer Almonajed - Software Engineer | Berlin, Germany</p>
          <br />
          <img src="IconEye.png" className="Icon_Img_large" alt="Icon" />
        </div>
      </footer>
    </div>
  );
}

export default App;

// 