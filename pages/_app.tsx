import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mb-10">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
