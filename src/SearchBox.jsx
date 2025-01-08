import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudIcon from "@mui/icons-material/Cloud";
import {useState} from "react";
import { TransgenderTwoTone } from "@mui/icons-material";
import "./SearchBox.css";

export default function SearchBox() {
    const[city, setCity] = useState("");
    const[submitted, setSubmittedData] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
    }

    const submittedData = () => {
        setSubmittedData(city);
    }

  return (
    <div className="searchBox">
      <h1>Search for weather based on city!</h1>
      <form action="" onSubmit={submittedData}>
        <TextField
            className="input"
          id="city"
          label="City"
          variant="outlined"
          
          value={city}
          onChange={handleChange}
          required
        />
        <Button  type="submit" variant="contained"  onClick={handleClick} className="button">
          Search
        </Button>
      </form>
    </div>
  );
}
