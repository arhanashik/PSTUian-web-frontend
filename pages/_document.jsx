// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpstu.ac.bd%2Flogin&psig=AOvVaw2ChC04nItYCLhbnk-1HNLy&ust=1714140900479000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiFr83G3YUDFQAAAAAdAAAAABAR"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <meta
            name="description"
            content="A social media app built with the MERN stack and TailwindCSS"
            key="desc"
          />
          <meta
            property="og:title"
            content="A social media app built with the MERN stack and TailwindCSS"
          />
          <meta
            property="og:description"
            content="A social media app built with the MERN stack and TailwindCSS"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
