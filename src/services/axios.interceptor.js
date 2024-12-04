import axios from "axios";
import { PostSelectorAPI } from "../utils/api";

const instance = axios.create({
    baseURL: PostSelectorAPI,
  });
  
  instance.interceptors.response.use(
   (response) => {
        return response;
    },
    (error) => {
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  );
  
  export default instance