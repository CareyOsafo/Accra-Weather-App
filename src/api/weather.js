import axios from "axios";
import { a5f0f99faa734289a2b190853241202 } from "../constants";

const forecastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/current.json?key=a5f0f99faa734289a2b190853241202&q=Accra&aqi=no`;
const locationsEndpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${a5f0f99faa734289a2b190853241202}&q=${params.cityName}`;
const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchWeatherForecast = (params) => {
  let forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = (params) => {
  let locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};
