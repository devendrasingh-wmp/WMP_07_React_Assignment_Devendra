import React from 'react';


const StateDropdown = ({ states, selectedState, onSelectState }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="state">State:</label>
      <select
        id="state"
        value={selectedState}
        onChange={(e) => onSelectState(e.target.value)}
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.state_code} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateDropdown;
