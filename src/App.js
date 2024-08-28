import React, { useState } from 'react';
import Tier from './components/Tier';
import './styles.css';

function App() {
  const [tiers, setTiers] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const inputNames = e.target.value.split(',').map(name => name.trim());
      setTiers(prevTiers => ({
        ...prevTiers,
        3: [...prevTiers[3], ...inputNames], // Append new names to Tier 3
      }));
      e.target.value = ''; // Clear input
    }
  };

  const vote = (name, direction) => {
    const currentTier = Object.keys(tiers).find(tier => tiers[tier].includes(name));
    const newTier = direction === 'up' ? Math.min(Number(currentTier) + 1, 4) : Math.max(Number(currentTier) - 1, 1);

    if (newTier !== currentTier) {
      setTiers(prevTiers => ({
        ...prevTiers,
        [currentTier]: prevTiers[currentTier].filter(n => n !== name),
        [newTier]: [...prevTiers[newTier], name],
      }));
    }
  };

  return (
    <div className="App">
      <h1>Class Disturbance Tracker</h1>
      <input type="text" placeholder="Enter names, separated by commas" onKeyPress={handleInput} />
      <div className="tiers">
        {[4, 3, 2, 1].map(tier => (
          <Tier key={tier} tier={tier} names={tiers[tier]} vote={vote} />
        ))}
      </div>
    </div>
  );
}

export default App;
