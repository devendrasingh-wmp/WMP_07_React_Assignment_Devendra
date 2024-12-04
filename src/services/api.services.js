import axios from './axios.interceptor';
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
