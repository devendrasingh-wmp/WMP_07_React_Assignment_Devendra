import React from 'react';

const SelectionDisplay = ({ selectedState, selectedCity }) => {
  return (
    <div>
      <h3>Selected Location:</h3>
      <p>State: {selectedState || "None"}</p>
      <p>City: {selectedCity || "None"}</p>
    </div>
  );
};

export default SelectionDisplay;