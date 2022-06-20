// import style
import classes from "./style.module.scss";

// import icons
import { FaRegHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <span>
        طراحی و توسعه با <FaRegHeart className={classes.heartIcon} /> توسط
        امیرحسین رضائی
      </span>
    </div>
  );
};

export default Footer;
