import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
//* Mobila responsiva buggar sönder efter grid-area, åtgärda - Klar?
//TODO Fixa blurr effekt på layout om menyn är aktiv?
export interface LayoutProps {}

export const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box
      as="main"
      pb={8}
      color={useColorModeValue('#141E27', '#F7F5F2')}
      bg={useColorModeValue('#f0e7db', '#141E27')}
    >
      <header>
        <Header />
      </header>
      <Container maxW="container.2xl" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};
