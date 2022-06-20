// import axios library for req
import axios from "axios";

const getUserData = (setUserData) => {
  axios
    .get(`https://api.ipregistry.co/?key=j8690vabf4x7yfsp`)
    .then((response) => {
      let res = response.data;

      setUserData({
        coordinates: {
          latitude: res.location.latitude,
          longitude: res.location.longitude,
        },
        isp: {
          name: res.company.name,
          domain: res.company.domain,
          type: res.company.type,
        },
        ip: res.ip,
        continent: res.location.continent.name,
        country: res.location.country.name,
        isProxy: res.security.is_proxy,
        isTor: res.security.is_tor,
        isVPN: res.security.is_vpn,
        browser: {
          name: res.user_agent.name,
          version: res.user_agent.version,
        },
      });
    })
    .catch((error) => {
      console.error(error)
    });
};

export default getUserData;
