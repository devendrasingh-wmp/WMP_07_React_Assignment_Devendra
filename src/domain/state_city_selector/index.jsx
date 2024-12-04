import React, { useState, useEffect } from 'react';
import StateDropdown from './StateDropdown';
import CityDropdown from './CityDropdown';
import SelectionDisplay from './SelectionDisplay';
import { getStates, getCitiesByState } from '../../services/api.services';

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
    <div>
      <h1>State and City Selector</h1>
      <StateDropdown
        states={states}
        selectedState={selectedState}
        onSelectState={setSelectedState}
      />
      <CityDropdown
        cities={cities}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      />
      <SelectionDisplay
        selectedState={selectedState}
        selectedCity={selectedCity}
      />
    </div>
  );
};
export default StateCitySelector;