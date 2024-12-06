import React from 'react';

/**
 * Displays the selected state and city.
 *
 * @param {string} selectedState - The currently selected state.
 * @param {string} selectedCity - The currently selected city.
 */
const SelectionDisplay = ({ selectedState, selectedCity }) => {
  return (
    <div className="selection-display">
      <h3>Selected Location:</h3>
      {/* Display "None" if no state is selected */}
      <p>State: {selectedState || "None"}</p>
      {/* Display "None" if no city is selected */}
      <p>City: {selectedCity || "None"}</p>
    </div>
  );
};

export default SelectionDisplay;
