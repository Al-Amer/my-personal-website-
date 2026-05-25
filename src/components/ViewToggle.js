import React from 'react';

const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="view-toggle-container">
      <button 
        className={`toggle-btn ${viewMode === '2D' ? 'active' : ''}`}
        onClick={() => setViewMode('2D')}
      >
        📄 Classic View
      </button>
      <div className="toggle-divider"></div>
      <button 
        className={`toggle-btn ${viewMode === 'galaxy' ? 'active' : ''}`}
        onClick={() => setViewMode('galaxy')}
      >
        🌌 Galaxy View
      </button>
    </div>
  );
};

export default ViewToggle;