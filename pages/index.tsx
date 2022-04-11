import NextLink from 'next/link';
import {
  Divider,
  Heading,
  Box,
  Button,
  Badge,
  SimpleGrid,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import { FaBeer } from 'react-icons/fa';
import { HiChartBar, HiOutlineCode } from 'react-icons/hi';
import { GiPianoKeys, GiFoodTruck } from 'react-icons/gi';
import Head from 'next/head';
const Home = () => (
  <Box>
    <Head>
      <title> Michael Haggren - Portfolio</title>
      <meta name="twitter:title" />
      <meta property="og:title" />
    </Head>
    <div className="grid place-items-center grid-cols-1">
      <div className="w-2/4 md:w-1/4 sm:w-1/6">
        <Box borderRadius="xl" mb={6} mt={10} p={3} textAlign="center">
          en blivande webbutvecklare med rötterna från de halländska trakterna,
          för närvarande bosatt i{' '}
          <span className="tracking-widest text-orange-orangePrimary font-semibold">
            {' '}
            Borås
          </span>
        </Box>
        <Box>
          <Box className="flex sm:flex-row flex-col ">
            <Box className="flex flex-col md:px-0 px-2">
              <Heading
                className="text-orange-orangePrimary tracking-widest flex"
                as="h1"
                variant="page-title"
              >
                michael haggren
              </Heading>
              <p className="text-orange-orangePrimary opacity-40 tracking-widest">
                webbutvecklare
              </p>
            </Box>
            <Box>
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="/images/CVBILD.Jpg"
              />{' '}
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          ></Box>
        </Box>
        <Section>
          <Heading as="h2" mt={10} fontSize="1.4em" className=" opacity-80">
            Om mig
          </Heading>

          <Box alignItems="center" my={4}>
            <Paragraph>
              En teknikintresserad IT-student som har under studieperioden fått
              upp ett intresse för programmering, mest fokus på frontend då jag
              gillar kombinationen med att knacka kod samtidigt som man får
              designa och lägga fokus på att möta användarens behov.
            </Paragraph>
          </Box>
          <Box alignItems="center" my={4}>
            <Heading
              className="text-orange-orangePrimary opacity-70"
              as="h4"
              fontSize="1em"
              fontWeight="normal"
            >
              Tech-stack
            </Heading>
            <Paragraph>
              <SimpleGrid
                columns={[1, 1, 1, 1, 4]}
                className="flex  mt-2 justify-around gap-4  items-center"
              >
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  Next
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  C#
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  Tailwind
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  SCSS
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  MSSQL
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  MongoDB
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  React
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  Typescript
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  className="border-orange-orangePrimary border text-center"
                  colorScheme="grey"
                >
                  Typescript
                </Badge>
              </SimpleGrid>
            </Paragraph>
          </Box>
        </Section>
        <Divider />
        <Section>
          <Heading as="h2" mt={10} fontSize="1.4em" className=" opacity-80">
            Projekt
          </Heading>

          <Box alignItems="center" my={4}>
            <NextLink href="/projects" scroll={false} passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('#f0e7db', '#141E27')}
                color={useColorModeValue('#141E27', '#f0e7db')}
              >
                Mina projekt
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Divider color="white" mb="6" />
        <Section delay="0.4">
          <Heading as="h2" fontSize="1.7em" mb="4" className=" opacity-80">
            Intressen
          </Heading>
          <div className="flex justify-between items-start md:flex-row flex-col">
            <Paragraph>
              Löpning{' '}
              <FaBeer className="inline-block text-orange-orangePrimary" />
            </Paragraph>
            <Paragraph>
              Aktier{' '}
              <HiChartBar className="inline-block text-orange-orangePrimary" />
            </Paragraph>
            <Paragraph>
              Mat{' '}
              <GiFoodTruck className="inline-block text-orange-orangePrimary" />
            </Paragraph>
            <Paragraph>
              Piano{' '}
              <GiPianoKeys className="inline-block text-orange-orangePrimary" />
            </Paragraph>
            <Paragraph>
              Kodning{' '}
              <HiOutlineCode className="inline-block text-orange-orangePrimary" />
            </Paragraph>
          </div>
        </Section>
      </div>
    </div>
  </Box>
);

export default Home;
