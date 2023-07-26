import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/fonts.css" />
      </Head>
      {children}
    </>
  );
};

export default Layout;