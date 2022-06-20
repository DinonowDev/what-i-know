// import style
import Navbar from "./navbar";
import classes from "./style.module.scss";

// import's next options
import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className={classes.main}>
      <Head>
        <title>من چی میدونم؟</title>
        <meta
          name="description"
          content="من چی میدونم؟ تو این صفحه میتونید اطلاعاتی که یه صفحه وب میتونه از شما داشته باشه رو ببینید."
        />
      </Head>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
