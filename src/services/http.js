import axios from "axios";

const API_ENDPOINT = "https://api.weatherapi.com/v1";
const API_KEY = "734e29f5cc7b4d2a91a75143232806";

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
      const response = await http.get(url, { params });
      return response.data;
   } catch (error) {
      alert(error.response.data.error.message)
   }
};

const https = { Get };

export default https;
