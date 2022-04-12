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
import ProfilBild from '../public/images/CVBIld.png';
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
        <Section delay="0.2">
          <Box borderRadius="xl" mb={6} mt={10} p={3} textAlign="center">
            en blivande webbutvecklare med rötterna från de halländska
            trakterna, för närvarande bosatt i{' '}
            <Box
              className="inline-block"
              color={useColorModeValue('#180A0A', '#ffb612')}
            >
              <span className="tracking-widest   font-semibold"> Borås</span>
            </Box>
          </Box>

          <Box>
            <Box className="flex sm:flex-row flex-col ">
              <Box
                color={useColorModeValue('#141E27', '#ffb612')}
                className="flex flex-col md:px-0 px-2"
              >
                <Heading
                  className=" tracking-widest flex"
                  as="h1"
                  variant="page-title"
                >
                  michael haggren
                </Heading>
                <p className=" opacity-40 tracking-widest">webbutvecklare</p>
              </Box>
              <Box>
                <Avatar
                  size="2xl"
                  name="Michael Haggren"
                  src="/images/profilbild.png"
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
        </Section>
        <Section delay="0.4">
          <Heading as="h2" mt={10} fontSize="1.4em" className=" opacity-80">
            Om mig
          </Heading>

          <Box alignItems="center" my={4}>
            <Paragraph>
              En teknikintresserad student som under studieperioden fått upp ett
              intresse för programmering, mest fokus på frontend då jag gillar
              kombinationen med att knacka kod samtidigt som man får designa.
            </Paragraph>
          </Box>
          <Box alignItems="center" my={4}>
            <Heading as="h3" fontSize="1em" fontWeight="bold">
              Kompetens
            </Heading>
            <Paragraph>
              <SimpleGrid
                columns={[1, 1, 1, 1, 4]}
                className="flex  mt-2 justify-around gap-4  items-center"
              >
                <Badge
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  py="2"
                  px="1"
                  className="border text-center"
                  colorScheme="grey"
                >
                  .NET/C#
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  Tailwind
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  SCSS
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  MSSQL
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  MongoDB
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  React/Next
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  Typescript
                </Badge>
                <Badge
                  py="2"
                  px="1"
                  border="1px"
                  borderColor={useColorModeValue('#141E27', '#ffb612')}
                  className="border text-center"
                  colorScheme="grey"
                >
                  JAVASCRIPT
                </Badge>
              </SimpleGrid>
            </Paragraph>
          </Box>
        </Section>
        <Divider />
        <Section delay="0.6">
          <Heading as="h2" mt={10} fontSize="1.4em" className=" opacity-80">
            Projekt
          </Heading>

          <Box alignItems="center" my={4}>
            <NextLink href="/projects" scroll={false} passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('#141E27', '#ffb612')}
                color={useColorModeValue('#ffb612', '#141E27')}
                className="hover:bg-current text-current"
              >
                Mina Projekt
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Divider color="white" mb="6" />
        <Section delay="0.8">
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
