import styles from './Footer.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Box, Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react';
export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <Box  color={useColorModeValue('#121212', '#F7F5F2')} className="flex flex-col  items-center" fontSize="sm">
      <div className="flex mb-4">
        <a
          target="_blank"
          rel="noreferrer"
          className=" hover:scale-125 px-2"
          href="https://www.linkedin.com/in/michael-haggren-519487198/"
        >
          <FaLinkedin fontSize="40"  />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className=" hover:scale-125 px-2"
          href="https://github.com/michaelhaggren"
        >
          <FaGithub fontSize="40"  />
        </a>
      </div>
      <p className=" opacity-80 font-montserrat font-semibold tracking-wide text-base">
        &copy; {new Date().getFullYear()} Michael Haggren
      </p>
    </Box>
  );
};
