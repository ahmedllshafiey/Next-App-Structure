import Head from "next/head";

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Next Structure</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Main;
