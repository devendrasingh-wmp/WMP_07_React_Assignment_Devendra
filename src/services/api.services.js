import axios from './axios.interceptor'; // Custom axios instance with interceptors

// Importing constants and API endpoints
import { Country } from '../utils/constant'; // Country constant to specify the country for API calls
import {  APIUrl, CountryWiseStateAPI, StateWiseCityAPI } from '../utils/api'; // API endpoints for fetching states and cities

/**
 * Fetches states based on the specified country.
 * 
 * @returns {Promise<Array>} - List of states, or an empty array if an error occurs.
 */
export const getStates = async () => {
  try {
    // Preparing the payload with the selected country
    const data = {
      country: Country, 
    };

    // Sending a POST request to fetch states for the given country
    const response = await axios.post(CountryWiseStateAPI, data);

    // Extracting and returning the states data from the response
    return response.data.data.states;
  } catch (error) {
    // Log error in case of failure and return an empty array
    console.error("Error fetching states:", error);
    return [];
  }
};

/**
 * Fetches cities based on the specified state and country.
 * 
 * @param {string} state - The name or identifier of the state.
 * @returns {Promise<Array>} - List of cities, or an empty array if an error occurs.
 */
export const getCitiesByState = async (state) => {
  try {
    // Preparing the payload with state and country details
    const data = {
      state: state, 
      country: Country, 
    };

    const response = await axios.post(StateWiseCityAPI, data);

    // Extracting and returning the cities data from the response
    return response.data.data;
  } catch (error) {
    // Log error in case of failure and return an empty array
    console.error("Error fetching cities:", error);
    return [];
  }
};

/**
 * Fetches all posts from the server.
 * 
 * @returns {Promise<Array>} - List of posts, or an empty array if an error occurs.
 */
export const getPosts = async () => {
  try {
    // Sending a GET request to fetch posts
    const response = await axios.get(APIUrl.post);

    // Returning the posts data from the response
    return response.data;
  } catch (error) {
    // Log error in case of failure and return an empty array
    console.error("Error fetching posts:", error);
    return [];
  }
};
