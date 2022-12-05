import type { AppProps } from "next/app";
import "../styles/variables.scss";
import "../styles/globals.css";
import "../styles/index.scss";
// import "../styles/ux-styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
