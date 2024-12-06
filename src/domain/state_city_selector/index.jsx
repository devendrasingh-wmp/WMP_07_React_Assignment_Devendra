import React, { useState, useEffect } from 'react';
import StateDropdown from './StateDropdown';
import CityDropdown from './CityDropdown';
import SelectionDisplay from './SelectionDisplay';
import { getStates, getCitiesByState } from '../../services/api.services';
import './StateCitySelector.css';

// The main component for selecting a state and a city.
const StateCitySelector = () => {
  // State to store the list of available states.
  const [states, setStates] = useState([]);
  
  // State to store the currently selected state.
  const [selectedState, setSelectedState] = useState("");
  
  // State to store the list of cities for the selected state.
  const [cities, setCities] = useState([]);
  
  // State to store the currently selected city.
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch the list of states when the component hits.
  useEffect(() => {
    getStates().then((data) => setStates(data)); // Calls the API to get the list of states.
  }, []); 

  // Fetch the list of cities when the selected state changes.
  useEffect(() => {
    if (selectedState) {

      // If a state is selected, fetch its cities.
      getCitiesByState(selectedState).then((data) => setCities(data));
    } else {

      // If no state is selected, clear the cities list.
      setCities([]);
    }
  }, [selectedState]); 

  return (
    <div className="state-city-selector">
      {/* Header of the component */}
      <h1>State and City Selector</h1>

      {/* Dropdown for selecting a state */}
      <div className="dropdown-container">
        <StateDropdown
          states={states} // Pass the list of states to the dropdown.
          selectedState={selectedState} 
          onSelectState={setSelectedState} // Callback to update the selected state.
        />
      </div>

      {/* Dropdown for selecting a city */}
      <div className="dropdown-container">
        <CityDropdown
          cities={cities} // Pass the list of cities to the dropdown.
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity} // Callback to update the selected city.
        />
      </div>

      {/* Display the selected state and city */}
      <div className="selection-display">
        <SelectionDisplay
          selectedState={selectedState} 
          selectedCity={selectedCity}
        />
      </div>
    </div>
  );
};

export default StateCitySelector;
