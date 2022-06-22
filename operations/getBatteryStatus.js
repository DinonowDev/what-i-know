// get user battery status

const batteryStatus = (dataContext) => {
  window.navigator.getBattery().then((res) => {
    dataContext.setBatteryStatus({
      // is charging device
      charging: res.charging,
      chargingTime: res.chargingTime,
      dischargingTime: res.dischargingTime,
      level: res.level,
    });
  });
};

export default batteryStatus;
