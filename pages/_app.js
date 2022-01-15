import { Layout } from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component
        style={{ width: "100%", height: "100%" }}
        className="scroll-smooth"
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
