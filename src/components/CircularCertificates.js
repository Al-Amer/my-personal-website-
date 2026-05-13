import React, { useState, useRef, useEffect } from 'react';

const CircularCertificates = ({ certificates, onSelectCert }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);

  const radius = 200; // Radius of the circle
  const itemCount = certificates.length;
  const angleStep = (2 * Math.PI) / itemCount;

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    setRotation(prev => prev + delta * 30);
    const newIndex = (activeIndex + delta + itemCount) % itemCount;
    setActiveIndex(newIndex);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 20) {
      const direction = deltaX > 0 ? -1 : 1;
      setRotation(prev => prev + direction * 30);
      const newIndex = (activeIndex + direction + itemCount) % itemCount;
      setActiveIndex(newIndex);
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [activeIndex]);

  return (
    <div className="circular-container">
      <div 
        className="circular-carousel"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="circular-items"
          style={{
            transform: `rotate(${rotation}deg)`
          }}
        >
          {certificates.map((cert, index) => {
            const angle = index * angleStep + (rotation * Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = index === activeIndex;
            
            return (
              <div
                key={cert.id}
                className={`circular-item ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transition: isDragging ? 'none' : 'all 0.3s ease'
                }}
                onClick={() => onSelectCert(cert)}
              >
                <div className="circular-icon">📜</div>
                <div className="circular-name">{cert.name}</div>
                {isActive && <div className="circular-glow"></div>}
              </div>
            );
          })}
        </div>
        
        {/* Center display for selected certificate */}
        <div className="circular-center">
          <div className="center-icon">🎓</div>
          <div className="center-text">
            {certificates[activeIndex]?.name}
          </div>
          <div className="center-hint">
            Click to view full certificate
          </div>
        </div>
      </div>
      
      <div className="circular-controls">
        <button 
          className="circular-nav-btn"
          onClick={() => {
            setRotation(prev => prev - 45);
            setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
          }}
        >
          ◀ Previous
        </button>
        <span className="circular-counter">
          {activeIndex + 1} / {itemCount}
        </span>
        <button 
          className="circular-nav-btn"
          onClick={() => {
            setRotation(prev => prev + 45);
            setActiveIndex((prev) => (prev + 1) % itemCount);
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default CircularCertificates;