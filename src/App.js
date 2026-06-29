import React, { useState } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import RotatingName from './components/RotatingName';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
// import CircularCertificates from './components/CircularCertificates';
import GalaxyPortfolio from './components/GalaxyPortfolio';
import ViewToggle from './components/ViewToggle';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [viewMode, setViewMode] = useState('2D'); 


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
    { id: 20, name: 'Design Thinking', image: 'DesignThinking.png' },
    { id: 21, name: 'ANTHROPIC', image: 'certificate_ruenqsobzbre_1780526367.png' },
    { id: 22, name: 'ANTHROPIC', image: 'certificate_xga4rsmcko96_1780515051.png' },
    { id: 23, name: 'ANTHROPIC', image: 'certificate_yc8wkceyurzg_1780513630.png' },
    { id: 24, name: 'Dubai Center for Artificial Intelligence', image: 'certificate1MillionPrompters.png' },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const educationData = (
    <div>
      <div className="timeline-item-enhanced" style={{ marginBottom: '1rem' }}>
        <div className="timeline-year">2025 - 2026</div>
        <h4>WBS CODING SCHOOL | Berlin</h4>
        <p>Software Engineering, Computer Science, Data Structure and Algorithms</p>
        <div className="skill-tags">
          <span className="skill-tag">Python PCEP</span>
          <span className="skill-tag">Azure Fundamentals</span>
        </div>
      </div>
      <div className="timeline-item-enhanced" style={{ marginBottom: '1rem' }}>
        <div className="timeline-year">2020 - 2022</div>
        <h4>FORUM Berufsbildung e.V. | Berlin</h4>
        <p>Java, Database SQL, Network, Windows Server Administration</p>
      </div>
      <div className="timeline-item-enhanced">
        <div className="timeline-year">2002 - 2005</div>
        <h4>KALE TECHNICAL SCHOOL | Greece</h4>
        <p>Electrical Engineering Training</p>
      </div>
    </div>
  );

  const experienceData = (
    <div>
      <div className="exp-card" style={{ marginBottom: '1rem', padding: '0.8rem' }}>
        <h4>Think3DDD | Berlin</h4>
        <p><strong>Fullstack Developer</strong> | 02/2026 - Present</p>
        <div className="skill-tags">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">AI Integration</span>
        </div>
      </div>
      <div className="exp-card" style={{ marginBottom: '1rem', padding: '0.8rem' }}>
        <h4>IBM Client Innovation Center | Magdeburg</h4>
        <p><strong>Software Developer</strong> | 03/2023 - 09/2023</p>
        <div className="skill-tags">
          <span className="skill-tag">Java</span>
          <span className="skill-tag">Spring Boot</span>
          <span className="skill-tag">SQL</span>
        </div>
      </div>
      <div className="exp-card" style={{ marginBottom: '1rem', padding: '0.8rem' }}>
        <h4>Druck und Folie | Berlin</h4>
        <p><strong>Website Developer Intern</strong> | 05/2021 - 03/2022</p>
      </div>
    </div>
  );

  const projectsData = (
    <div>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>DevShare</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Social Dev Resource Hub</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/devshare" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
            <a href="https://devshare-two.vercel.app" target="_blank" style={{ fontSize: '0.7rem' }}>Live Demo</a>
          </div>
        </div>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>PokGameBattle</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Pokémon battle game with React, Node.js</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/PokGameBattle.git" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
            <a href="https://pokemonbattel.netlify.app" target="_blank" style={{ fontSize: '0.7rem' }}>Live Demo</a>
          </div>
        </div>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>ChallengeTracker</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Track daily progress</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/WBS-GroupProject05-ChallengeTracker" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
          </div>
        </div>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>CuttingCalculator</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Android app for measuring metal</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/Cutting-Calculator" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
            <a href="https://www.youtube.com/watch?v=MRNYvNwEjgo" target="_blank" style={{ fontSize: '0.7rem' }}>YouTube</a>
          </div>
        </div>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>Space Invaders</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Classic game recreation</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/Space-Invaders" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
          </div>
        </div>
        <div className="project-card" style={{ padding: '0.8rem', marginBottom: '0.5rem' }}>
          <h4 style={{ color: '#a855f7', marginBottom: '0.3rem' }}>SpeakFUn</h4>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Voice-to-text Android app</p>
          <div className="project-links">
            <a href="https://github.com/Al-Amer/SpeakFun" target="_blank" style={{ fontSize: '0.7rem' }}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );

  const skillsData = (
    <div>
      <h4>Frontend</h4>
      <div className="skill-tags">
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">React</span>
        <span className="skill-tag">TypeScript</span>
      </div>
      <h4>Backend</h4>
      <div className="skill-tags">
        <span className="skill-tag">Node.JS</span>
        <span className="skill-tag">Java/SpringBoot</span>
        <span className="skill-tag">Python</span>
      </div>
      <h4>Languages</h4>
      <div className="skill-tags">
        <span className="skill-tag">🇩🇪 German B2</span>
        <span className="skill-tag">🇬🇧 English B2</span>
        <span className="skill-tag">🇸🇾 Arabic Native</span>
        <span className="skill-tag">🇬🇷 Greek B2</span>
      </div>
    </div>
  );

  const certificatesData = (
    <div>
      <div className="skill-tags">
        {certificates.slice(0, 24).map(cert => (
          <span key={cert.id} className="skill-tag" style={{ cursor: 'pointer' }} onClick={() => openModal(cert)}>
            {cert.name}
          </span>
        ))}
      </div>
    </div>
  );

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

      {/* View Toggle Switch */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />

      {viewMode === '2D' ? (
        /* ===== 2D CLASSIC VIEW ===== */
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
                <div className="stat-label">Languages</div>
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
              <h2 className="section-title">🌟 Beyond the Code</h2>
              <div className="fun-facts-enhanced">
                <div className="fun-fact-card">
                  <div className="fun-fact-icon">✈️</div>
                  <div className="fun-fact-content">
                    <h4>Aviation Enthusiast</h4>
                    <p>Fascinated by the SR-71 Blackbird</p>
                  </div>
                </div>
                <div className="fun-fact-card">
                  <div className="fun-fact-icon">🌍</div>
                  <div className="fun-fact-content">
                    <h4>Polyglot</h4>
                    <p>Fluent in 4 languages</p>
                    <div className="language-bubbles">
                      <span>🇩🇪 Fluent</span>
                      <span>🇬🇧 Fluent</span>
                      <span>🇸🇾 Native</span>
                      <span>🇬🇷 Fluent</span>
                    </div>
                  </div>
                </div>
                <div className="fun-fact-card">
                  <div className="fun-fact-icon">⚽</div>
                  <div className="fun-fact-content">
                    <h4>Active Lifestyle</h4>
                    <p>Sports enthusiast</p>
                  </div>
                </div>
                <div className="fun-fact-card">
                  <div className="fun-fact-icon">📚</div>
                  <div className="fun-fact-content">
                    <h4>Lifelong Learner</h4>
                    <p>Always learning new tech</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education">
            <div className="card">
              <h2 className="section-title">🎓 Education Journey</h2>
              <div className="education-timeline-enhanced">
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot"><span>📘</span></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">2025 - 2026</div>
                    <h3>SOFTWARE ENGINEERING PROGRAM</h3>
                    <h4>WBS CODING SCHOOL | Berlin</h4>
                    <p>Software Engineering, Computer Science, Data Structure and Algorithms</p>
                  </div>
                </div>
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot"><span>💻</span></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">2020 - 2022</div>
                    <h3>SPECIALIST FOR APPLICATION DEVELOPMENT</h3>
                    <h4>FORUM Berufsbildung e.V. | Berlin</h4>
                    <p>Java, Database SQL, Network, Windows Server Administration</p>
                  </div>
                </div>
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot"><span>⚡</span></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">2002 - 2005</div>
                    <h3>Electrical Engineering Training</h3>
                    <h4>KALE TECHNICAL SCHOOL | Greece - Athens</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience">
            <div className="card">
              <h2 className="section-title">💼 Professional Experience</h2>
              <div className="education-timeline-enhanced">
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot">
                    <span>🚀</span>
                  </div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">02/2026 - 05/2026 </div>
                    <h3>Fullstack Developer</h3>
                    <h4>Think3DDD | Berlin</h4>
                    <p>Python, React, JavaScript, AI Tools, Git, GitLab, Database</p>
                    <div className="timeline-badges">
                      <span className="badge">Python</span>
                      <span className="badge">React</span>
                      <span className="badge">AI Integration</span>
                      <span className="badge">Git</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot">
                    <span>💼</span>
                  </div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">03/2023 - 09/2023</div>
                    <h3>Software Developer</h3>
                    <h4>IBM Client Innovation Center | Magdeburg</h4>
                    <p>Desktop application processing Biometric Data with specific outputs. Tech stack: Java, SQL, Spring Boot, Database</p>
                    <div className="timeline-badges">
                      <span className="badge">Java</span>
                      <span className="badge">Spring Boot</span>
                      <span className="badge">SQL</span>
                      <span className="badge">Biometric Data</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot">
                    <span>🌐</span>
                  </div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">05/2021 - 03/2022</div>
                    <h3>Website Developer Intern</h3>
                    <h4>Druck und Folie | Berlin</h4>
                    <p>WordPress, HTML, CSS, Graphic Design, Java, Database SQL, Network, Windows Server Administration</p>
                    <div className="timeline-badges">
                      <span className="badge">WordPress</span>
                      <span className="badge">HTML/CSS</span>
                      <span className="badge">Java</span>
                      <span className="badge">SQL</span>
                    </div>
                  </div>
                </div>
                <div className="timeline-item-enhanced">
                  <div className="timeline-dot">
                    <span>🎨</span>
                  </div>
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">09/2017 - 03/2020</div>
                    <h3>Media and Print Designer</h3>
                    <h4>TIPOSEME SIGNMAKING | Athens - Berlin</h4>
                    <p>Graphic design and Assembly, combining technical and creative skills</p>
                    <div className="timeline-badges">
                      <span className="badge">Graphic Design</span>
                      <span className="badge">Assembly</span>
                      <span className="badge">Creative Direction</span>
                    </div>
                  </div>
                </div>
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
                  <h3>ChallengeTracker</h3>
                  <p>Platform to create and join challenges, track daily progress</p>
                  <div className="project-links">
                    <a href="https://github.com/Al-Amer/WBS-GroupProject05-ChallengeTracker" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
                <div className="project-card">
                  <h3>CuttingCalculator</h3>
                  <p>Android app written on Android Studio using Java for measuring metal</p>
                  <div className="project-links">
                    <a href="https://github.com/Al-Amer/Cutting-Calculator" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.youtube.com/watch?v=MRNYvNwEjgo" target="_blank" rel="noopener noreferrer">YouTube Demo</a>
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
                  <h3>SpeakFUn</h3>
                  <p>Android application written in Java implementing voice-to-text features</p>
                  <div className="project-links">
                    <a href="https://github.com/Al-Amer/SpeakFun" target="_blank" rel="noopener noreferrer">GitHub</a>
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
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Node.JS</span>
                    <span className="skill-tag">Java/SpringBoot</span>
                    <span className="skill-tag">Python</span>
                  </div>
                </div>
              </div>
              <h3 style={{ marginTop: '1rem', color: '#a855f7' }}>Languages</h3>
              <div className="simple-language-grid">
                <div className="simple-language-item">🇩🇪 German - B2 ⭐⭐⭐⭐☆</div>
                <div className="simple-language-item">🇬🇧 English - B2 ⭐⭐⭐⭐☆</div>
                <div className="simple-language-item">🇸🇾 Arabic - Native ⭐⭐⭐⭐⭐</div>
                <div className="simple-language-item">🇬🇷 Greek - B2 ⭐⭐⭐⭐☆</div>
              </div>
            </div>
          </section>
          {/* <section id="certificates">
            <div className="card">
              <h2 className="section-title">Certificates</h2>
              <CircularCertificates 
                certificates={certificates}
                onSelectCert={(cert) => openModal(cert)}
              />
            </div>
          </section> */}
          <section id="certificates">
            <div className="card">
              <h2 className="section-title">Certificates</h2>
              <div className="certificates-grid-simple">
                {certificates.map(cert => (
                  <div 
                    key={cert.id} 
                    className="cert-item-simple" 
                    onClick={() => openModal(cert)}
                  >
                    <div className="cert-item-icon">📜</div>
                    <div className="cert-item-name">{cert.name}</div>
                    <div className="cert-item-click">Click to view →</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.7, textAlign: 'center' }}>
                ✨ Click on any certificate to open in new window ✨
              </p>
            </div>
          </section>

          <section id="profiles">
            <div className="profiles">
              <div className="card">
                <h2 className="section-title">Online Profiles</h2>
                <div className="profiles-grid">
                  <a href="https://learn.microsoft.com/en-gb/users/ameralmonajed-0432/" target="_blank" className="profile-card">
                    <i className="fab fa-microsoft"></i>
                    <div className="profile-info">
                      <h3>Microsoft Learn</h3>
                      <p>View my certifications</p>
                    </div>
                  </a>
                  <a href="https://www.hackerrank.com/profile/al19842000" target="_blank" className="profile-card">
                    <i className="fab fa-hackerrank"></i>
                    <div className="profile-info">
                      <h3>HackerRank</h3>
                      <p>Coding challenges</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* ===== 3D VIEW ===== */
        <GalaxyPortfolio
          profileImage="IMG_5531.jpg"
          profileName="Amer Almonajed"
          profileTitle="Software Engineer | Full-Stack Developer"
          educationData={educationData}
          experienceData={experienceData}
          projectsData={projectsData}
          skillsData={skillsData}
          certificatesData={certificatesData}
        />
      )}

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>✕</button>
            <img src={selectedCert.image} alt={selectedCert.name} />
            <p>{selectedCert.name}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-text">
          <div className="social-icons-container">
            <a href="https://github.com/Al-Amer" target="_blank" className="footer-icon-link">
              <FaGithub />
              <span className="icon-label">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/amer-almonajed" target="_blank" className="footer-icon-link">
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
          <img src="IconEye.png" className="Icon_Img_large" alt="Icon" />
        </div>
      </footer>
    </div>
  );
}

export default App;