import React, { useState } from "react";

const User = React.createContext({
  // userData like ip, isp connection and ...
  userData: {},
  setUserData: () => {},

  // user battery status like charge number and isCharging
  batteryStatus: {},
  setBatteryStatus: () => {},

  // user os
  operatingSystem: {},
  setOperatingSystem: () => {},

  // user resolution device
  resolution: {},
  setResolution: () => {},
});

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({});

  const [batteryStatus, setBatteryStatus] = useState({});

  const [operatingSystem, setOperatingSystem] = useState("نامشخص");

  // const [fontsArr, setFontsArr] = useState([]);

  const [resolution, setResolution] = useState({});

  let context = {
    userData: userData,
    setUserData: setUserData,

    batteryStatus: batteryStatus,
    setBatteryStatus: setBatteryStatus,

    operatingSystem: operatingSystem,
    setOperatingSystem: setOperatingSystem,

    resolution: resolution,
    setResolution: setResolution,
  };

  return <User.Provider value={context}>{props.children}</User.Provider>;
};

export default User;
