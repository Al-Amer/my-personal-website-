import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      <style jsx="true">{`
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .gradient-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          animation: gradientShift 10s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255,0,0,0.1), rgba(255,165,0,0.1), rgba(255,255,0,0.1), rgba(0,255,0,0.1), rgba(0,0,255,0.1), rgba(75,0,130,0.1), rgba(238,130,238,0.1));
          background-size: 200% 100%;
          animation: rainbowMove 8s linear infinite;
        }
        @keyframes rainbowMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .particle {
          position: absolute;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
          filter: blur(2px);
        }
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      <div className="animated-bg">
        <div className="gradient-bg"></div>
        <div className="rainbow-overlay"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${3 + Math.random() * 8}px`,
              height: `${3 + Math.random() * 8}px`
            }}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;