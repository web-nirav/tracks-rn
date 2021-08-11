import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://483d016e0012.ngrok.io",
});

// this use function will take 2 arguments
instance.interceptors.request.use(
  // autometically calls anytime we are about to make a request
  async (config) => {
    // it will take config object and we can modify it
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  // calls if there is any error making request, may be no internet connection
  (err) => {
    return Promise.reject(err); // kind of throwing an exception in php
  }
);

export default instance;
