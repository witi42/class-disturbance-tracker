import React from 'react';

function Tier({ tier, names, vote, removeName }) {
  return (
    <div className={`tier tier-${tier}`}>
      <h2>Tier {tier}</h2>
      <ul>
        {names.map(name => (
          <li key={name}>
            {name}
            <div className="button-group">
              <button onClick={() => vote(name, 'up')}>↑</button>
              <button onClick={() => vote(name, 'down')}>↓</button>
              <button onClick={() => removeName(name)} className="remove-btn">×</button>
            </div>
            {tier === 1 && <span className="punishment"> Punishment!</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tier;
