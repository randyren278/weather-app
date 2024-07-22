"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import defaultStates from "../utils/defaultstates";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [airQuality, setAirQuality] = useState({});

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

  useEffect(() => {
    const defaultLat = 40.4165; // Default latitude
    const defaultLon = -3.7026; // Default longitude
    fetchForecast(defaultLat, defaultLon);
    fetchAirQuality(defaultLat, defaultLon);
  }, []);

  return (
    <GlobalContext.Provider value={{ forecast, airQuality }}>
      <GlobalContextUpdate.Provider value={{ setForecast, setAirQuality }}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
