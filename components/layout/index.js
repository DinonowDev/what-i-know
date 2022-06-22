import { useEffect, useContext } from "react";

// import style
import classes from "./style.module.scss";

// import's next options
import Head from "next/head";
import Image from "next/image";

// import comps
import Footer from "./footer";
import Navbar from "./navbar";

// import loading gif
import LoadingGif from "../../assets/loading.gif";

// import Operations function
import getOS from "../../operations/getOS";
import getBatteryStatus from "../../operations/getBatteryStatus";
// import getFonts from "../../operations/getFonts";
import getResolution from "../../operations/getResolution";
import getUserData from "../../operations/getUserData";

// import context
import Loading from "../../context/loading";
import User from "../../context/data";

const Layout = ({ children }) => {
  // set Contexts
  const loadingContext = useContext(Loading);
  const dataContext = useContext(User);

  useEffect(() => {
    getUserData({ loadingContext, dataContext });
    getResolution(dataContext);
    // getFonts();
    getOS(dataContext);
  }, []);

  useEffect(() => {
    if (
      dataContext?.userData?.browser?.name.includes("Edge") ||
      dataContext?.userData?.browser?.name.includes("Chrome") ||
      dataContext?.userData?.browser?.name.includes("WebView")
    ) {
      console.log("get")
      getBatteryStatus(dataContext);
    }
  }, [dataContext.userData]);

  return (
    <div className={classes.main}>
      <Head>
        <title>من چی میدونم؟</title>
        <meta
          name="description"
          content="من چی میدونم؟ تو این صفحه میتونید اطلاعاتی که یه صفحه وب میتونه از شما داشته باشه رو ببینید."
        />
      </Head>
      {!loadingContext.loading ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <Image src={LoadingGif} />
      )}
    </div>
  );
};

export default Layout;
