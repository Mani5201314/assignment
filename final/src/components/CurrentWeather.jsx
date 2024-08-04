import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherComponent() {
  const [temperature, setTemperature] = useState(null);
  const location = "YOUR_LOCATION"; // Specify your location here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tomorrow.io/v4/timelines",
          {
            params: {
              location,
              fields: "temperature",
              units: "metric",
              timesteps: "current",
              apikey: "YOUR_API_KEY",
            },
          }
        );
        const currentTemperature =
          response.data?.data?.timelines[0]?.intervals[0]?.values?.temperature;
        setTemperature(currentTemperature);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [location]); // Include location in the dependency array to refetch data when location changes

  return (
    <div>
      {temperature !== null ? (
        <p>
          Current temperature in {location}: {temperature}°C
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherComponent;
