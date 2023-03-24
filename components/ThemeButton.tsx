import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

export const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={useColorModeValue('light', 'dark')}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='mx-4'
        >
          <IconButton
            aria-label='Toggle theme'
            variant='unstyled'
            size='sm'
            bg={useColorModeValue('#1B2430', '#FEFCF3')}
            color={useColorModeValue('#FEFCF3', '#1B2430')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
