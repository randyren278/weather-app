"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import defaultStates from "../utils/defaultstates";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [airQuality, setAirQuality] = useState({});
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [uvIndex, setUvIndex] = useState({});
  const [geoCodedList, setGeoCodedList] = useState(defaultStates);
  const [inputValue, setInputValue,handle] = useState("");

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`); // Corrected template literal
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data:", error.message);
    }
  };

  const fetchAirQuality = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/pollution?lat=${lat}&lon=${lon}`); // Corrected template literal
      setAirQuality(res.data);
    } catch (error) {
      console.log("Error fetching air pollution data: ", error.message);
    }
  };

  const fetchFiveDayForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/fiveday?lat=${lat}&lon=${lon}`); // Corrected template literal
      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching five day forecast data: ", error.message);
    }
  };

  const fetchUvIndex = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`); // Corrected template literal
      setUvIndex(res.data);
    } catch (error) {
      console.error("Error fetching the UV index:", error);
    }

  };  const handleInput = (e) => {
    setInputValue(e.target.value);

    if (e.target.value === "") {
      setGeoCodedList(defaultStates);
    }
  };




  useEffect(() => {
    const defaultLat = 40.4165; // Default latitude
    const defaultLon = -3.7026; // Default longitude
    fetchForecast(defaultLat, defaultLon);
    fetchAirQuality(defaultLat, defaultLon);
    fetchFiveDayForecast(defaultLat, defaultLon);
    fetchUvIndex(defaultLat, defaultLon); // Added call to fetch UV index
  }, []);

  return (
    <GlobalContext.Provider
      value={{ forecast, airQuality, fiveDayForecast, uvIndex, geoCodedList,inputValue }}
    >
      <GlobalContextUpdate.Provider
        value={{ setForecast, setAirQuality, setFiveDayForecast, setUvIndex }}
      >
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
