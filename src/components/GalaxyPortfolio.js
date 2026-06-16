import React, { useState, useEffect } from 'react';

const GalaxyPortfolio = ({ 
  profileImage, 
  profileName, 
  profileTitle,
  educationData,
  experienceData,
  projectsData,
  skillsData,
  certificatesData 
}) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [time, setTime] = useState(0);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const planets = [
    { id: 'education', name: 'Education', icon: '🎓', color: '#a855f7', data: educationData, orbitRadius: 180, speed: 0.008 },
    { id: 'experience', name: 'Experience', icon: '💼', color: '#e879f9', data: experienceData, orbitRadius: 240, speed: 0.006 },
    { id: 'projects', name: 'Projects', icon: '🚀', color: '#60a5fa', data: projectsData, orbitRadius: 300, speed: 0.005 },
    { id: 'skills', name: 'Skills', icon: '⚙️', color: '#2ec866', data: skillsData, orbitRadius: 360, speed: 0.004 },
    { id: 'certificates', name: 'Certificates', icon: '📜', color: '#fbbf24', data: certificatesData, orbitRadius: 420, speed: 0.003 }
  ];

  // Animation loop for orbits
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    
    const animate = (currentTime) => {
      if (lastTime !== 0) {
        setTime(prev => prev + 0.016);
      }
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const getPlanetPosition = (radius, speed) => {
    const angle = time * speed * 2 * Math.PI;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(selectedPlanet?.id === planet.id ? null : planet);
  };

  return (
    <div className="galaxy-container">
      {/* Simple Stars Background */}
      <div className="galaxy-bg"></div>
      <div className="stars-container">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="star-simple" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`
          }} />
        ))}
      </div>

      <div className="central-planet">
        <div className="central-glow"></div>
        <div className="central-image">
          <img src={profileImage} alt={profileName} />
        </div>
        <div className="central-info">
          <h1>{profileName}</h1>
          <p>{profileTitle}</p>
        </div>
        {/* Decorative rings around center */}
        <div className="central-ring ring-1"></div>
        <div className="central-ring ring-2"></div>
        <div className="central-ring ring-3"></div>
      </div>

      <div className="planets-orbit-container">
        {planets.map((planet) => {
          const position = getPlanetPosition(planet.orbitRadius, planet.speed);
          const isSelected = selectedPlanet?.id === planet.id;
          
          return (
            <div key={planet.id}>
              {/* Orbit line - shows the path */}
              <div 
                className="orbit-line"
                style={{
                  width: planet.orbitRadius * 2,
                  height: planet.orbitRadius * 2,
                  border: '1px dashed rgba(168,85,247,0.3)',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              />
              <div 
                className={`planet-visible ${hoveredPlanet === planet.id ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                  width: '80px',
                  height: '80px',
                  marginLeft: '-40px',
                  marginTop: '-40px',
                  background: `radial-gradient(circle at 35% 35%, ${planet.color}, ${planet.color}cc)`,
                  border: `2px solid ${planet.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 25,
                  boxShadow: `0 0 20px ${planet.color}80`,
                  backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
                onClick={() => handlePlanetClick(planet)}
              >
                <div className="planet-icon-large" style={{ fontSize: '2rem', marginBottom: '0.2rem' }}>{planet.icon}</div>
                <div className="planet-name-label" style={{ fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'center', background: 'rgba(0,0,0,0.7)', padding: '0.2rem 0.5rem', borderRadius: '15px', color: 'white' }}>{planet.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Planet Info Panel */}
      {selectedPlanet && (
        <div className="planet-info-panel">
          <div className="planet-info-header" style={{ background: `linear-gradient(135deg, ${selectedPlanet.color}, ${selectedPlanet.color}99)`, display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem' }}>
            <span className="planet-info-icon" style={{ fontSize: '1.8rem' }}>{selectedPlanet.icon}</span>
            <h2 style={{ flex: 1, margin: 0, fontSize: '1.2rem', color: 'white' }}>{selectedPlanet.name}</h2>
            <button className="planet-info-close" onClick={() => setSelectedPlanet(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', fontSize: '0.8rem' }}>✕</button>
          </div>
          <div className="planet-info-content" style={{ padding: '1rem', maxHeight: '300px', overflowY: 'auto', fontSize: '0.85rem', color: '#cbd5e1' }}>
            {selectedPlanet.data}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalaxyPortfolio;