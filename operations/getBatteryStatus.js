// get user battery status

const batteryStatus = (setBatteryStatus) => {
  window.navigator.getBattery().then((res) => {
    setBatteryStatus({
      // is charging device 
      charging: res.charging,
      chargingTime: res.chargingTime,
      dischargingTime: res.dischargingTime,
      level: res.level,
    });
  });
};

export default batteryStatus;
