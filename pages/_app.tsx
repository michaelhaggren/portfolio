import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps, router }: AppProps) {
  const route = useRouter();
  return (
    <ChakraProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ type: 'spring', duration: 1 }}
        variants={{
          pageInitial: {
            x: 200,
          },
          pageAnimate: {
            x: 0,
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
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
