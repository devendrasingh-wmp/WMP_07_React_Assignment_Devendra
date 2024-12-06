import React from 'react';

/**
 * Dropdown component for selecting a state.
 *
 * @param {Array} states - List of states with their details.
 * @param {string} selectedState - Currently selected state.
 * @param {function} onSelectState - Callback to handle state selection.
 */
const StateDropdown = ({ states, selectedState, onSelectState }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="state">State:</label>
      <select
        id="state"
        value={selectedState} // Controlled component for the selected state
        onChange={(e) => onSelectState(e.target.value)} // Triggers when a state is selected
      >
        <option value="">Select-a-state</option>
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
