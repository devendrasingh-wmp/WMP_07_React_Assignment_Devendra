import React from 'react'; // Importing React library

/**
 * A dropdown component for selecting a city from a list of cities.
 *
 * @param {Array} cities - Array of city names to populate the dropdown options.
 * @param {string} selectedCity - Currently selected city.
 * @param {function} onSelectCity - Callback function to handle city selection change.
 *
 * @returns {JSX.Element} The rendered dropdown component.
 */
const CityDropdown = ({ cities, selectedCity, onSelectCity }) => {
  return (
    <div className="dropdown-container"> 
      <label htmlFor="city">City:</label> {/* Label for the dropdown */}
      
      <select
        id="city" 
        value={selectedCity} 
        onChange={(e) => onSelectCity(e.target.value)} // Callback when a city is selected
      >
        {/* Default placeholder option */}
        <option value="">Select a city</option>

        {/* Map over the cities array to create dropdown options */}
        {cities.map((city, index) => (
          <option key={index} value={city}> {/* Each city as an option */}
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown; // Export the component for use in other parts of the application
