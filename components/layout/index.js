// import style
import Navbar from "./navbar";
import classes from "./style.module.scss";

// import's next options
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={classes.main}>
      <Head>
        <title>من چی میدونم؟</title>
        <meta
          name="description"
          content="من چی میدونم؟ تو این صفحه میتونیدد اطلاعاتی که یه صفحه وب میتونه از شما داشته باشه رو ببینید :D"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
