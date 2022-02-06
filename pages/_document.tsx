import Document, { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

class MyDocument extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content="css calc - simple css calculations"
          />
          <meta
            name="description"
            content="css calc - simple css calculations"
          />
          <meta property="og:image" content="opengraph.png"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
