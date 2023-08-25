import React, { useState, createContext, useContext } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./global.css";
import Head from "next/head";
import MobileContext from "@/utils/MobileContext";
const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const [isDesktop, setDesktop] = React.useState(false);
  const [isMobile, setMobile] = React.useState(false);
  const [isWindows, setWindows] = React.useState(false);

  React.useEffect(() => {
    if (
      (window.innerWidth === 1920 && window.innerHeight === 1080) ||
      (window.innerWidth === 1600 && window.innerHeight === 900) ||
      window.innerWidth === 1980
    ) {
      setWindows(true);
    } else {
      setWindows(false);
    }
    if (window.innerWidth > 1430) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    const updateMedia = () => {
      if (window.innerWidth === 1920) {
        setWindows(true);
      } else {
        setWindows(false);
      }
      if (window.innerWidth > 1430) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
      if (window.innerWidth < 500) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  console.log("data", isMobile);
  React.useEffect(() => {
    document.title = "Royal China";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Head>
        <title>Royal China</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Royal China" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <motion.div key={router.pathname}>
        <MobileContext.Provider value={{ isMobile: isMobile }}>
          <Component {...pageProps} />
        </MobileContext.Provider>

        <motion.div
          className="slide-in"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
