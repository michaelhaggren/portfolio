import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
//* Mobila responsiva buggar sönder efter grid-area, åtgärda
//TODO Fixa blurr effekt på layout om menyn är aktiv?
export interface LayoutProps {}

export const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => {
  return (
    <AnimatePresence mode="wait">
      <Box
        as="main"
        pb={8}
        color={useColorModeValue("#1B2430", "#FEFCF3")}
        bg={useColorModeValue("#FEFCF3", "#1B2430")}
      >
        <header>
          <Header />
        </header>
        <Container maxW="container.2xl" pt={14}>
          {children}

          <Footer />
        </Container>
      </Box>
    </AnimatePresence>
  );
};
