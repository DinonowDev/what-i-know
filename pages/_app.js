// import layout component
import Layout from "../components/layout";
import { UserProvider } from "../context/data";
import { LoadingProvider } from "../context/loading";

// import style
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <LoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProvider>
    </UserProvider>
  );
}

export default MyApp;
