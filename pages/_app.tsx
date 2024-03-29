import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChakraProvider as Chakra } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}
function MyApp({ Component, pageProps, router }: AppProps) {
  const route = useRouter();
  return (
    <Chakra>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        {route.pathname !== '/404' ? (
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
        <ToastContainer theme="dark" />
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
