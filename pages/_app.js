import { Layout } from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component
          style={{ width: "100%", height: "100%" }}
          className="scroll-smooth"
          {...pageProps}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
