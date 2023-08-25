import NextDocumnet, { Html, Head, Main, NextScript } from "next/document";

export default class Documnet extends NextDocumnet {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
