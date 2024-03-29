import NextLink from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import Logga from '/icons/Logga.svg';
import { MdSettings } from 'react-icons/md';
import {
  Box,
  Container,
  Hide,
  IconButton,
  Icon,
  Show,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ThemeButton } from '../ThemeButton';
import { CloseIcon, CopyIcon, HamburgerIcon } from '@chakra-ui/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const handleClickOutside = (
    event: MouseEvent,
    menuRef: RefObject<HTMLElement>
  ) => {
    // Close the menu if the click is outside of the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event, menuRef);
    };

    document.addEventListener(
      'mousedown',
      handleClick as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClick as unknown as EventListener
      );
    };
  }, [menuRef]);
  const notify = () =>
    toast.success('🎇 Email kopierad!', {
      position: 'top-left',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  //* Onödigt kanske då jag bara har två sidor på hemsidan? Hade ursprungligen
  //* 3 men blev så rörigt med 2 onödiga sidor för '/kontakt' och '/om mig'
  const links = [
    {
      title: 'Projekt',
      route: '/projects',
    },
  ];
  return (
    <Container maxW='2xl' bg={useColorModeValue('#FEFCF3', '#1B2430')}>
      <Box className='h-16 px-4 mx-auto md:flex md:items-center'>
        <Box className='flex justify-between items-center'>
          <NextLink href='/' passHref>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={useColorModeValue('light', 'dark')}
              className='md:static fill-mint-mintPrimary fixed left-5 top-5'
              aria-label='Start'
            >
              <IconButton
                variant='unstyled'
                fill={useColorModeValue('#1B2430', '#ffb612')}
                icon={useColorModeValue(<Logga />, <Logga />)}
                aria-label='Logga'
              >
                {' '}
              </IconButton>
            </motion.button>
          </NextLink>
        </Box>
        <button
          onClick={() => {
            toggleMenu();
          }}
          className={`${
            showMenu ? 'hidden' : ''
          } px-1 py-4   md:static fixed top-2 -right-2 visible md:hidden  hover:opacity-75  mr-4 mt-0`}
          aria-label='Open menu'
        >
          <Icon boxSize='7' as={HamburgerIcon} />
        </button>
        <Box
          bg={useColorModeValue('#FEFCF3', '#1B2430')}
          ref={menuRef}
          className={`${showMenu ? '' : 'hidden'}
              z-50 animate-menuSlide md:animate-none shadow-xl md:shadow-none fixed md:sticky top-0 right-0 w-9/12 md:w-auto h-screen md:h-auto  md:flex flex-col md:flex-row  md:ml-auto md:mt-0`}
        >
          <div className='flex flex-row-reverse items-center'>
            <button
              onClick={() => {
                toggleMenu();
              }}
              className={`${
                showMenu ? '' : 'hidden'
              } animate-closeSlide px-1 py-4 rounded hover:opacity-75 md:hidden mr-4 mt-2`}
              aria-label='Close menu'
            >
              <Icon as={CloseIcon} />
            </button>
          </div>
          <ol className='flex flex-col sm:flex-col  md:flex-row pl-4 md:pl-auto pr-4 md:pr-auto font-montserrat'>
            {links.map((path, index) => (
              <NextLink href={path.route} key={index} passHref>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    toggleMenu();
                  }}
                  className='text-left text-sm   mb:w-auto w-14 hover:border-b hover:border-current ml-6 mt-6 mb-4 md:mr-6 md:mb-0 md:mt-0 md:mx-6 font-montserrat font-bold'
                >
                  {path.title}
                </motion.button>
              </NextLink>
            ))}
            <Box className='md:mt-0 flex'>
              <CopyToClipboard text='michael.haggren@gmail.com'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className='border-2 border-current hover:border-orange-orangePrimary rounded mt-4 md:mt-0 text-sm text-left  px-4 py-2 ml-2 md:ml-4 md:mx-2 transition-colors duration-200 '
                  onClick={() => notify()}
                >
                  Kontakt
                  <Icon as={CopyIcon} className='mx-2' />
                </motion.button>
              </CopyToClipboard>
            </Box>
            <Box className='flex items-center mt-4 md:mt-0'>
              <ThemeButton />
            </Box>
          </ol>
        </Box>
      </Box>
    </Container>
  );
};
