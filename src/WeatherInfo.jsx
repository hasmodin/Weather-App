import "./WeatherInfo.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function WeatherInfo({ info }) {
  let COLD_URL =
    "https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let HOT_URL =
    "https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let SNOW_URL =
    "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // let info = {
  //         image:"",
  //         City: "Doha",
  //         Temperature: "20dc",
  //         Humidity: 80,
  //         Feels : 18,
  //         Max_Temp: 30,
  //         Min_Temp: 15,
  //         Description: "Haze",
  //     }
  return (
    <>
    
    <div className="WeatherInfo">
      <div className="card">
        <img src={info.temperature > 20  ? HOT_URL : COLD_URL  } alt="" />
        <p>City : {info.city} {info.temperature > 20 ? <WbSunnyIcon />:<AcUnitIcon/>}</p>
        <p> Temperature: {info.temperature}&deg;C</p>
        <p>Humidity: {info.humidity}</p>
        <p>Feels: {info.feels}</p>
        <p>Max-Temp: {info.max_temp}</p>
        <p>Min-Temp: {info.min_temp}</p>
        <p>Description: {`The weather is currently ${info.description}.`}</p>
      </div>
    </div>
    <br /><br /><br /><br />
    </>
  );
}
