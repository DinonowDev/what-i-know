// import react hooks
import { useEffect, useState } from "react";

// import Operations function
import getOS from "../operations/getOS";
import getBatteryStatus from "../operations/getBatteryStatus";
import getFonts from "../operations/getFonts";
import getResolution from "../operations/getResolution";
import getUserData from "../operations/getUserData";

// import components
import DataBox from "../components/dataBox";

export default function Home() {
  const [userData, setUserData] = useState({
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    isp: {
      name: "",
      domain: "",
      type: "",
    },
    ip: "",
    continent: "",
    country: "",
    isTor: false,
    isProxy: false,
    isVPN: false,
    browser: {
      name: "",
      version: 0,
    },
  });

  const [batteryStatus, setBatteryStatus] = useState({
    charging: "نامشخص",
    chargingTime: null,
    dischargingTime: null,
    level: null,
  });

  const [operatingSystem, setOperatingSystem] = useState("نامشخص");

  const [fontsArr, setFontsArr] = useState([]);

  const [resolution, setResolution] = useState({
    current: {
      width: 0,
      height: 0,
    },
    available: {
      width: 0,
      height: 0,
    },
  });

  const [userLocation, setUserLocation] = useState([
    false,
    {
      latitude: 0,
      longitude: 0,
    },
  ]);

  useEffect(() => {
    getUserData(setUserData);
    getResolution(setResolution);
    getFonts(setFontsArr);
    getBatteryStatus(setBatteryStatus);
    getOS(setOperatingSystem);
  }, []);

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
      os={operatingSystem}
      resolution={resolution}
      userData={userData}
      batteryStatus={batteryStatus}
      fontsArr={fontsArr}
      getLocation={getLocation}
    />
  );
}
