import styles from './Footer.module.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Box, Flex, Icon, Link } from '@chakra-ui/react';
export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <Box className="flex flex-col  items-center" fontSize="sm">
      <div className="flex mb-4">
        <a
          target="_blank"
          rel="noreferrer"
          className=" hover:scale-125 px-2"
          href="https://www.linkedin.com/in/michael-haggren-519487198/"
        >
          <FaLinkedin fontSize="40" color="#0e76a8 " />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className=" hover:scale-125 px-2"
          href="https://github.com/michaelhaggren"
        >
          <FaGithub fontSize="40" color="black" />
        </a>
      </div>
      <p className=" opacity-80 font-montserrat font-semibold tracking-wide text-base">
        &copy; {new Date().getFullYear()} Michael Haggren
      </p>
    </Box>
  );
};
