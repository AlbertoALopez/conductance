import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server';


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Conductance</title>
          <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
        </Head>
        <body>
          <style jsx>{`
            body {
              font-family: 'Karla', sans-serif;
            }
          `}
          </style>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}