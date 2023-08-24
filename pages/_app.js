import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./global.css";
import Head from "next/head";
const App = ({ Component, pageProps }) => {
  const router = useRouter();

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
        <Component {...pageProps} />
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
