import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Herobg from "../hero-bg";
import Footer from "../footer";
import Loader from "../loader";

const LazyVoxelDog = dynamic(() => import("../hero-bg"), {
  ssr: false,
  loading: () => <Loader />,
});

const Main = ({ children, router }) => {
  console.log("Router", router);
  return (
    <Box as="main" pb={12}>
      <Head>
        <meta name="description" content="Shrikant Govande's homepage" />
        <meta name="author" content="Shrikant Govande" />

        <meta property="og:site_name" content="Shrikant Govande" />
        <meta name="og:title" content="Shrikant Govande" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Shrikant Govande - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
