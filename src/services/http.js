import axios from "axios";

const API_ENDPOINT = "https://api.weatherapi.com/v1";
const API_KEY = "1cf26c51d8d84e93ab185800231306";

const http = axios.create({
   baseURL: API_ENDPOINT,
   headers: {
      "Content-Type": "application/json",
   },
   params: {
      key: API_KEY,
   },
});

export const Get = async (url, params = {}) => {
   try {
      const response = await http.get(url, {params});
      return response.data;
   } catch (error) {
      console.error(error);
   }
};

const https = {Get};

export default https;
