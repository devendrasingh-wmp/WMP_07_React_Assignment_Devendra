import axios from "axios"; // Importing the axios library for making HTTP requests
import { PostSelectorAPI } from "../utils/api"; // Importing the base API endpoint for post selection

/**
 * Create a custom axios instance with a predefined base URL and response interceptors.
 */
const instance = axios.create({
  baseURL: PostSelectorAPI, // Base URL for all requests made using this instance
});



/**
 * Interceptors for handling responses and errors.
 * 
 * - `response` interceptor: Directly returns the response if the API call is successful.
 * - `error` interceptor: Logs the error and rejects the promise to propagate the error.
 */
instance.interceptors.response.use(
  (response) => {
    // On success, simply return the response object
    return response;
  },
  (error) => {
    // Log the error for debugging and monitoring purposes
    console.error("API Error:", error);

    // Reject the promise to propagate the error to the calling code
    return Promise.reject(error);
  }
);

// Export the configured axios instance for use in other parts of the application
export default instance;
