import Main from "../components/main";

const Website = ({ Component, pageProps, router }) => {
  return (
    <Main router={router}>
      <Component {...pageProps} key={router.route} />
    </Main>
  );
};

export default Website;