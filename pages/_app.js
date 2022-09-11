import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import connectors from "../connectors";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Web3ReactProvider>
  );
}

export default MyApp;
