"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import React, { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { thermo } from "@/app/utils/icons";
import { Progress } from "@/components/ui/progress";
import { airQualityIndexText } from "@/app/utils/misc";


function AirPollution() {
  const { airQuality } = useGlobalContext();

  useEffect(() => {
    console.log('Air Quality Data:', airQuality);
  }, [airQuality]);

  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const airQualityIndex = airQuality.list[0].main.aqi * 10;

  const filteredIndex = airQualityIndexText.find((item) => {
    return item.rating === airQualityIndex;
  });


  return (
    <div
      className="air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air Pollusion
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress" />
      <p className="text-sm">Air quality is {filteredIndex?.description}. </p>
    </div>
  );
}

export default AirPollution;