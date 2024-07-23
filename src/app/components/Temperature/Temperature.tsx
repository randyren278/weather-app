"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { kelvintoCelsius } from "@/app/utils/misc";
import React from "react";
import { useState,useEffect } from "react";
import {
    clearSky,
    cloudy,
    drizzleIcon,
    navigation,
    rain,
    snow,
  } from "@/app/utils/icons";
import moment from "moment"
import { Skeleton } from "@/components/ui/skeleton";

function Temperature() {
  const { forecast } = useGlobalContext();

  const { main, timezone, name, weather } = forecast;

  if (!forecast || !weather) {
    return <Skeleton className="h-[25rem] w-full" />;
  }
  

  const temp = kelvintoCelsius(main?.temp);
  const minTemp = kelvintoCelsius(main?.temp_min);
  const maxTemp = kelvintoCelsius(main?.temp_max);

  //state
  const [currentDay, setCurrentDay] = useState<string>("");
  const [localTime, setLocalTime] = useState<string>("");

  const { main: weatherMain, description } = weather[0];


  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      // custom format: 24 hour format
      const formatedTime = localMoment.format("HH:mm:ss");
      const day = localMoment.format("dddd");

      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);

    // clear interval
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div
      className="pt-6 pb-5 px-4 border rounded-lg flex flex-col 
        justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>

      <div>
        <div>
          <span>{getIcon()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex items-center gap-2">
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;