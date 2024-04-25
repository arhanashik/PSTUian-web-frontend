// 'use client'
// pages/_app.js
import "../styles/tailwind.config.css";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../layouts/main.layout";
// import('preline')

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PSTUian</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
