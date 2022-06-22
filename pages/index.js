// import react hooks
import { useState } from "react";

// import components
import DataBox from "../components/dataBox";

export default function Home() {
  const [userLocation, setUserLocation] = useState([
    false,
    {
      latitude: 0,
      longitude: 0,
    },
  ]);

  const successfulLookup = (res) => {
    setUserLocation([
      true,
      {
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      },
    ]);
  };

  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(successfulLookup);
  };

  return (
    <DataBox
      userLocation={userLocation}
      getLocation={getLocation}
    />
  );
}
