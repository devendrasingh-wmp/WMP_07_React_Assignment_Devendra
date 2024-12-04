import React from 'react';

const CityDropdown = ({ cities, selectedCity, onSelectCity }) => {
  return (
    <div>
      <label htmlFor="city">City:</label>
      <select
        id="city"
        value={selectedCity}
        onChange={(e) => onSelectCity(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map((city,index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;