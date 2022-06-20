// import style
import classes from "./style.module.scss";

// import icons
import { GoDeviceDesktop } from "react-icons/go";
import { FaInternetExplorer, FaChrome } from "react-icons/fa";
import { CgBattery } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";

const DataBox = ({
  os,
  resolution,
  userData,
  batteryStatus,
  fontsArr,
  getLocation,
  userLocation,
}) => {
  return (
    <div className={classes.dataBox}>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات سیستمی</h2>
          <GoDeviceDesktop className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>سیستم عامل : {os}</span>
          <span>
            رزولیشن صفحه نمایش : {resolution.current.height} ×{" "}
            {resolution.current.width}
          </span>
          <span>
            رزولیشن قابل استفاده نمایش : {resolution.available.height} ×{" "}
            {resolution.available.width}
          </span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات سرویس اینترنت</h2>
          <FaInternetExplorer className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>سرویس ارائه دهنده اینترنت : {userData.isp.name ? userData.isp.name : "نامشخص"}</span>
          <span>دامنه : {userData.isp.domain ? userData.isp.domain  : "نامشخص"}</span>
          <span>نوع : {userData.isp.type}</span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>وضعیت باتری</h2>
          <CgBattery className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>درصد شارژ باتری : {batteryStatus.level * 100 + "%"} </span>
          <span>
            باتری در حال شارژ است؟ {batteryStatus.charging ? "بله" : "خیر"}
          </span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اتصالات و مرورگر</h2>
          <FaChrome className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>پروکسی فعال است؟ : {userData.isProxy ? "بله" : "خیر"}</span>
          <span>فیلترشکن فعال است؟ : {userData.isVPN ? "بله" : "خیر"}</span>
          <span>نام مرورگر : {userData.browser.name}</span>
          <span>نسخه مرورگر : {userData.browser.version}</span>
          <span>فونت های قابل اجرای ما در مرورگر شما : {fontsArr.join(" , ")}</span>
        </div>
      </div>
      <div className={classes.dataSection}>
        <div className={classes.titleBox}>
          <h2>اطلاعات مکانی سرور</h2>
          <BiWorld className={classes.icon} />
        </div>
        <div className={classes.details}>
          <span>آیپی : {userData.ip}</span>
          <span>قاره : {userData.continent}</span>
          <span>کشور : {userData.country}</span>
        </div>
        <iframe
          className={classes.location}
          src={`https://map.parsijoo.ir/API.html?lat=${userData.coordinates.latitude}&lon=${userData.coordinates.longitude}&zoom=8&m=1`}
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
