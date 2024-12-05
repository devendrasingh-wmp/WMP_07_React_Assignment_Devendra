import React, { useState, useEffect } from 'react';
import StateDropdown from './StateDropdown';
import CityDropdown from './CityDropdown';
import SelectionDisplay from './SelectionDisplay';
import { getStates, getCitiesByState } from '../../services/api.services';
import './StateCitySelector.css';

const StateCitySelector = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    getStates().then((data) => setStates(data));
  }, []);

  useEffect(() => {
    if (selectedState) {
      getCitiesByState(selectedState).then((data) => setCities(data));
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <div className="state-city-selector">
      <h1>State and City Selector</h1>
      <div className="dropdown-container">
        <StateDropdown
          states={states}
          selectedState={selectedState}
          onSelectState={setSelectedState}
        />
      </div>
      <div className="dropdown-container">
        <CityDropdown
          cities={cities}
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
        />
      </div>
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
