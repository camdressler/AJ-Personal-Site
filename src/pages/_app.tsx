import Head from "next/head";
import { AppProps } from "next/app";

import "../styles/global.css";

function MyApp({ Component, pageProps, err }: AppProps & { err: any }) {
  return (
    <>
      <Head>
        <title>AJ Matise</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AJ Matise's landing page" />
      </Head>
      <Component {...pageProps} err={err} />
    </>
  );
}

export default MyApp;
