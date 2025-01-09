import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(
    {
        image:"https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=",
      city: "Delhi",
      temperature: 20,
      humidity: 80,
      feels: 18,
      max_temp: 20,
      min_temp: 15,
      description: "haze"
    }
  );

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <WeatherInfo info={weatherInfo} />
    </>
  );
}
