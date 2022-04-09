import { motion } from 'framer-motion';
import Head from 'next/head';
import { ArticleLayoutProps } from '../constants';
import { CardItemStyle } from './Card';
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const ArticleLayout = ({ children, title }: ArticleLayoutProps) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Michael Haggren</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}

      <CardItemStyle />
    </>
  </motion.article>
);

export default ArticleLayout;
