import axios from './axios.interceptor';

// State city selector

import { Country } from '../utils/constant';
import {  CountryWiseStateAPI, StateWiseCityAPI } from '../utils/api';

export const getStates = async () => {
  try {
    const data = {
        country:Country
    }
    const response = await axios.post(CountryWiseStateAPI, data);
    return response.data.data.states;
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
};    

export const getCitiesByState = async (state) => {
  try {
    const data = {
        state : state,
        country: Country
    }
    const response = await axios.post(StateWiseCityAPI, data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};



// Post Selector

export const getPosts = async () => {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
