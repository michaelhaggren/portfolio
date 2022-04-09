import styles from './Header.module.scss';
import NextLink from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Logga from '../../icons/Logga.svg';
import Hamburger from 'hamburger-react';
import {
  Box,
  Hide,
  IconButton,
  Show,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [headerMenu, setHeaderMenu] = useState(false);
  const { toggleColorMode } = useColorMode();
  const toggleMenu = () => {
    setHeaderMenu(!headerMenu);
  };

  const links = [
    {
      title: 'projekt',
      route: '/projects',
    },
  ];
  return (
    <Box bg={useColorModeValue('#f0e7db', '#141E27')}>
      <nav className="py-4 md:py-4 border-b border-b-orange-orangePrimary border-opacity-50">
        <div className="md:w-2/4 h-12 container md:px-0 px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between  items-center">
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mx-4"
              >
                <Hide below="md">
                  <IconButton
                    aria-label="Toggle theme"
                    variant="unstyled"
                    bg={useColorModeValue('#321F28', '#FFD36E')}
                    color={useColorModeValue('#FFD36E', '#321F28')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                  ></IconButton>
                </Hide>
              </motion.div>
            </AnimatePresence>
            <NextLink href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Start"
                className="fixed md:sticky left-7 top-6"
              >
                <Logga />
              </motion.button>
            </NextLink>

            <button
              onClick={() => {
                toggleMenu();
              }}
              className={`${
                headerMenu ? 'hidden' : ''
              } py-1 rounded  hover:opacity-75 md:hidden`}
              aria-label="Open menu"
            >
              <Hamburger size={20} toggled={headerMenu} />
            </button>
          </div>

          <Box
            className={`${headerMenu ? '' : 'hidden'}
              z-50 animate-menuSlide md:animate-none shadow-xl md:shadow-none fixed md:sticky top-0 right-0 w-9/12 md:w-auto h-screen md:h-auto  md:flex flex-col md:flex-row  md:ml-auto md:mt-0`}
          >
            {' '}
            <div className="flex  flex-row-reverse items-center md:hidden">
              <button
                onClick={() => {
                  toggleMenu();
                }}
                className={`${
                  headerMenu ? '' : 'hidden'
                } animate-closeSlide  px-1 py-1 rounded mr-4 mt-2`}
                aria-label="Open menu"
              >
                <Hamburger size={20} toggled={headerMenu} />
              </button>
            </div>
            <ol className="flex flex-col sm:flex-col  md:flex-row pl-4 md:pl-auto pr-4 md:pr-auto font-montserrat">
              {links.map((link, index) => {
                return (
                  <NextLink href={link.route} key={index} passHref>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileFocus={{
                        scale: 1.2,
                        textShadow: '0px 0px 12px rgb(52, 211, 153)',
                      }}
                      onClick={() => {
                        toggleMenu();
                      }}
                      className="text-left text-sm  mb:w-auto w-14 hover:border-b ml-6 mt-6 mb-4 md:mr-6 md:mb-0 md:mt-0 md:mx-6 font-montserrat font-bold"
                    >
                      {link.title}
                    </motion.button>
                  </NextLink>
                );
              })}
            </ol>
            <Box className="md:mr-4  flex flex-row md:justify-center md:items-center mt-6 md:mt-0">
              <motion.a
                whileTap={{ scale: 0.9 }}
                className="border hover:border-orange-orangePrimary rounded text-sm text-left  px-4 py-2 ml-10 md:ml-0 md:mx-2 transition-colors duration-200 "
                href="mailto:michael.haggren@gmail.com"
                rel="noreferrer"
              >
                Kontakt
              </motion.a>
            </Box>
          </Box>
        </div>
      </nav>
    </Box>
  );
};
