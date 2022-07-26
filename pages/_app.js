import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Chakra from "../component/chakra";
import Fonts from "../component/fonts";
import Layout from "../component/layout/main";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const App = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default App;
