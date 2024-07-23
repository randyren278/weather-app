import AirPollution from "./components/AirPollution/AirPollution";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import Sunset from "./components/Sunset/Sunset";
import Compass from "./components/compass/Compass";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import UvIndex from "./components/Uvindex/Uvindex";
import Population from "./components/Population/Population";
import FeelsLike from "./components/FeelsLike/FeelsLike";
import Humidity from "./components/Humidity/Humidity";
import FiveDayForecast from "./components/FiveDayForecast/FiveDayForecast";
import Visibility from "./components/Visibility/Visibility";
import Pressure from "./components/Pressure/Pressure";
import MapBox from "./components/MapBox/MapBox";
import defaultstates from "./utils/defaultstates";

export default function Home() {
  return (
    <main className="mx-[1-rem] lg:mx-[2-rem] x1:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Compass />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            <MapBox />
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultstates.map((state, index) => {
                  return (
                    <div
                      key={index} className="border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none">
                      <p className="px-6 py-4">{state.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          Made by
          <a href="https://www.linkedin.com/in/randyren278/"
            target="_blank"
            className="font-bold">
            Randy
          </a>
          


        </p>

      </footer>
    </main>
  );
}
