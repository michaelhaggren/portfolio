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
<<<<<<< HEAD
        {route.pathname !== '/404' ? (
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
        <ToastContainer theme='dark' />
=======
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          transition={{ type: 'spring', duration: 0.6 }}
          variants={{
            pageInitial: {
              y: 150,
            },
            pageAnimate: {
              y: 0,
            },
          }}
        >
          {route.pathname !== '/404' ? (
            <Layout>
              <Component {...pageProps} key={router.route} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
          <ToastContainer theme='dark' />
        </motion.div>
>>>>>>> origin/main
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
