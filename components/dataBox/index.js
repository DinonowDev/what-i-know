// import style
import classes from "./style.module.scss";

// import icons
import { GoDeviceDesktop } from "react-icons/go";
import { FaInternetExplorer, FaChrome } from "react-icons/fa";
import { CgBattery } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";

// import context
import User from "../../context/data";
import { useContext } from "react";

const DataBox = ({ getLocation, userLocation }) => {
  const dataContext = useContext(User);

  return (
    <div className={classes.dataBox}>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات سیستمی</h2>
          <GoDeviceDesktop className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>سیستم عامل : {dataContext.operatingSystem}</span>
          <span>
            رزولیشن صفحه نمایش : {dataContext.resolution.current.height} ×{" "}
            {dataContext.resolution.current.width}
          </span>
          <span>
            رزولیشن قابل استفاده نمایش :{" "}
            {dataContext.resolution.available.height} ×{" "}
            {dataContext.resolution.available.width}
          </span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات سرویس اینترنت</h2>
          <FaInternetExplorer className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>
            سرویس ارائه دهنده اینترنت :{" "}
            {dataContext.userData.isp.name
              ? dataContext.userData.isp.name
              : "نامشخص"}
          </span>
          <span>
            دامنه :{" "}
            {dataContext.userData.isp.domain
              ? dataContext.userData.isp.domain
              : "نامشخص"}
          </span>
          <span>نوع : {dataContext.userData.isp.type}</span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>وضعیت باتری</h2>
          <CgBattery className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>
            درصد شارژ باتری : {dataContext.batteryStatus.level * 100 + "%"}{" "}
          </span>
          <span>
            باتری در حال شارژ است؟{" "}
            {dataContext.batteryStatus.charging ? "بله" : "خیر"}
          </span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اتصالات و مرورگر</h2>
          <FaChrome className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>
            پروکسی فعال است؟ : {dataContext.userData.isProxy ? "بله" : "خیر"}
          </span>
          <span>
            فیلترشکن فعال است؟ : {dataContext.userData.isVPN ? "بله" : "خیر"}
          </span>
          <span>نام مرورگر : {dataContext.userData.browser.name}</span>
          <span>نسخه مرورگر : {dataContext.userData.browser.version}</span>
          {/* <span>فونت های قابل اجرای ما در مرورگر شما : {fontsArr.join(" , ")}</span> */}
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات مکانی سرور</h2>
          <BiWorld className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>آیپی : {dataContext.userData.ip}</span>
          <span>قاره : {dataContext.userData.continent}</span>
          <span>کشور : {dataContext.userData.country}</span>
        </div>
        <iframe
          className={classes.location}
          src={`https://map.parsijoo.ir/API.html?lat=${dataContext.userData.coordinates.latitude}&lon=${dataContext.userData.coordinates.longitude}&zoom=8&m=1`}
        ></iframe>
      </div>
      {userLocation[0] && (
        <div className={classes.dataSection}>
          <div className={classes.titleBox}>
            <h2>اطلاعات مکانی کاربر</h2>
            <BiWorld className={classes.icon} />
          </div>
          <div className={classes.details}>
            <span>طول جغرافیایی : {userLocation[1].longitude}</span>
            <span>عرض جغرافیایی : {userLocation[1].latitude}</span>
          </div>
          <iframe
            className={classes.location}
            src={`https://map.parsijoo.ir/API.html?lat=${userLocation[1].latitude}&lon=${userLocation[1].longitude}&zoom=8&m=1`}
          ></iframe>
        </div>
      )}
      {userLocation[0] || (
        <button className={classes.getAccessLocation} onClick={getLocation}>
          دریافت لوکیشن
        </button>
      )}
    </div>
  );
};

export default DataBox;
