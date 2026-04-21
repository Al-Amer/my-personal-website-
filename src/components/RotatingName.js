import React from 'react';

const RotatingName = () => {
  return (
    <>
      <style jsx="true">{`
        .rotating-name-container {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        .name-3d {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: rotate3d 8s ease-in-out infinite;
        }
        @keyframes rotate3d {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(10deg) rotateX(5deg); }
          75% { transform: rotateY(-10deg) rotateX(-5deg); }
        }
        .name-wrapper {
          position: relative;
          z-index: 10;
        }
        .glowing-name {
          font-size: 4rem;
          font-weight: bold;
          background: linear-gradient(135deg, #a855f7, #e879f9, #60a5fa, #a855f7);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 3s ease infinite, textGlow 2s ease-in-out infinite;
          text-align: center;
          letter-spacing: 4px;
          margin: 0;
          padding-bottom :220px;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(232, 121, 249, 0.5); }
        }
        .name-shadow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #a855f7, #e879f9);
          filter: blur(40px);
          opacity: 0.3;
          z-index: -1;
          animation: shadowPulse 3s ease-in-out infinite;
        }
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.2; filter: blur(30px); }
          50% { opacity: 0.5; filter: blur(50px); }
        }
        .orbiting-rings {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ring {
          position: absolute;
          border: 2px solid rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: orbit linear infinite;
        }
        .ring-0 {
          width: 450px;
          height: 450px;
        }
        .ring-1 {
          width: 500px;
          height: 500px;
          animation-duration: 8s;
          border-color: rgba(168, 85, 247, 0.8);
        }
        .ring-2 {
          width: 600px;
          height: 600px;
          animation-duration: 12s;
          animation-direction: reverse;
          border-color: rgba(232, 121, 249, 0.6);
        }
        .ring-3 {
          width: 700px;
          height: 700px;
          animation-duration: 16s;
          border-color: rgba(96, 165, 250, 0.5);
          border-style: dashed;
        }
        .ring-4 {
          width: 800px;
          height: 800px;
          animation-duration: 20s;
          animation-direction: reverse;
          border-color: rgba(150, 79, 161, 0.6);
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #a855f7, #e879f9);
          border-radius: 50%;
          animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px) scale(0); opacity: 0; }
        }
        @media (max-width: 768px) {
          .glowing-name { font-size: 2rem; letter-spacing: 2px; }
          .ring-1 { width: 200px; height: 200px; }
          .ring-2 { width: 280px; height: 280px; }
          .ring-3 { width: 360px; height: 360px; }
          .ring-4 { width: 440px; height: 440px; }
        }
      `}</style>
      <h1 className="glowing-name">AMER ALMONAJED</h1>
      <div className="rotating-name-container">
        <div className="name-3d">
          <div className="name-wrapper">
            {/* <h1 className="glowing-name">AMER ALMONAJED</h1> */}
            <div className="name-shadow"></div>
          </div>
          <div className="orbiting-rings">
            <img className='ring ring-0' src='IMG_5531.jpg' alt='Image'/>
            <div className="ring ring-1">R
            </div>
            <div className="ring ring-2">E</div>
            <div className="ring ring-3">M</div>
            <div className="ring ring-4">A</div>
          </div>
          <div className="floating-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="floating-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingName;